let functionOne = (name = "World", ...rest) => {
    console.log(`Hello ${name} `);
    // for (let index = 0; index < arguments.length; index++) {
    //     const element = arguments[index];
    //     console.log(element);
    // }
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        console.log(element);
    }
}

// functionOne();
functionOne("Jannes", "sfsdfds", 4545, 34343);