#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import org.junit.Assert;
import org.junit.Test;

/**
 * Test the manager of the ${gameName}.
 *
 * @author ${author} <code>${authorEmail}</code>
 */
public class ${gameName}ManagerTest {

    @Test
    public void minPlayersPerMatchTest() {
        ${gameName}Manager manager = new ${gameName}Manager();
        Assert.assertTrue("Minimum number of players should be greater or equal to 1",
            manager.getMinPlayersPerMatch() >= 1);
    }

    @Test
    public void maxPlayersPerMatchTest() {
        ${gameName}Manager manager = new ${gameName}Manager();
        Assert.assertTrue("Maximum number of players should be greater or equal to minimum number of players",
            manager.getMaxPlayersPerMatch() >= manager.getMinPlayersPerMatch());
    }
}
