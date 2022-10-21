function multiply(factor, ...args) {
    let result = 0;
    console.log(args);
    for (let i = 0; i < args.length; i++) {
      result += args[i] * factor;
    }
    return result;
  }
  
  console.log("multiply(2, 1, 2, 3):", multiply(2, 1, 2, 3));

  function showName(name = "Jannes"){
    console.log(name);
  }
  
  showName("Solomon");
  showName();

  function concat(separator) {
    let str = "";
    for (let i = 1; i < arguments.length; i++) {
      str += arguments[i] + (i < arguments.length - 1 ? separator : "");
    }
    return str;
  }
  
  let result;
  result = concat(" | ", "Computer Systems", "Programming 1", "Web Design");
  console.log(result);
  result = concat(", ", "@Work 1", "Programming 2", "UI Design");
  console.log(result);
  