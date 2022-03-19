#!/usr/bin/env node
import { getNodeCompatibility } from './utils/nodeVersionCheck.mjs';
import { evaluateArgs } from './utils/evaluateArgs.mjs';

const currentNodeVersion = process.versions.node;

function main(){
  console.clear();
  const isCompatible = getNodeCompatibility(currentNodeVersion);
  isCompatible && evaluateArgs(process.argv);
}

main();