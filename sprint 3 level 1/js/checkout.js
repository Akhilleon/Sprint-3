
// Exercise 6
function validate() {	

	var error = 0;
	var letters = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
	var numbers = /^[0-9]+$/;
	var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fEmail = document.getElementById("fEmail").value;
	var fAddress = document.getElementById("fAddress").value;
	var fLastN = document.getElementById("fLastN").value;
	var fPassword = document.getElementById("fPassword").value;
	var fPhone = document.getElementById("fPhone").value;

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName == "" || fName.length < 3 || !fName.match(letters)){
		error++;
		document.getElementById("fName").classList.add("is-invalid");
	} else {
		validateInput("fName");
	}

	if(fEmail == "" || fEmail.length < 3 || !fEmail.match(email)){
		error++;
		document.getElementById("fEmail").classList.add("is-invalid");
	} else {
		validateInput("fEmail");
	}

	if (fAddress == "" || fAddress.length < 3) {
		error++;
		document.getElementById("fAddress").classList.add("is-invalid");
	} else {
		validateInput("fAddress");
	}

	if (fLastN == "" || fLastN.length < 3 || !fLastN.match(letters)) {
		error++;
		document.getElementById("fLastN").classList.add("is-invalid");
	} else {
		validateInput("fLastN");
	}

	if (fPassword == "" || fPassword.length < 3 || !(fPassword.match(/[0-9]/) && fPassword.match(/[a-zA-Z]/))) {
		error++;
		document.getElementById("fPassword").classList.add("is-invalid");
	} else {
		validateInput("fPassword");
	}

	if (fPhone == "" || fPhone.length < 3 || !fPhone.match(numbers)) {
		error++;
		document.getElementById("fPhone").classList.add("is-invalid");
	} else {
		validateInput("fPhone");
	}
	 
	if(error>0){
		//alert("Error");
		event.preventDefault()
	}else{
		//alert("OK");
	}

}

function validateInput(inputName) {
	document.getElementById(inputName).classList.remove("is-invalid");
	document.getElementById(inputName).classList.add("is-valid");
}
