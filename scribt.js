const display = document.getElementById("display");

//This function used to append to valves together in the input 
function appendToDisplay(input){
    display.value += input;
}

//this function for C button to clear data
function clearDisplay(){
    display.value = "";
}

//this function is used to calculate data
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}