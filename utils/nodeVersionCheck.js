// import sym from 'log-symbols';
// import chalk from "chalk";

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const usersVersionOfNode = semver[0];

export const getNodeCompatibility = (minVer) => {
  const isCompatible = true;

  if (usersVersionOfNode <  minVer) {
    const msg = buildFailureMsg(minVer);
    console.error('Your Node version is: ', currentNodeVersion);
    console.error(msg);
    return !isCompatible;
  };
  return isCompatible;
};

export const buildFailureMsg = (minVer) => `
    This program requires a minimum Node.js version of ${minVer}.
    Please update your version of Node.js to run this program.
    https://nodejs.org/en/download
`;