import fs from "fs";
import { removeAllDebug } from './testingSuite/removeDebug.mjs';

export async function removeDebugFromGivenFile(givenFile = './__test__.txt') {
  try {
    removeDebugsAndUpdateFile(givenFile);
    displayMemoryUsed();
  } catch (err) {
    console.error(err);
  }
}

const removeDebugsAndUpdateFile = (givenFile) => {
  let fileDataArray = fs.readFileSync(givenFile, 'utf8').split('\n');
  const updatedArrayOfLines = buildUpdatedArrayOfLines(fileDataArray);
  fs.writeFileSync(givenFile, updatedArrayOfLines.join('\n'));
};

const buildUpdatedArrayOfLines = (fileDataArray) => {
  const updatedArrayOfLines = [];
  fileDataArray.forEach(lineOfCode => {
    const updatedLine = removeAllDebug(lineOfCode);
    updatedArrayOfLines.push(updatedLine);
  });
  return updatedArrayOfLines;
};

const displayMemoryUsed = () => {
  const memoryUsed = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(memoryUsed * 100) / 100} MB`);
};

//TODO
removeDebugFromGivenFile();