import { addDebugFnToRender } from './addDebug.mjs';

describe(`GIVEN: addDebugFnToRender is invoked with a lineOfCode string`, ()=>{
  describe('WHEN: That lineOfCode does not contain a `render` invocation', ()=>{
    it('THEN: It returns the string, unchanged.', ()=>{
      const lineOfCode = 'const foo = "bar";';

      const result = addDebugFnToRender(lineOfCode);

      expect(result).toEqual(lineOfCode);
    });
  });
  describe('WHEN: That lineOfCode contains a `render` invocation', ()=>{
    describe('AND: That invocation already contains one of the valid `debug` patterns', ()=>{
      it.each`
        lineOfCode
        ${'const { debug } = render(Something);'}
        ${'const { component, debug } = render(Something);'}
        ${'const { debug, component } = render(Something);'}
        ${'const { getByRole, debug, component } = render(Something);'}
      `('THEN: It returns the string, unchanged.', ({ lineOfCode })=>{
        const result = addDebugFnToRender(lineOfCode);

        expect(result).toEqual(lineOfCode);
      });
    });
    describe('AND: That invocation does not contain `debug`.', ()=>{
      it.each`
        lineOfCode                                    | modifiedLineOfCode
        ${'render(Something);'}                       | ${'const { debug } = render(Something);\ndebug();\n'}                      
        ${'render(Something, props);'}                | ${'const { debug } = render(Something, props);\ndebug();\n'}               
        ${'const { component } = render(Something);'} | ${'const { debug, component } = render(Something);\ndebug();\n'}
      `('THEN: It adds a debug to that line and invokes it on a new line', ({ lineOfCode, modifiedLineOfCode })=>{
        const result = addDebugFnToRender(lineOfCode);

        expect(result).toEqual(modifiedLineOfCode);
      });
    });
  });
});
