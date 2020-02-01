// numbers that return false: NaN, Infinity, -Infinity

const { isNaN, isFinite } = Number;

const isNumber = num => typeof num === 'number' && !isNaN(parseFloat(num)) && isFinite(num);

export default isNumber;
