  
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangeArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

//calculate the rectangle area and perimeter
	floatRectArea = floatRectWidth * floatRectHeight;
	floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;

//calculate the triangle area using Heron's formula (don't remember it? look it up...) and perimeter	
	floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
	floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

//calculate the circle area and circumference using convenient Math Object methods	
	floatCircleArea = Math.PI * Math.pow(floatRadius,2);
	floatCircleCircum = 2 * Math.PI * floatRadius;  
	
	alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
		"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
		"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));

};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */

//CIRCLE CIRCUMFERENCE
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};


function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
    return floatCircum.toFixed(2);
}

//CIRCLE AREA
var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);
    
    alert ("The Circle area is " + circleArea(floatRadius));
};

function circleArea(floatRadius_par)
{
    var floatArea = Math.PI * Math.pow(floatRadius_par,2);
    return floatArea.toFixed(2);
}

//TRIANGLE AREA
var calcTriArea = function()
{
    var floatSide1 = parseFloat($("tri_side1").value);
    var floatSide2 = parseFloat($("tri_side2").value);
    var floatSide3 = parseFloat($("tri_side3").value);
    
    alert ("The Triangle Area is "+triArea(floatSide1, floatSide2, floatSide3));
};

function triArea(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatS = (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2;
	var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par)));
    return floatTriangleArea.toFixed(2);
}

//TRIANGLE PERIMETER
var calcTriPerim = function()
{
    var floatSide1 = parseFloat($("tri_side1").value);
    var floatSide2 = parseFloat($("tri_side2").value);
    var floatSide3 = parseFloat($("tri_side3").value);
    
    alert ("The Triangle Perimeter is "+ triPerim(floatSide1, floatSide2, floatSide3));
};
function triPerim(floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
    var floatTriPerim = floatTriSide1_par + floatTriSide2_par + floatTriSide3_par;
    return floatTriPerim.toFixed(2);
}

//RECTANGLE AREA
    var calcRectArea = function()
{
    var floatWidth = parseFloat($("rect_width").value);
    var floatHeight = parseFloat($("rect_height").value);
    
    alert("The Rectangle Area is "+rectArea(floatWidth, floatHeight));
};
function rectArea(floatRectWidth_par, floatRectHeight_par)
{
    var floatArea = floatRectWidth_par * floatRectHeight_par;
    return floatArea.toFixed(2);
}

//RECTANGLE PERIMETER
var calcRectPerim = function()
{
    var floatWidth = parseFloat($("rect_width").value);
    var floatHeight = parseFloat($("rect_height").value);
    
    alert("The Rectangle Perimeter is " + rectPerim(floatWidth, floatHeight));
};
function rectPerim(floatRectWidth_par, floatRectHeight_par)
{
    var floatPerimeter = (2 * floatRectWidth_par) + (2 * floatRectHeight_par);
    return floatPerimeter.toFixed(2);
}

window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_tri_area").onclick = calcTriArea; //runs the calcTriArea function when clicked
    $("calc_tri_perim").onclick = calcTriPerim; //runs the calcTriPerim function when clicked
    $("calc_circle_area").onclick = calcCircleArea; //runs the calcCircleArea function when clicked
    $("calc_rect_area").onclick = calcRectArea; //runs the calcRectArea function when clicked
    $("calc_rect_perim").onclick = calcRectPerim; //runs the calcRectPerim function when clicked
};