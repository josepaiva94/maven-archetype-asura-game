#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

const PlayerWrapper = require('../../../wrappers/es6/PlayerWrapper');

/**
 * Functions that provide game-specific functionality to ${gameName} players
 *
 * @author ${author} <code>${authorEmail}</code>
 */
class ${gameName}Player extends PlayerWrapper {

    constructor() {
        super();
    }

    /**
     * Update the state of the game on the player
     *
     * @param state_update {object} the state update
     */
    update(state_update) {


    }

    /**
     * Manage player lifecycle during the game, invoking the other methods when required
     */
    run() {


    }
}

module.exports = ${gameName}Player;
