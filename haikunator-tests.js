// Write your tests here!
// Here is an example.
Tinytest.add('example', (test) => {
  test.equal(true, true);
});

Tinytest.add('should return 4 digits', (test) => {
  test.matches(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})$/i);
});

Tinytest.add('should return 4 digits as hex', (test) => {
  test.matches(haikunate({tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})$/i);
});

Tinytest.add('should return 9 digits', (test) => {
  test.matches(haikunate({tokenLength: 9}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})$/i);
});

Tinytest.add('should return 9 digits as hex', (test) => {
  test.matches(haikunate({tokenLength: 9, tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})$/i);
});

Tinytest.add('wont return the same name for subsequent calls', (test) => {
  test.notEqual(haikunate(), haikunate());
});

Tinytest.add('drops the token if token range is 0', (test) => {
  test.matches(haikunate({tokenLength: 0}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))$/i);
});

Tinytest.add('permits optional configuration of the delimiter', (test) => {
  test.matches(haikunate({delimiter: "."}), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)$/i);
});

Tinytest.add('drops the token if token range is 0 and delimiter is an empty space', (test) => {
  test.matches(haikunate({tokenLength: 0, delimiter: " "}), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))$/i);
});

Tinytest.add('returns one single word if token and delimiter are dropped', (test) => {
  test.matches(haikunate({tokenLength: 0, delimiter: ""}), /((?:[a-z][a-z]+))$/i);
});

Tinytest.add('permits custom token chars', (test) => {
  test.matches(haikunate({tokenChars: "A"}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(AAAA)$/i);
});

