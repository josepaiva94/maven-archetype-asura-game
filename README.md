Asura Game Maven Archetype
======================================

Summary
-------
This is a Maven archetype for creating an Asura challenge (game).

Generated project characteristics
-------------------------
* Asura Builder framework
* GSON
* JUnit 4
* Log4J

Prerequisites
-------------

- JDK 8
- Maven 3

Create a project
----------------

Interactive mode

```bash
    mvn archetype:generate \
        -DarchetypeGroupId=pt.up.fc.dcc.asura.builder \
        -DarchetypeArtifactId=maven-archetype-asura-game \
        -DarchetypeVersion=0.0.1
```

Batch mode

```bash
    mvn archetype:generate -B \
        -DarchetypeGroupId=pt.up.fc.dcc.asura.builder \
        -DarchetypeArtifactId=maven-archetype-asura-game \
        -DarchetypeVersion=0.0.1 \
        -DgroupId=my.groupId \
        -DartifactId=my-artifactId \
        -Dversion=version \
        -Dpackage=mypackage.name \
        -DgameName=MyGameName \
        -Dauthor="My Full Name" \
        -DauthorEmail=me@myemail
```

Note: The above commands will bootstrap a project using the archetype published here: https://github.com/mooshak-dcc/maven-archetype-asura-game

Run the project
----------------

Navigate to newly created project directory (`my-artifactId`) and then run:

```bash
	clean compile install exec:java
```

Test
----

Inside the project directory (`my-artifactId`) run:

```bash
	clean compile test
```


Package the project
-------------------

Inside the project directory (`my-artifactId`) run:

```bash
	package
```

Create a new project in IntelliJ
--------------------------------

* Create new project `File > New > Project`
* Click Maven on the left hand side of the new project dialog
* Check `Create from archetype`
* Click the `Add Archetype` button
* Set `Group Id` to `pt.up.fc.dcc.asura.builder`
* Set `Artifact Id` to `maven-archetype-asura-game`
* Set `Version` to `0.0.1`
* Set `Repository` to `https://github.com/mooshak-dcc/maven-archetype-asura-game`
* Set  `Group Id`, `Artifact Id` and `Version` of your project, and click `Next`
* Add `package`, `gameName`, `author` and `authorEmail` for your project  and click `Next`
* Click `Next` and create the project

Note: If you would like to create a project using archetype published in your local repository, skip repository field and make sure it is installed locally (see below).

If you use Eclipse, you may follow 


Install archetype locally
-------------------------

To install the archetype in your local repository execute the following commands:

```bash
    git clone https://github.com/mooshak-dcc/maven-archetype-asura-game
    cd maven-archetype-asura-game
    mvn clean install
```

Create a project from a local repository
----------------------------------------

Create a new empty directory for your project and navigate into it and then run:

```bash
    mvn archetype:generate -B \
        -DarchetypeGroupId=pt.up.fc.dcc.asura.builder \
        -DarchetypeArtifactId=maven-archetype-asura-game \
        -DarchetypeVersion=0.0.1 \
        -DgroupId=my.groupId \
        -DartifactId=my-artifactId \
        -Dversion=version \
        -Dpackage=mypackage.name \
        -DgameName=MyGameName \
        -Dauthor="My Full Name" \
        -DauthorEmail=me@myemail
```

Note: The above command will bootstrap a project using the archetype published in your local repository.

