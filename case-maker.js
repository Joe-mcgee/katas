function helper(string, regex) {
  string = string.replace(regex, function(match) {
    return match.toUpperCase();
  });
  string = string.replace(/\s/g, '')
  return string
}

var camelCase = function(string) {
  var output = helper(string, /\s[a-z]/g)
  return output
}

var pascalCase = function(string) {
  var output = helper(string, /^.|\s[a-z]/g)
  return output
}

var snakeCase = function(string) {
  string = string.replace(/\s/g, '_');
  return string
}

var kebabCase = function(string) {
  string = string.replace(/\s/g, '-')
  return string
}

var titleCase = function(string) {
  var splits = string.split(' ');
  splits[0] = splits[0].replace(/^./g, function(match) {
    return match.toUpperCase()
  })
  splits[splits.length - 1] = splits[splits.length-1].replace(/^./g, function(match) {
    return match.toUpperCase()
  })
  string = splits.join(' ')
  return string
}

var vowelCase = function(string) {
  string = string.replace(/a|e|i|o|u/g, function(match) {
    return match.toUpperCase();
  });
  return string;
}

var consonantCase = function(string) {
  string = string.replace(/[^a|e|i|o|u]/g, function(match) {
    return match.toUpperCase();
  })
  return string
}

var upperCase = function(string) {
  string = string.replace(/[a-z]/g, function(match) {
    return match.toUpperCase();
  })
  return string;
}

var lowerCase = function(string) {
  string = string.replace(/[a-z]/g, function(match) {
    return match.toLowerCase();
  })
  return string;
}

var cases = {'camel': camelCase, 'pascal': pascalCase, 'snake': snakeCase,
 'kebab': kebabCase, 'title': titleCase, 'vowel': vowelCase, 'consonant': consonantCase,
  'upper': upperCase, 'lower': lowerCase}

var makeCase = function(string, target) {
  for (var currentCase in cases) {
    if (target.includes(currentCase)) {
      string = cases[currentCase](string)

    }
  }
  return console.log(string);
}
/*makeCase('this is a string', 'camel') === 'thisIsAString';
makeCase('this is a string', 'pascal') === 'ThisIsAString';
makeCase('this is a string', 'snake') === 'this_is_a_string';
makeCase('this is a string', 'kebab') === 'this-is-a-string';
makeCase('this is a string', 'title') === 'This is a String';
makeCase('this is a string', 'vowel') === 'thIs Is A strIng';
makeCase('this is a string', 'consonant') === 'THiS iS a STRiNG';
makeCase('this is a string', ['upper', 'snake']) === 'THIS_IS_A_STRING';*/

makeCase('this is a string', 'pascal')