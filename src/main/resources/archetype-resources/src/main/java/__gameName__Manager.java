#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import pt.up.fc.dcc.asura.builder.base.*;
import pt.up.fc.dcc.asura.builder.base.movie.GameMovieBuilderImpl;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Manager of the ${gameName}.
 *
 * @author ${author} <code>${authorEmail}</code>
 */
public class ${gameName}Manager extends GameManager {

    private GameState currentState = null;

    @Override
    public String getGameStateClassName() {
        return ${gameName}State.class.getCanonicalName();
    }

    @Override
    public int getMaxPlayersPerMatch() {
        return 2;
    }

    @Override
    public int getMinPlayersPerMatch() {
        return 2;
    }

    @Override
    public void manage(GameState state, Map<String, Process> players) throws IOException {

        if (players.size() < 1)
            throw new IllegalArgumentException("Invalid number of players: " + players.size());

        currentState = state;

        movieBuilder = new GameMovieBuilderImpl();

        try (Streamer streamer = new Streamer(players)) {

            // collect player names
            Map<String, String> playerNames = new HashMap<>();
            for (String player : players.keySet()) {
                String name = getName(streamer.readActionFrom(player));
                playerNames.put(player, name);
            }

            // prepare state
            currentState.prepare(movieBuilder, playerNames);

            // run game

        }
    }

}
