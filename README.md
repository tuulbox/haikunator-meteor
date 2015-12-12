# haikunator-meteor

[![Build Status](https://travis-ci.org/tuulbox/haikunator-meteor.svg)](https://travis-ci.org/tuulbox/haikunator-meteor)

Heavily forked from https://github.com/Atrox/haikunatorjs

Generate Heroku-like random names to use in your node applications.

Additions:

1. More names
1. Meteor package

## Installation

```
meteor add tuul:haikunator
```

## Usage

Haikunator is pretty simple.

```javascript

// default usage
haikunate() // => "wispy-dust-1337"

// custom length (default=4)
haikunate({tokenLength: 6}) // => "patient-king-887265"

// use hex instead of numbers
haikunate({tokenHex: true}) // => "purple-breeze-98e1"

// use custom chars instead of numbers/hex
haikunate({tokenChars: "HAIKUNATE"}) // => "summer-atom-IHEA"

// don't include a token
haikunate({tokenLength: 0}) // => "cold-wildflower"

// use a different delimiter
haikunate({delimiter: "."}) // => "restless.sea.7976"

// no token, space delimiter
haikunate({tokenLength: 0, delimiter: " "}) // => "delicate haze"

// no token, empty delimiter
haikunate({tokenLength: 0, delimiter: ""}) // => "billowingleaf"
```

## Options

The following options are available:

```javascript
haikunate({
  delimiter: "-",
  tokenLength: 4,
  tokenHex: false,
  tokenChars: "0123456789"
});
```
*If ```tokenHex``` is true, it overrides any tokens specified in ```tokenChars```*

## Other Languages

Haikunator is also available in other languages. Check them out:

- .NET: https://github.com/Atrox/haikunator.net
- Python: https://github.com/Atrox/haikunatorpy
- PHP: https://github.com/Atrox/haikunatorphp
- Java: https://github.com/Atrox/haikunatorjava
- Dart: https://github.com/Atrox/haikunatordart
- Ruby: https://github.com/usmanbashir/haikunator
- Go: https://github.com/yelinaung/go-haikunator