// import sym from 'log-symbols';
// import chalk from "chalk";

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const usersVersionOfNode = semver[0];

export const runBasedOnNodeCompatibility = (minVer, failureOption) => {
  const defaultOptions = { fail: true };
  const finalOptions = { ...defaultOptions, ...failureOption };

  console.log('Your Node version is: ', currentNodeVersion)
  if (usersVersionOfNode <  minVer) {
    const msg = buildFailureMsg(minVer);
    console.error(msg);
    finalOptions.fail && process.exit(1);
    return msg;
  };
};

export const buildFailureMsg = (minVer) => `
    This program requires a minimum Node.js version of ${minVer}.
    Please update your version of Node.js to run this program.
    https://nodejs.org/en/download
`;
