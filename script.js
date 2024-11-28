function validEmail(str) {
	  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     return emailPattern.test(str); 
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
