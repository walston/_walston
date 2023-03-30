/**
 * @param {any[]} arr
 * @param {number} [size=1]
 * @returns {any[][]}
 */
export default function chunk(arr, size) {
  if (size === undefined) size = 1;
  else if (typeof size !== 'number' || size < 1) throw Error('size must be a number greater than zero');
  
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
		let j = i % size;
		let n = Math.floor(i / size);
		if (j === 0) ret.push([]);
		ret[n][j] = arr[i]
	}
	
	return ret;
}
