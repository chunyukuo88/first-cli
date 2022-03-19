#!/usr/bin/env node
import { getNodeCompatibility } from './utils/nodeVersionCheck.mjs';
import { evaluateArgs } from './utils/evaluateArgs.mjs';

function main(){
  console.clear();
  const isCompatible = getNodeCompatibility();
  isCompatible && evaluateArgs(process.argv);
}

main();