#!/usr/bin/env node
import 'dotenv/config'
import { getNodeCompatibility } from './src/nodeVersionCheck.mjs';
import { evaluateArgs } from './src/evaluateArgs.mjs';

const currentNodeVersion = process.versions.node;

async function main(){
  console.clear();
  const isCompatible = getNodeCompatibility(currentNodeVersion);
  isCompatible && await evaluateArgs(process.argv);
}

await main();