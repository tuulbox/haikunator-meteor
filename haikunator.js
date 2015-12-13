let adjs = [
  "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
  "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
  "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
  "billowing", "broken", "cold", "damp", "falling", "frosty", "green",
  "long", "late", "lingering", "bold", "little", "morning", "muddy", "old",
  "red", "rough", "still", "small", "sparkling", "shy",
  "wandering", "withered", "wild", "black", "young", "holy", "solitary",
  "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine",
  "polished", "ancient", "purple", "lively", "nameless", "lucky", "odd", "tiny",
  "free", "dry", "yellow", "orange", "gentle", "tight", "super", "royal", "broad",
  "steep", "flat", "square", "round", "mute", "noisy", "raspy", "soft",
  "shrill", "rapid", "sweet", "curly", "calm", "jolly", "fancy", "plain", "shinny",
  "elegant", "radiant", "classy", "superb", "splendid", "great",
];
let nouns = [
  "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
  "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
  "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
  "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
  "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
  "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
  "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
  "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper",
  "frog", "smoke", "star", "atom", "band", "bar", "base", "block", "boat",
  "term", "credit", "art", "fashion", "truth", "disk", "math", "unit", "cell",
  "scene", "heart", "recipe", "union", "limit", "bread", "toast", "bonus",
  "lab", "mud", "mode", "poetry", "tooth", "hall", "king", "queen", "lion", "tiger",
  "penguin", "kiwi", "cake", "mouse", "rice", "salad", "hat", "earth",
  "mercury", "venus", "mars", "jupiter", "neptune", "saturn", "pluto",
  "asteroid", "comet", "gravity", "nebula", "tachyon", "crater", "universe",
  "eclipse", "galaxy", "matter", "mass", "nova", "orbit", "planet", "quasar",
  "cog", "spark", "rotor", "motor", "cylinder", "gyroscope", "capacitor", "servo", "bearing",
  "bracket", "chain", "sprocket", "chassis", "gear", "tread", "track", "wheel", "sensor", "actuator",
  "beach", "sunrise", "avalanche", "hail", "panda", "sushi", "quark", "meson", "boson", "quanta", "quantum",
  "planck", "proton", "electron", "electron",
];

haikunate = function ({delimiter='-', tokenLength=4, tokenHex=false, tokenChars="0123456789"} = {}) {
  let adj, noun, i, sections, token = "";

  if (tokenHex === true) tokenChars = "0123456789abcdef";

  adj = adjs[Math.floor(Math.random() * adjs.length)];
  noun = nouns[Math.floor(Math.random() * nouns.length)];

  for (i = 0; i < tokenLength; i++) {
    token += tokenChars.charAt(Math.floor(Math.random() * tokenChars.length));
  }

  sections = [adj, noun, token];
  return sections.filter(function (e) {
    return e === 0 || e;
  }).join(delimiter);
};
