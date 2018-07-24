#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import pt.up.fc.dcc.asura.builder.base.messaging.PlayerAction;
import pt.up.fc.dcc.asura.builder.base.messaging.StateUpdate;
import pt.up.fc.dcc.asura.builder.base.movie.GameMovieBuilder;
import pt.up.fc.dcc.asura.builder.base.GameState;

import java.util.Map;

/**
 * Stores the current state of the ${gameName} game
 *
 * @author ${author} <code>${authorEmail}</code>
 */
public class ${gameName}State implements GameState {

    @Override
    public void prepare(GameMovieBuilder movieBuilder, String title, Map<String, String> players) {

        // TODO
    }

    @Override
    public void execute(GameMovieBuilder movieBuilder, String playerId, PlayerAction action) {

        // TODO
    }

    @Override
    public StateUpdate getStateUpdateFor(String player) {

        // TODO
        return null;
    }

    @Override
    public void endRound(GameMovieBuilder movieBuilder) {

        // TODO
    }

    @Override
    public boolean isRunning() {

        // TODO
        return false;
    }

    @Override
    public void finalize(GameMovieBuilder movieBuilder) {

        // TODO
    }
}
