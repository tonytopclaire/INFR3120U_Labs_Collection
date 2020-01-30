function validateForm() {
	var inpObj = document.getElementById("UserName");
	if (inpObj = " ") {
		document.getElementById("demo").innerHTML = inpObj.validationMessage;
	} else {
		document.getElementById("demo").innerHTML = "Input OK";
	}
} 
}
