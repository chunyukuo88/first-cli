import { runBasedOnNodeCompatibility } from './nodeVersionCheck';

describe('runBasedOnNodeCompatibility()', ()=>{
  describe('GIVEN: The minimum Node version', ()=>{
    describe('WHEN: The user\'s version is found to be below the minimum', ()=>{
      it('THEN: ', ()=>{
        const originalProcess = process;
        global.process = {
          versions: {
            node: 1,
          },
        };
        const minimumNodeVersion = 14;
        const expectedFailureMessage = '';

        const result = runBasedOnNodeCompatibility(minimumNodeVersion);

        expect(result).toEqual(expectedFailureMessage);
        global.process = originalProcess;
      });
    });
  });
});

