const characters = ["/","8","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const regexSymbolsToggle = /([A-Z0-9])/ig;
const regexNumsToggle = /[^0-9]/g;
let copyOneClicked = false;
let copyTwoClicked = false;
const pwBtn = document.querySelector(".btn");
const copyElOne = document.querySelector("#copybtn1");
const copyElTwo = document.querySelector("#copybtn2");
const copyIconOne = document.querySelector("#copy-icon-1");
const copyIconTwo = document.querySelector("#copy-icon-2");
const symbolsEl = document.querySelector("#symbols-chk");
const numsEl = document.querySelector("#nums-chk");

// Ability to set pw length
const pwLenPicker = document.querySelector("#pw-len");


// Generate two random passwords when the button is clicked
pwBtn.addEventListener("click", function () {
    let pw1 = generate();
    let pw2 = generate();
    // console.log(x);
    copyElOne.textContent = pw1;
    copyElTwo.textContent = pw2;
});

// symbolsEl.addEventListener("click", function () {
//     if (symbolsEl.checked) {
//         console.log(symbolsEl.checked)
//     } else {
//         console.log(symbolsEl.checked)
//     };
// });

// numsEl.addEventListener("click", function () {
//     if (numsEl.checked) {
//         console.log(numsEl.checked)
//     } else {
//         console.log(numsEl.checked)
//     };
// });

const noSymbolsArray = characters.filter((char) => char.match(regexSymbolsToggle));
const noNumsArray = characters.filter((char) => char.match(regexNumsToggle));
const noSymNoNumsArray = noNumsArray.filter((char) => char.match(regexSymbolsToggle));
// console.log(noSymNoNumsArray)
// for (let v of noNumsArray) {
//     console.log(v);
// };

// Funciton to generate a random pw with num, letters and symbols
// also allow user to toggle symbols or numbers
function generate() {
    let [i, j, k, l] = [0, 0, 0, 0];
    let fullpw = [];
    let noSymWithNumspw = [];
    let noSymNoNumspw = [];
    let withSymNoNumspw = [];
    
    // if both are checked, return all array characters 
    if (symbolsEl.checked && numsEl.checked) {
        while (i < pwLenPicker.value) {
            let randIndex = Math.floor(Math.random() * characters.length);
            let char = characters[randIndex];
            i++;
            fullpw += char;
        };
        return fullpw
    
    // if nums are checked and symbols not checked
    } else if (!symbolsEl.checked && numsEl.checked) {
        while (j < pwLenPicker.value) {
            let randIndex = Math.floor(Math.random() * noSymbolsArray.length);
            let char = noSymbolsArray[randIndex];
            j++;
            noSymWithNumspw += char;
        };
        return noSymWithNumspw
        
    // if nums not checked and symbols checked
    } else if (!numsEl.checked && symbolsEl.checked) {
        while (k < pwLenPicker.value) {
            let randIndex = Math.floor(Math.random() * noNumsArray.length);
            let char = noNumsArray[randIndex];
            k++;
            withSymNoNumspw += char;
        };
        return withSymNoNumspw
        
    // if neither numbers or symbols checked
    } else if (!numsEl.checked && !symbolsEl.checked) {
        while (l < pwLenPicker.value) {
            let randIndex = Math.floor(Math.random() * noSymNoNumsArray.length);
            let char = noSymNoNumsArray[randIndex];
            l++;
            noSymNoNumspw += char;
        };
        // console.log(noSymNoNumsArray)
        return noSymNoNumspw
    };
};

// // Copy on click
    // if icon is clicked
copyIconOne.addEventListener("click", function() {
    navigator.clipboard.writeText( copyElOne.textContent );
});

copyIconTwo.addEventListener("click", function() {
    navigator.clipboard.writeText( copyElTwo.textContent );});
    
    // if text area is clicked
copyElOne.addEventListener("click", function() {
    navigator.clipboard.writeText( copyElOne.textContent );
});

copyElTwo.addEventListener("click", function() {
    navigator.clipboard.writeText( copyElTwo.textContent );});