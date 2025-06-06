import { objectEquals } from '@observ33r/object-equals';

const buffer1 = new Int8Array([-1]).buffer;
const buffer2 = new Uint8Array([255]).buffer;

console.log(objectEquals(buffer1, buffer2)); //true