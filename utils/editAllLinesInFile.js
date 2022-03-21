import readline from "readline";
import events from "events";
import fs from "fs";
import { addDebugFnToRender } from './testingSuite/addDebug.mjs';
import { removeAllDebug } from './testingSuite/removeDebug.mjs';

async function processLineByLine() {
  try {
    const filePath = './__test__.txt';

    let fileData = fs.readFileSync(filePath, "utf8").split('\n');
    const updatedArrayOfLines = [];
    fileData.forEach(lineOfCode => {

      const updatedLine = removeAllDebug(lineOfCode);
      updatedArrayOfLines.push(updatedLine);
    });
    fs.writeFileSync(filePath, updatedArrayOfLines.join('\n'));


    displayMemoryUsed();
  } catch (err) {
    console.error(err);
  }
}

const displayMemoryUsed = () => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
};

processLineByLine();