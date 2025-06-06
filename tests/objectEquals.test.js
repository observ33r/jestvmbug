import { objectEquals } from '@observ33r/object-equals';

describe('objectEquals', () => {

	test('should compare array buffers', () => {

		// Two ArrayBuffer instances that have identical binary content,
		// but originate from different TypedArray constructors.

  		const buffer1 = new Int8Array([-1]).buffer;
  		const buffer2 = new Uint8Array([255]).buffer;

		// The following test fails in Jest,
		// but passes when executed directly via node manual.mjs

  		expect(objectEquals(buffer1, buffer2)).toBe(true);

		// Passed test with crossrealm option enabled,
		// but this should not be a case!

		expect(objectEquals(buffer1, buffer2, { crossrealm: true })).toBe(true);

	});

});