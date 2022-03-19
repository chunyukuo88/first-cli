import { printAboutText } from './about.mjs';
import { printHelpText } from './help.mjs';

export function evaluateArgs(argsArray){
  const validPair = getFirstValidFlagFunctionPair(argsArray);
  if (validPair) {
    const correspondingFunction = validPair[1];
    correspondingFunction();
  } else {
    printNoArgsFound()
  }
}

function getFirstValidFlagFunctionPair(argsArray){
  const userArgsOnly = argsArray.slice(2);
  const flagFunctionPairs = Object.values(flagsAndAliases);
  return getFirstValidPair(userArgsOnly, flagFunctionPairs);
}

function getFirstValidPair(userArgsOnly, flagFunctionPairs){
  for (let i = 0; i < flagFunctionPairs.length; i++){
    if (flagFunctionPairs[i][0] === userArgsOnly[0]) return flagFunctionPairs[i];
  }
}

function printNoArgsFound(){
  const availableFlags = Object.values(flagsAndAliases).map(pair => ('\n\t'+pair[0]));
  console.log(`
    No flags or inputs detected. Try running this CLI with the --help flag for detailed information or try one of the following valid flags and aliases:
    ${availableFlags}
  `);
}

const flagsAndAliases = {
  ABOUT: ['--about', printAboutText],
  ABOUT_ALIAS: ['-a', printAboutText],
  HELP: ['--help', printHelpText],
  HELP_ALIAS: ['-h', printHelpText],
};
