function getFormvalue() {
    //Write your code here
	let firstName = document.getElementsByName("fname")[0].value.trim()
	let lastName = document.getElementsByName("lname")[0].value.trim()
	console.log(firstName)
	console.log(lastName)
	alert(`${firstName} ${lastName}` );

}
