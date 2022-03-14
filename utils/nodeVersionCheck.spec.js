import { runBasedOnNodeCompatibility, buildFailureMsg } from './nodeVersionCheck';

describe('runBasedOnNodeCompatibility()', ()=>{
  describe('GIVEN: The minimum Node version', ()=>{
    describe('WHEN: The user\'s version is found to be below the minimum', ()=>{
      it('THEN: It returns an error message;', ()=>{
        const minimumNodeVersion = 1_400;
        const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);

        const result = runBasedOnNodeCompatibility(minimumNodeVersion);

        expect(result).toEqual(expectedFailureMsg);
      });
    });
    describe('WHEN: The user\'s version is NOT below the minimum', ()=>{
      it('THEN: It returns an undefined.', ()=>{
        const minimumNodeVersion = 1;

        const result = runBasedOnNodeCompatibility(minimumNodeVersion);

        expect(result).toBeUndefined();
      });
    });
  });
});

