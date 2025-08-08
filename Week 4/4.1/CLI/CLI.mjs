#!/usr/bin/env node
// ^ shebang enables direct script execution in Unix-like systems without explicitly calling node js

// create a cli
// input -> node index.js /Users/whatever/file.txt
// output -> you have "X" words in this file


import { Command } from 'commander';
import * as fs from 'fs';


const program = new Command();


function count(file){
    fs.readFile(file, "utf-8", (err, data) => {
        // console.log(typeof(file));
        if (err){
            console.log("Enter complete path");
        } else {
            // treat the entire sequence of whitespace characters as a single delimiter 
            // console.log(data.split(/\s+/));
            // filtering based on truthy and falsy value 
            // every non-empty object is truthy
            // 0, null, undefined, NaN, false, [], {} are falsy values 
            console.log(data.split(/\s+/).filter(Boolean).length);
        }
    })
}


program
    .name("MY-CLI")
    .description("A CLI APP built with commander.js")
    .version('1.0.0')

program
    .command('count')
    .argument('<file>', "Enter file to count words from ")
    .action((file) => {
        count(file);
    });

// basically parses everhthing from process.argv and dispatches into respective options and commands 
program.parse();



