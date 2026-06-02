const { test } = require('node:test');
const assert = require('node:assert');
const countVowels = require('../src/countVowels');

test('countVowels("hello") === 2', () => {
  assert.strictEqual(countVowels('hello'), 2);
});

test('countVowels("") === 0', () => {
  assert.strictEqual(countVowels(''), 0);
});

test('countVowels("aeiou") === 5', () => {
  assert.strictEqual(countVowels('aeiou'), 5);
});

test('countVowels("AEIOU") === 5', () => {
  assert.strictEqual(countVowels('AEIOU'), 5);
});

test('countVowels("xyz") === 0', () => {
  assert.strictEqual(countVowels('xyz'), 0);
});
