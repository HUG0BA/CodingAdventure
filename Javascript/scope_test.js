//Learning from: JavaScript Guide.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
//Grammar and types



//----------------------------Testing  javascript handling of variable scope------------------------------

/*
function test_a(value){

    console.log(value);
}

test_a(1) //Prints 1

function test_b(){
    console.log(value)
}

test_b() //Reference Error
*/

//---------------------------------------------------------------------------

/*
function test_c(value){
    console.log(value) //Prints 5
    var value = 0 //Can´t use declaration by "let" or "const"
    console.log(value) //Prints 0
}

test_c(5) //Prints 0, overwritten variable 
 
function test_d(){
    console.log(value)
}

//test_d() //Reference error, var value belongs to function (test_1) scope
*/

//Summary: AVOID the use variables with the same name as those assigned to the parameters

//-------------------------------------------------------------------------------------------------------

/*
var value = 0
function test_e(){
    console.log(value)
}

//test_e()

function test_f(){
    let value = 5 //Declacres local variable named "value" to the function
    console.log(value)
}

//test_f()

function test_g(){
    console.log(value) //Error, tries to print local varible, which is not defined
    let value = 10
    console.log(value) //Prints local value
}

//test_g()

function test_h(value){
    console.log(value)
}

test_h() //Prints undefined because it is printing the value of the parameter, not the global variable
test_h(33) // Prints 33
*/

//------------------------------            End             ----------------------------------------------


//--------------------------Testing declaration and varible names--------------------------

/*
var x = 0
console.log(x)

let x = 1  //Can't do assignment, variable named "x" already declared
console.log(x)

const x = 2 //Same error, variable named "x" already declared
console.log(x)
*/
//---------------------------------------------------------------------------------


/*const x = 0
console.log(x)

let x = 0 //Error, can´t redeclare varible scope
console.log(x)

var x = 0 //Same error from let to var
console.log(x)
*/


//Summary: DO NOT declare variables with the SAME NAME under the SAME SCOPE
//----------------------------------------------------------------------------------------------------------------------
//
/*
var x = 0
console.log(x)
var x = 1
console.log(x)

let y = 0  //ERROR
let y = 0  //ERROR

const z = 0 //ERROR
const z = 0 //ERROR
*/

//-------------------------                            End              -------------------------------------------------

//------------------------------------------- HOISTING --------------------------------------

//console.log(h1) //Prints undefined
var h1 = 0
//console.log(h1) //Prints 0

//console.log(h2) //ERROR
let h2 = 1
//console.log(h2) //Prints 1

//console.log(h3) //ERROR
const h3 = 2
//console.log(h3) //Prints 2


/*
function test_hoisting(){
    console.log(h4)
}

test_hoisting() //Prints undefined
var h4 = 49
test_hoisting() //Prints 49
*/

/*
function test_hoisting2(){
    console.log(h5)
    h5 = -10
}

test_hoisting2() //Prints undefined
test_hoisting2() //Prints -10
var h5 = 5
test_hoisting2() //Prints 5
*/
//Summary: var declarations only hoist its declaration not its value
//----------------------------------------------------End---------------------------------

//CONSTANTS PREVENT REASSIGNMENTS BUT NOT MUTATIONS

