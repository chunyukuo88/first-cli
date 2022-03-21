#!/usr/bin/env node
import { getNodeCompatibility } from './src/nodeVersionCheck.mjs';
import { evaluateArgs } from './src/evaluateArgs.mjs';

const currentNodeVersion = process.versions.node;

function main(){
  console.clear();
  const isCompatible = getNodeCompatibility(currentNodeVersion);
  isCompatible && evaluateArgs(process.argv);
}

main();