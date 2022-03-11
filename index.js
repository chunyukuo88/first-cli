#!/usr/bin/env node
const [,, ...args] = process.argv;

console.clear();
const name = (args.length > 0)
  ? args
  : "World";

console.log(`
  Hello ${name}!
  
  I'm Alex Gochenour, and I am an award-winning* JavaScript engineer and founder of Woobler's House. 
  I love baking, running, and all things Chinese.
  
  🔗 Linkedin: https://www.linkedin.com/in/alex-gochenour
  🐈 Github: https://github.com/chunyukuo88
  
  *I was named "Person of the Year" by Time Magazine in 2006.
`);