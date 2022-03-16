// import sym from 'log-symbols';
// import chalk from "chalk";

const currentNodeVersion = process.versions.node;
const semanticVersion = currentNodeVersion.split('.');
const usersVersionOfNode = semanticVersion[0];

export const getNodeCompatibility = (minVer) => {
  let isCompatible = true;

  if (usersVersionOfNode <  Math.abs(minVer)) {
    const msg = buildFailureMsg(minVer);
    console.error('Your Node version is: ', currentNodeVersion);
    console.error(msg);
    isCompatible = false;
    return isCompatible;
  };
  return isCompatible;
};

export const buildFailureMsg = (minVer) => `
    This program requires a minimum Node.js version of ${minVer}.
    Please update your version of Node.js to run this program.
    https://nodejs.org/en/download
`;