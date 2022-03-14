#!/usr/bin/env node
import { printWelcome, printSelfIntro } from './utils/messages.js';
const { clear } = console;

clear();
printWelcome();
printSelfIntro();
