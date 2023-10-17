document.querySelector(".control-buttons span").onclick = function () {
  let theName = prompt("What is Your Name");
  if (theName == null || theName === "") {
    console.log(`Unkown`);
    document.querySelector(".info-container .name span").innerHTML = "Unkown";
  } else {
    console.log(theName);
    document.querySelector(".info-container .name span").innerHTML = theName;
  };
  this.parentElement.remove()
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children)


let orderRange = [...Array(blocks.length).keys()]

shuffle(orderRange)
blocks.forEach((block,index) => {

    block.style.order = orderRange[index];

    // add click Event
    block.addEventListener("click", function() {

      flipblock(block)

    })
});

//  Flip Block Function
function flipblock(selectedBlock) {
  selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlocks => flippedBlocks.classList.contains('is-flipped'))
    if (allFlippedBlocks.length === 2) {
      console.log(`Two flipped Blocks has been Selected`)

          stopClicking()
          checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
    };
    function stopClicking() {
        blocksContainer.classList.add('stop-clicking')

        setTimeout(() => {
          blocksContainer.classList.remove(`stop-clicking`)
        },duration)
    }

}
function checkMatchedBlocks(first, second) {
  let worngCounter = document.querySelector(".tries span")
  if (first.dataset.coins === second.dataset.coins) {
    first.classList.remove(`is-flipped`)
    second.classList.remove(`is-flipped`)

    document.getElementById("myDGOAT").play()
    first.classList.add(`matched`)
    second.classList.add(`matched`)
  } else {
      setTimeout(() => {
        first.classList.remove(`is-flipped`)
        second.classList.remove(`is-flipped`)
      },duration)
    worngCounter.innerHTML = parseInt(worngCounter.innerHTML) + 1;
    document.getElementById("myHAA").play()

  }
}


// Shuffle Function
function shuffle(array) {
    let current = array.length,
        temp,
        random;

        while(current > 0) {
            random = Math.floor(Math.random() * current)
            current--;
            

            temp = array[current];

            array[current] = array[random]
            array[random] = temp
            
        }
        return array
}
