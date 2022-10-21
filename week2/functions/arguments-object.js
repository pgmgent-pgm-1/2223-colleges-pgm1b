function concat(separator) {
  let str = "";
  console.log(arguments);
  for (let i = 1; i < arguments.length; i++) {
    console.log(str);
    str += arguments[i] + (i < arguments.length - 1 ? separator : "");
  }
  return str;
}

let result;
result = concat(" | ", "Computer Systems", "Programming 1", "Web Design");
console.log(result);
result = concat(", ", "@Work 1", "Programming 2", "UI Design");
console.log(result);
