#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

var PlayerWrapper = require('../../../wrappers/js/PlayerWrapper');

/**
 * Functions that provide game-specific functionality to ${gameName} players
 *
 * @author ${author} <code>${authorEmail}</code>
 */
var ${gameName}Player = function () {
    PlayerWrapper.call(this);
};

${gameName}Player.prototype = Object.create(PlayerWrapper.prototype);

/**
 * Update the state of the game on the player
 *
 * @param state_update {object} the state update
 */
${gameName}Player.prototype.update = function (state_update) {


};

/**
 * Manage player lifecycle during the game, invoking the other methods when required
 */
${gameName}Player.prototype.run = function () {


};

module.exports = ${gameName}Player;
