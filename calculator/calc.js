const display = document.getElementById('display')

// add function

function appendvalue(value){
    display.value += value
}

function cleardisplay(){
    display.value = ''
}

//try and catch property

function calculateresult(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        alert("Invalid Expression")
        cleardisplay()
    }
}