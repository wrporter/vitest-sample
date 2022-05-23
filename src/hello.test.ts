import hello from './hello';

describe('hello', () => {
    it('greets the provided entity', () => {
        expect(hello('Vitest')).toEqual('Hello, Vitest!');
    });

    it('provides a default greeting when no entity is provided', () => {
        expect(hello()).toEqual('Hello, World!');
    });
});
