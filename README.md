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

Install archetype locally
-------------------------

To install the archetype in your local repository execute the following commands:

```bash
    git clone https://github.com/mooshak-dcc/maven-archetype-asura-game
    cd maven-archetype-asura-game
    mvn clean install
```

Create a new project in Eclipse
-------------------------------

* Create new project `File > New > Project`
* Click `Maven > Maven Project` the new project dialog
* Do NOT select `Create a simple project (skip archetype selection)`, just click `Next`
* Click the `Add Archetype ...` button
* Set `Group Id` to `pt.up.fc.dcc.asura.builder`
* Set `Artifact Id` to `maven-archetype-asura-game`
* Set `Version` to `0.0.1`
* Select the added archetype and click `Next`
* Set  `Group Id`, `Artifact Id`, `Version`, and `Package` of your project
* Add `gameName`, `author` and `authorEmail` properties for your project and click `Next`
* Click `Finish` and create the project

Note: You need to have the archetype installed in your local repository.

Create a new project in IntelliJ
--------------------------------

* Create new project `File > New > Project`
* Click Maven on the left hand side of the new project dialog
* Check `Create from archetype`
* Click the `Add Archetype` button
* Set `Group Id` to `pt.up.fc.dcc.asura.builder`
* Set `Artifact Id` to `maven-archetype-asura-game`
* Set `Version` to `0.0.1`
* Set  `Group Id`, `Artifact Id` and `Version` of your project, and click `Next`
* Add `package`, `gameName`, `author` and `authorEmail` properties for your project  and click `Next`
* Click `Next` and create the project

Note: You need to have the archetype installed in your local repository.

Create a project from a local repository
----------------------------------------

Create a new empty directory for your project and navigate into it and then run one of the following commands:

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

Note: The above command will bootstrap a project using the archetype published in your local repository.

Run the project
----------------

Navigate to newly created project directory (`my-artifactId`) and then run:

```bash
	mvn clean compile install exec:java
```

Test
----

Inside the project directory (`my-artifactId`) run:

```bash
	mvn clean compile test
```


Package the project
-------------------

Inside the project directory (`my-artifactId`) run:

```bash
	mvn package
```
