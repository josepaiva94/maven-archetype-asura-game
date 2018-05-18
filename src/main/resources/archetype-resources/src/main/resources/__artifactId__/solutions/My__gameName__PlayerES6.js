#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

// ------------------------ Skeleton --------------------------------

const ${gameName}Player = require('./${artifactId}/wrappers/es6/${gameName}Player');

/**
 * ${gameName} player in Javascript
 *
 * @author ${author} <code>${authorEmail}</code>
 */
class My${gameName}Player extends ${gameName}Player {

    // ---------------------- Your code below ---------------------------

    /**
     * Get the name of the player
     *
     * @returns {string} name of the player
     */
    getName() {
        return '${author}';
    }

    /**
     * Initialize the player
     */
    init() {

    }

    /**
     * Execute player action
     */
    execute() {

    }
}


// ------------------------ Skeleton --------------------------------

// export this player
module.exports = My${gameName}Player;
