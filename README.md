# _Julia Sheremet and Brenda Franco_

#### _Assignment for Epicodus_

#### By: _**Julia Sheremet and Brenda Franco**_

## <span style="color:#74875d;">Description</span>

_This webpage application is designed to take the a poem from the user and return whether in fact the poem is a haiku. To understand what a kaiku is please feel free to reference this <a href="https://en.wikipedia.org/wiki/Haiku">link</a>._

_This project uses Webpack to bundle and minify the code. The test runner is Karma and the syntax flavor is Jasmine. Babel is used to transpile ES6. All dependencies required are included in this project._

## <span style="color:#74875d;">Setup/Installation Requirements</span>

* Clone repository on your local computer.
* If you already have Node, Homebrew, and Karma installed, then skip to "Install Dependencies."

  #### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    * $ brew install node
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    * $ node -v
    * $ npm -v

  #### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    * $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    * $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

  #### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    * $ npm install -g karma-cli

  #### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    * $ npm install

  #### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    * $ npm run build
  * To run the local test server:
    * $ npm run start
  * To run test in Karma:
    * $ npm test


## <span style="color:#74875d;">Known Bugs</span>

_Feel free to email either me at [juliajessicasher@gmail.com](mailto:juliajessicasher@gmail.com) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments of my work._

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * webpack | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
| * babel-loader |  |
| * css-loader & style-loader | | |




### <span style="color:#74875d;">Specs</span>
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will verify if the poem has three lines | Input: "three sentences" | Output: true |
| The program will return number of vowels in a single word | Input: "hello" | Output: "2" |
| The program will subtract a silent 'e' at the end of a word (a vowel preceded by a consonant) | Input: "take" | Output: "1" |
| The program will subtract 1 vowel for each diphthong in a word | Input: "pain" | Output: "1" |
| The program will return number of vowels in multiple words | Input: "hello there" | Output: "3" |
| The program will return number of vowels in multiple words | Input1: "When breaking the fast" Input2: "As the sun heads to the west" Input3: "The sweet taste of dates"| Output: [3,7,3] |


### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Julia Sheremet and Brenda Franco_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
