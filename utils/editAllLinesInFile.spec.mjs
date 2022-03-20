import { editAllLinesInFile } from './editAllLinesInFile.mjs';

describe('editAllLinesInFile()', ()=>{
  describe('WHEN: Invoked on a specific file,', ()=>{
    it('THEN: It runs a function on each line of that file.', ()=>{
      const someEditFn = (lineOfCode) => lineOfCode + ' - EDITED.';


    });
  });
});