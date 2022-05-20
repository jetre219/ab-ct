export const resolveFlattenedObject = (key, value) => {
  const keyChain = key.split('.');
  const lastKey = keyChain.pop();

  return keyChain.reduceRight((current, newKey) => ({ [newKey]: current }), { [lastKey]: value });
};

export const mergeObjects = (firstObject, secondObject) => {
  const firstObjectKeys = Object.keys(firstObject);
  const secondObjectKeys = Object.keys(secondObject);

  const allKeys = [...(new Set([...firstObjectKeys, secondObjectKeys]))];

  const keysInCommon = allKeys.filter(
    (key) => Boolean(firstObject[key]) && Boolean(secondObject[key]),
  );

  const firstObjectSolelyKeys = firstObjectKeys.filter((key) => !secondObjectKeys.includes(key));
  const secondObjectSolelyKeys = secondObjectKeys.filter((key) => !firstObjectKeys.includes(key));

  const newObject = {};

  firstObjectSolelyKeys.forEach((key) => { newObject[key] = firstObject[key]; });
  secondObjectSolelyKeys.forEach((key) => { newObject[key] = secondObject[key]; });

  keysInCommon.forEach((key) => {
    newObject[key] = mergeObjects(firstObject[key], secondObject[key]);
  });

  return newObject;
};

export const resolveObjects = (input) => {
  const keys = Object.keys(input);

  const newObjects = keys.map((key) => {
    const value = input[key];

    if (key.includes('.')) {
      return resolveFlattenedObject(key, value);
    } if (typeof value === 'string') {
      return { [key]: value };
    }
    return { [key]: resolveObjects(value) };
  });

  return newObjects.reduce((previous, current) => mergeObjects(previous, current), {});
};
