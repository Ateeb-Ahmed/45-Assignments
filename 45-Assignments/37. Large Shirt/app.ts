function make_a_shirt(size: string = "Large", message: string = "I Love Typescripts") {
    console.log(
      `The Shirt size is ${size} and the message printed on it is "${message}"`
    );
  }
  
  make_a_shirt();
  make_a_shirt("medium");
  make_a_shirt("Small", "I Love Pakistan");
  