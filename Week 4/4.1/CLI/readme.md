# MY-CLI
A simple Node.js Command Line Interface (CLI) application built with commander.js to count the number of words in a specified text file.

## Features

Counts words in a text file provided via command-line argument.
Handles file input using Node.js fs module.
Uses commander.js for structured CLI command and argument parsing.

## Installation

Ensure Node.js is installed on your system.
Clone or download this repository.
Navigate to the project directory and run:npm install


Install the CLI globally    
`npm install -g .`



## Usage
Run the CLI using the following command:
`node index.js count <file-path>`

OR, if installed globally:
`MY-CLI count <file-path>`

### Example
`node index.js count /Users/whatever/file.txt`

### Output:
you have "X" words in this file

## Arguments

<file-path>: The path to the text file to count words from (required).

## Learnings
While building this CLI, I learned the following:

- Shebang (#!/usr/bin/env node): Enables direct script execution on Unix-like systems without explicitly invoking node.
- Commander.js: Simplifies CLI development by handling command parsing, options, and arguments.
- Node.js fs Module: Used for reading file contents asynchronously with fs.readFile.
- String Splitting with Regex: Used data.split(/\s+/) to treat any sequence of whitespace characters (spaces, tabs, newlines) as a single delimiter for word counting.
- Filtering Falsy Values: Applied .filter(Boolean) to remove empty strings from the split array, ensuring accurate word counts.
- Error Handling: Basic error handling for invalid file paths using the fs module's error callback.
- Truthy and Falsy Values: Learned that non-empty objects are truthy, while 0, null, undefined, NaN, false, [], and {} are falsy in JavaScript.
- Process.argv Parsing: commander.js abstracts the parsing of process.argv to dispatch commands and options effectively.

## Dependencies

commander.js: For CLI command and argument parsing.

## License
This project is licensed under the MIT License.
