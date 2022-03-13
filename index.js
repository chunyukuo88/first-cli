#!/usr/bin/env node
import { readFile } from 'fs/promises';
import chalk from "chalk";
import logSymbols from "log-symbols";

const { cyan, yellow } = chalk;
const { log, clear } = console;
const pkg = JSON.parse(
  await readFile(
    new URL('./package.json', import.meta.url)
  )
);


// const [,, ...args] = process.argv;
clear();
log(yellow.inverse(`
${pkg.description} using the ${pkg.name} CLI!
 Version ${pkg.version} 
`));

log(cyan(`
  howzit howzit
  
  I'm Alex Gochenour, and I am an award-winning* JavaScript engineer and founder of Woobler's House. 
  I love baking, running, and all things Chinese.
  
  🔗 Linkedin: https://www.linkedin.com/in/alex-gochenour
  🐈 Github: https://github.com/chunyukuo88
  
  *I was named "Person of the Year" by Time Magazine in 2006.
`));

// module.exports = options => {
//   const defaultOptions = {
//     type: `success`,
//     msg: ``
//   };
//   const opts = {...defaultOptions, ...options};
// };