#!/usr/bin/env node
import { printWelcome, printSelfIntro } from './utils/messages.js';
import { runBasedOnNodeCompatibility } from './utils/nodeVersionCheck.js';

const { clear } = console;
const minimumNodeVersion = 14;

clear();
runBasedOnNodeCompatibility(minimumNodeVersion);
printWelcome();
printSelfIntro();
