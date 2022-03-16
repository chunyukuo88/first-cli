import { getNodeCompatibility, buildFailureMsg } from './nodeVersionCheck';

describe('getNodeCompatibility()', ()=>{
  describe('GIVEN: The minimum Node version', ()=>{
    describe('WHEN: The user\'s version is below the minimum and failureOption is set to "false"', ()=>{
      const minimumNodeVersion = 1_400;
      it('THEN: It returns false;', ()=>{
        const result = getNodeCompatibility(minimumNodeVersion);

        expect(result).toEqual(false);
      });
      it('AND: that error message is printed to the console.', ()=>{
        const spy = jest.spyOn(console, 'error');
        const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);

        getNodeCompatibility(minimumNodeVersion);

        expect(spy).toHaveBeenCalledWith(expectedFailureMsg);
      });
    });
    describe('WHEN: The user\'s version is NOT below the minimum', ()=>{
      it('THEN: It returns an undefined.', ()=>{
        const minimumNodeVersion = 1;

        const result = getNodeCompatibility(minimumNodeVersion);

        expect(result).toEqual(true);
      });
    });
  });
});

