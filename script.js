
const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");

const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

const items = document.querySelectorAll(".grid-item");

// Change color button
changeButton.addEventListener("click", function() {

    let blockId = blockInput.value;
    let color = colorInput.value;

    // First reset all grid elements
    items.forEach(function(item) {
        item.style.backgroundColor = "transparent";
    });

    // Select the particular grid
    let selectedBlock = document.getElementById(blockId);

    // Change its background color
    if (selectedBlock && blockId >= 1 && blockId <= 9 && color) {
        selectedBlock.style.backgroundColor = color;
    }

});

// Reset button
resetButton.addEventListener("click", function() {

    items.forEach(function(item) {
        item.style.backgroundColor = "transparent";
    });

});
