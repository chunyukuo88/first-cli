#!/usr/bin/env node
const pkgJSON = require('./package.json');

// const [,, ...args] = process.argv;
console.clear();
console.log(`
${pkgJSON.description} using \`gochenour\`.
You are using version ${pkgJSON.version}
`);

console.log(`
  howzit howzit
  
  I'm Alex Gochenour, and I am an award-winning* JavaScript engineer and founder of Woobler's House. 
  I love baking, running, and all things Chinese.
  
  🔗 Linkedin: https://www.linkedin.com/in/alex-gochenour
  🐈 Github: https://github.com/chunyukuo88
  
  *I was named "Person of the Year" by Time Magazine in 2006.
`);