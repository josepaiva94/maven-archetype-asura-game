#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )

import ${artifactId}.wrappers.java.${gameName}Player;

import java.util.Random;

/**
 * ${gameName} player in Java
 *
 * @author ${author} <code>${authorEmail}</code>
 */
public class My${gameName}Player extends ${gameName}Player {

    @Override
    public String getName() {
        return "${author}";
    }

    @Override
    public void init() {


    }

    @Override
    public void execute() {


    }
}
