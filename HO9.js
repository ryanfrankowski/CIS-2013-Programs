//Simple function used to access elements on the html DOM
var $ = function (id) {
    return document.getElementById(id);
};
// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () {
	var intCount = parseInt($("total_fib").value); //gets user input from the DOM
    //validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	var i=0;
	var j=1;
	var k;
	var stringOutput = i +" " + j +" ";
     // write whatever kind of loop you want, given the above info, to generate the appropriate
// number of fibonacci numbers and then post it to the html DOM

//Makes sure that the int count is validated
    if (isNaN(intCount) || intCount<2 || intCount>100){
        alert("Error: The number is not less than 2 and not greater than 100.");
        $("total_fib").value="";
    }
    while (intCount>2){
        k=i + j;
        stringOutput = stringOutput + k + " "; //this allows the user to view the two numbers outputed
        i=j;
        j=k;
        intCount--;
    }
    //runs for all possibilites above 2

$("output").value=(stringOutput); //calls for the outputed message
};

// Push solution back to Output through DOM
window.onload = function () 
{
    $("total_fib").value = "";
    $("generate").onclick = generate;
};  