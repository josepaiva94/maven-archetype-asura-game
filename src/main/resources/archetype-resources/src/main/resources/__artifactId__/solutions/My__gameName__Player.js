#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

// ------------------------ Skeleton --------------------------------

var ${gameName}Player = require('./${artifactId}/wrappers/js/${gameName}Player');

/**
 * ${gameName} player in Javascript
 *
 * @author ${author} <code>${authorEmail}</code>
 */
function My${gameName}Player() {
    ${gameName}Player.call(this);
}

My${gameName}Player.prototype = Object.create(${gameName}Player.prototype);

// ---------------------- Your code below ---------------------------

/**
 * Get the name of the player
 *
 * @returns {string} name of the player
 */
My${gameName}Player.prototype.getName = function () {
    return '${author}';
};

/**
 * Initialize the player
 */
My${gameName}Player.prototype.init = function () {


};

/**
 * Execute player action
 */
My${gameName}Player.prototype.execute = function () {


};

// ------------------------ Skeleton --------------------------------

// export this player
module.exports = My${gameName}Player;
