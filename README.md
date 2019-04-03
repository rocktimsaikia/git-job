Github-Job-cli
==========
![GitHub package.json version](https://img.shields.io/github/package-json/v/RocktimSaikia/gitjob.svg) ![David](https://img.shields.io/david/RocktimSaikia/gitjob.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple CLI tool to look for [Github Jobs](https://jobs.github.com) right in your terminal.

Using this tool is a piece of cake :
![](https://user-images.githubusercontent.com/33410545/55422280-2770b600-5530-11e9-9b0d-19309f6104d9.gif)

This is a simple cli project that i created to teach myself how to build cli apps from complete scratch.
Thought you guys might like it so here it is.

### [Note that this app usues github job api which does not support job search for some specific locations/cities of few countries.]



Installation
------------

`$ npm install -g gitjob`

Docs
----
    Usage: gitjob [any city] [prefered language]

    Note: 
        1) One thing to note that this tool does not accept any flag [ Which was for less confusion while typing.

        3.If you dont add any arguments then it will print the job openings from all around the world.

        2)If any argument is added then the second argument is always has to be a <city> name and the last argument has to be your preferred <programming language>.



Usage
-----
The commands available are: `gitjob`, `gitjob <city> <language>` 
(ex : `gitjob london python`)


Issues
------

Feel free to submit issues and enhancement requests.


Built With
----------
* Node - The whole app is based on node
* Axios - The http client used
* Meow - CLI helper with flags ,input ,arguments etc
* Chalk - Used in styling the cli elements
* Striptags - Used to remove the html tags from a fetched json response.


Contributing
------------

gitjob-cli is Node based cli tool with npm as it's package manager.
This is still a wip project .Plus not very hard to wrap your head around with the code 
so even in you have some experience and want to enhance this project.Then please do contribute

[Read more on contributing guide here](./CONTRIBUTING.md).


License
-------

Copyright (c) 2019 Rocktim Saikia
Licensed under the [MIT license](http://opensource.org/licenses/MIT).