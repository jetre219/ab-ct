import { resolveObjects, resolveFlattenedObject, mergeObjects } from './resolveObject';

it('works', () => {
  const tests = [
    {
      input: {
        a: {
          b: {
            c: 'z',
          },
        },
        'a.b.d': 'y',
      },
      output: {
        a: {
          b: {
            c: 'z',
            d: 'y',
          },
        },
      },
    }];

  tests.forEach((test) => {
    expect(resolveObjects(test.input)).toEqual(test.output);
  });
});

describe('resolveFlattenedObject', () => {
  test('given only flattened object, it should return the object resolved correctly', () => {
    expect(resolveFlattenedObject('a.b.d', 'y')).toEqual({ a: { b: { d: 'y' } } });
  });
});

describe('mergeObjects', () => {
  test('given objects, it should return merged objects', () => {
    expect(mergeObjects({ a: 'b' }, { c: 'd' })).toEqual({ a: 'b', c: 'd' });
  });

  test('given objects deep, it should return merged objects', () => {
    expect(mergeObjects({ a: { b: { c: 'd' } } }, { e: { f: { g: 'h' } } })).toEqual({ a: { b: { c: 'd' } }, e: { f: { g: 'h' } } });
  });

  test('given objects that overlaps, it should return merged objects', () => {
    expect(mergeObjects({ a: { b: { c: 'y' } } }, { a: { b: { d: 'z' } } })).toEqual({ a: { b: { c: 'y', d: 'z' } } });
  });

  test('given objects that overlaps at different levels, it should return merged objects', () => {
    expect(mergeObjects({ a: { b: { c: { e: 'y' } } } }, { a: { b: { d: 'z' } } })).toEqual({ a: { b: { c: { e: 'y' }, d: 'z' } } });
  });
});

describe('resolveObjects', () => {
  test('given empty object, it should return empty object', () => {
    expect(resolveObjects({})).toEqual({});
  });

  test('given object with only flattened, it should return object resolved', () => {
    expect(resolveObjects({ 'a.b.c': 'd' })).toEqual({ a: { b: { c: 'd' } } });
  });
});
