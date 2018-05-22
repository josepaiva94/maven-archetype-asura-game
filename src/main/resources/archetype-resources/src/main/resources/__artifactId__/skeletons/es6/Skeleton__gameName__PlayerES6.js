#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

// ------------------------ Skeleton --------------------------------

load('${artifactId}/wrappers/es6/${gameName}Player.js');

(function (exports) {'use strict';

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

    exports.Player = My${gameName}Player;
}(this));
