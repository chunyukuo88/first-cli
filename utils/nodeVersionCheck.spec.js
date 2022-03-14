import { runBasedOnNodeCompatibility, buildFailureMsg } from './nodeVersionCheck';

describe('runBasedOnNodeCompatibility()', ()=>{
  describe('GIVEN: The minimum Node version', ()=>{
    describe('WHEN: The user\'s version is below the minimum and failureOption is set to "false"', ()=>{
      const minimumNodeVersion = 1_400;
      const failureOption = {
        fail: false,
      };
      const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);
      it('THEN: It returns an error message;', ()=>{
        const result = runBasedOnNodeCompatibility(minimumNodeVersion, failureOption);

        expect(result).toEqual(expectedFailureMsg);
      });
      it('AND: that error message is printed to the console.', ()=>{
        const spy = jest.spyOn(console, 'error');
        const expectedFailureMsg = buildFailureMsg(minimumNodeVersion);

        runBasedOnNodeCompatibility(minimumNodeVersion, failureOption);

        expect(spy).toHaveBeenCalledWith(expectedFailureMsg);
      });
    });
    describe('WHEN: The user\'s version is below the minimum and failureOption is set to "true" (or none is given)', ()=>{
      it('THEN: The program terminates.', ()=>{
        const minimumNodeVersion = 1_400;
        const failureOption = {
          fail: true,
        };
        const spy = jest
          .spyOn(global.process, 'exit')
          .mockImplementation((number) => {
            throw new Error('process.exit: ' + number);
          });

        expect(()=>{
          runBasedOnNodeCompatibility(minimumNodeVersion, failureOption);
        }).toThrow();
        expect(spy).toHaveBeenCalledWith(1);
        spy.mockRestore();
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

