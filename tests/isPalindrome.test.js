const { test } = require('node:test');
const assert = require('node:assert');
const isPalindrome = require('../src/isPalindrome');

test('isPalindrome("racecar") === true', () => {
  assert.strictEqual(isPalindrome('racecar'), true);
});

test('isPalindrome("hello") === false', () => {
  assert.strictEqual(isPalindrome('hello'), false);
});

test('isPalindrome("A man, a plan, a canal: Panama") === true', () => {
  assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
});

test('isPalindrome("") === true', () => {
  assert.strictEqual(isPalindrome(''), true);
});

test('isPalindrome("a") === true', () => {
  assert.strictEqual(isPalindrome('a'), true);
});

test('isPalindrome("12321") === true', () => {
  assert.strictEqual(isPalindrome('12321'), true);
});

test('isPalindrome("12345") === false', () => {
  assert.strictEqual(isPalindrome('12345'), false);
});
