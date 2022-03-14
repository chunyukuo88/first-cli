import { getNodeCompatibilityErrorMsg, buildFailureMsg } from './nodeVersionCheck';

describe('runBasedOnNodeCompatibility()', ()=>{
  describe('GIVEN: The minimum Node version', ()=>{
    describe('WHEN: The user\'s version is below the minimum and failureOption is set to "false"', ()=>{
      const minimumNodeVersion = 1_400;
      const failureOption = {
        fail: false,
      };
      it('THEN: It returns undefined;', ()=>{
        const result = getNodeCompatibilityErrorMsg(minimumNodeVersion, failureOption);

        expect(result).toBeFalsy();
      });
      it('AND: that error message is printed to the console.', ()=>{
        const spy = jest.spyOn(console, 'error');
        const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);

        getNodeCompatibilityErrorMsg(minimumNodeVersion, failureOption);

        expect(spy).toHaveBeenCalledWith(expectedFailureMsg);
      });
    });
    describe('WHEN: The user\'s version is below the minimum and failureOption is set to "true" (or none is given)', ()=>{
      it('THEN: The program returns a failure message.', ()=>{
        const minimumNodeVersion = 1_400;
        const failureOption = {
          fail: true,
        };
        const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);

        const result = getNodeCompatibilityErrorMsg(minimumNodeVersion, failureOption);

        expect(result).toEqual(expectedFailureMsg);
      });
    });
    describe('WHEN: The user\'s version is NOT below the minimum', ()=>{
      it('THEN: It returns an undefined.', ()=>{
        const minimumNodeVersion = 1;

        const result = getNodeCompatibilityErrorMsg(minimumNodeVersion);

        expect(result).toBeUndefined();
      });
    });
  });
});

