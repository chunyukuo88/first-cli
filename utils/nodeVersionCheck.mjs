const currentNodeVersion = process.versions.node;
const semanticVersionAsArray = currentNodeVersion.split('.');
const usersVersionOfNode = semanticVersionAsArray[0];

export const getNodeCompatibility = () => {
  const minimumNodeVersion = 16;
  const isCompatible = true;
  if (usersVersionOfNode <  Math.abs(minimumNodeVersion)) {
    const msg = buildFailureMsg(minimumNodeVersion);
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