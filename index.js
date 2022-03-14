#!/usr/bin/env node
import { printWelcome, printSelfIntro } from './utils/messages.js';
import { getNodeCompatibilityErrorMsg } from './utils/nodeVersionCheck.js';

const { clear } = console;
const minimumNodeVersion = 14;

function main(){
  clear();
  const errorMessage = getNodeCompatibilityErrorMsg(minimumNodeVersion);
  if (!errorMessage) {
    printWelcome();
    printSelfIntro();
  }
}

main();