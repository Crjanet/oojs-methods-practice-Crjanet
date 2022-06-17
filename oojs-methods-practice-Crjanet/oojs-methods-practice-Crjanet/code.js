const coin = {
  state: 0,
  flip: function () {
    // 1. Randomly set your coin object's "state" property to be either
    //    0 or 1: use "this.state" to access the "state" property on this object.
<<<<<<< HEAD
=======
    this.state = 0
>>>>>>> abdc10682c903913a869b88b1e0ed8a6a7c1c83d
    this.flip = function() {
      let headsOrTails = Math.floor(Math.random() *  2)
      this.state = headsOrTails
    }
  },
  toString: function () {
    // 2. Return the string "Heads" or "Tails", depending on whether
    //    "this.state" is 0 or 1.
<<<<<<< HEAD
    if (this.state === 0.5) {
      console.log("Heads")
      return "Heads"
    } else {
      console.log("Tails")
=======
    if (this.state === 1) {
      return "Heads"
    } else {
>>>>>>> abdc10682c903913a869b88b1e0ed8a6a7c1c83d
      return "Tails"
    }
  },
  
  toHTML: function () {
    const image = document.createElement("img");
<<<<<<< HEAD
    if (this.state === 0.5) {
      let image1 = heads.png
      return image1; 
    } else {
      let image2 = tails.png
      return image2; 
    }
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    return image
=======
    // const image2 = document.querySelector("img")
    image[0] = "heads.png"
    image[1] = "tails.png"
    // if (this.state === 1) {
    //   let headImage = heads.png
    //   return headImage
    // } else {
    //   let tailImage = tails.png
    //   return tailImage
    // }
    // 3. Set the properties of this image element to show either face-up
    //    or face-down, depending on whether this.state is 0 or 1.
    //    You can use the heads and tails images inside of the "images" folder
    document.body.appendChild(image)
    return image;
>>>>>>> abdc10682c903913a869b88b1e0ed8a6a7c1c83d
  },
};

    // document.body.appendChild(image)
    
    // let flipButton = document.createElement("button")
    // flipButton.onclick = coin.flip()
    // flipButton.innerHTML = "Flip The Coin"
    // document.body.appendChild(flipButton)
    
    // flipButton.addEventListener("click", function() {
    //   coin.flip.bind(coin)
    // })


function display20Flips() {
  const results = [];
  // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
  for(let index = 1; index <= 20; index++) {
    // let 20Flips = coin.flip()
    // results = 20Flips
  }
}

function display20Images() {
  const results = [];
  // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}
