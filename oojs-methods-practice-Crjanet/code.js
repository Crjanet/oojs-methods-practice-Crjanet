const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
    this.state = 0
    let headOrTails = Math.floor(Math.random() * 2)
    this.state = headOrTails
    // if(this.state === 1){
    //   return "Heads"
    // }else{
    //   return "Tails"
    // }
  },

  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
    if (this.state === 0) {
      console.log("Heads")
      return "Heads"
    } else {
      console.log("Tails")
      return "Tails"
    }
},
  
  toHTML: function () {
    const image = document.createElement("img");
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    if (this.state === 0) {
      image.src = "images/heads.png"
    } else {
      image.src = "images/tails.png"
    }
    return image
     },
    };
    
    function display20Flips() {
      const results = [];
      // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
      for(let index = 1; index <= 20; index++) {
        coin.state = coin.flip()
        let headTail = coin.toString()
        document.body.appendChild(headTail)
        results.push(headTail)
  }
  return results
}

function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
  for(let index = 1; index <= 20; index ++) {
    coin.state = coin.flip()
    let currentFlip = coin.toHTML()
    document.body.append(currentFlip)
    results.push(currentFlip)
  }
  return results
}
display20Images()