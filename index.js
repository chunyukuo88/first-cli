#!/usr/bin/env node
import { printWelcome, printSelfIntro } from './utils/messages.js';
import { getNodeCompatibility } from './utils/nodeVersionCheck.js';

const { clear } = console;
const minimumNodeVersion = 14;

function main(){
  clear();
  const isCompatible = getNodeCompatibility(minimumNodeVersion);
  if (!isCompatible) {
    process.exit(1);
  } else {
    printWelcome();
    printSelfIntro();
  }
}

main();