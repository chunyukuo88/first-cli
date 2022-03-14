import chalk from "chalk";
import { readFile } from 'fs/promises';
import logSymbols from "log-symbols";

const { log } = console;
const { cyan, yellow } = chalk;

const pkg = JSON.parse(
  await readFile(
    new URL('../package.json', import.meta.url)
  )
);

export const printWelcome = () => {
  log(yellow.inverse(`
  ${pkg.description} using the ${pkg.name} CLI!
   Version ${pkg.version} 
  `));
};

export const printSelfIntro = () => {
  log(cyan(`
  howzit howzit
  
  I'm Alex Gochenour, and I am an award-winning* JavaScript engineer and founder of Woobler's House. 
  I love baking, running, and all things Chinese.
  
  🔗 Linkedin: https://www.linkedin.com/in/alex-gochenour
  🐈 Github: https://github.com/chunyukuo88
  
  *I was named "Person of the Year" by Time Magazine in 2006.
`));
};