const container = document.querySelector("#container");
const header = document.querySelector("#header");
const reset = document.querySelector("#reset")
const resetButton = document.createElement("button");
resetButton.textContent = "RESET GRID";
reset.appendChild(resetButton);
resetButton.addEventListener("click", drawGrid);

function drawGrid() {
    container.textContent = "";
    let number = prompt(`Insert a number \nmax is 100 \n( example : 100 = 100 rows and columns )`)
    if ((number > 0) && (number <=100)) {
        for ( j = 1; j <= number; j++ ) {
            const j = document.createElement("div");
            j.setAttribute ("class", "gridItemColumn");
            container.appendChild(j)
            for ( i = 1; i <= number; i++ ) {
                const i = document.createElement("div");
                i.setAttribute ("class", "gridItemHorizontal");
                i.addEventListener("mouseenter", function (e) {
                    e.target.style.backgroundColor = chosenColor;
                });
                j.appendChild(i)
            }
        }

    } else {
        alert(`Invalid number, try writing one between 1 and 64`);
    }   
}

let chosenColor = "white";
const buttonColors = [ "red", "blue", "green", "yellow", "pink", "purple", "turquoise", "white", "black", "lime", "lavender", "DarkSalmon","LightCoral", "PeachPuff", "orange"]

const buttonContainer = document.createElement("div")
buttonContainer.setAttribute("class", "buttonContainer")
header.appendChild(buttonContainer);

let counter = 0;
for ( i = 0; i < buttonColors.length; i++) {
    const i = document.createElement("button")
    i.textContent = buttonColors[counter];
    i.addEventListener("click", function (){
        chosenColor = i.textContent;
    })
    counter += 1;
    buttonContainer.appendChild(i);
}

