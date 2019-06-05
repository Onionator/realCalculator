
	//this function takes 2 inputs and adds them together
	var addition = function(num1, num2) {
		return num1 + num2;
	};
	//this function takes 2 inputs and subtracts the second from the first
	var subtraction = function(num1, num2) {
		return num1 - num2;
	};
	//this function takes 2 inputs and multiplies them together
	var multiplication = function(num1, num2) {
		return num1 * num2;
	};
	//this function takes 2 inputs and divides the first by the second
	var division = function(num1, num2) {
		return num1 / num2;
	};
	// when equals is clicked, it calls the correct function and outputs the answer

$(document).ready(function() {
	$(".add").click(function() {
		var input1 = parseInt($(".input1").val());
		var input2 = parseInt($(".input2").val());
		var result = addition(input1, input2);
		alert(result);
		event.preventDefault();
	});
	$(".subtract").click(function() {
		var input1 = parseInt($(".input1").val());
		var input2 = parseInt($(".input2").val());
		var result = subtraction(input1, input2);
		alert(result);
		event.preventDefault();
	});
	$(".multiply").click(function() {
		var input1 = parseInt($(".input1").val());
		var input2 = parseInt($(".input2").val());
		var result = multiplication(input1, input2);
		alert(result);
		event.preventDefault();
	});
	$(".divide").click(function() {
		var input1 = parseInt($(".input1").val());
		var input2 = parseInt($(".input2").val());
		var result = division(input1, input2);
		alert(result);
		event.preventDefault();
	});
});















	// $ (".equals").click(function() {
	// 	alert("first alert")
	// 		var input1 = parseInt((".input1"));
	// 		var input2 = parseInt((".input2"));
	// 		var result = (input1, input2);
	//
	// 		alert(result);
	// 	alert("last alert")
	// });
	//
	// var selected = $(".mathButton").click(function() {
	// 	$(this).children("btn").;
	//
	// });
	// 	alert(selected);
	// });



	// $ var equals = (".equals").click(function() {
	// 	var symbols = [addition, subtraction, multiplication, division]
	// 	alert(symbols[parseInt(".mathButton")] + (parseInt(".input1"), parseInt(".input2")));
	// });
