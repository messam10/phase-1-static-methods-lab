class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(characters) {
    return characters.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    return string.toLowerCase().replace(/\b(?!(?!^)(?:a|an|of|and|for|at|by|but|the|from)\b)([a-z])/g, m => m.toUpperCase());
  }
}

console.log(Formatter.capitalize("a"));
console.log(Formatter.capitalize("alligator"));
console.log(Formatter.capitalize("BURSTING BALLOON"));
console.log(Formatter.sanitize("c"));
console.log(Formatter.sanitize("!"));
console.log(Formatter.sanitize("ca$@#tching cold"));
console.log(Formatter.sanitize("Doin' Dishes"));
console.log(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts"));
console.log(Formatter.titleize("getting giggles"));
console.log(Formatter.titleize("where the wild things are"));
console.log(Formatter.titleize("chicken soup with rice and a few other songs"));
console.log(Formatter.titleize("Maurice a an but of and for at by from end"));
console.log(Formatter.titleize("a tale of two cities"));
console.log(Formatter.titleize("in the night kitchen"));