#!/usr/bin/env node
import { greet } from './utils/messages.js';
import { getNodeCompatibility } from './utils/nodeVersionCheck.js';

const { clear } = console;
const minimumNodeVersion = 14; // Check https://nodejs.org/en/about/releases/ periodically for lowest Maintenance LTS version.

function main(){
  clear();
  const isCompatible = getNodeCompatibility(minimumNodeVersion);
  (!isCompatible)
    ? process.exit(1)
    : greet();
}

main();