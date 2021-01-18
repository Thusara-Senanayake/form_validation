
// resetting inputs, err_msg
const reset = document.querySelector("input[name='reset']");
const err_msg = document.querySelector(".err_msg");
reset.addEventListener("click", () => {
	err_msg.innerHTML = ''
})




function form_validation(){
	const email = document.querySelector("input[name='email']").value;
	const pass = document.querySelector("input[name='pass']").value;
	const cpass = document.querySelector("input[name='cpass']").value;
	const pass_leng = document.querySelector("input[name='pass']").value.length;
	const err_msg = document.querySelector(".err_msg");
	
	
	
	if (email == null || email === ""){
		err_msg.innerHTML = 'Please enter email';
		return false;
	}
	else if(pass == null || pass === ""){
		err_msg.innerHTML = 'Please enter password';
		return false;
	}
	else if (pass_leng <= 8){
		err_msg.innerHTML = 'Minimum password length is 8';
		return false

	}
	else if (cpass !== pass){
		err_msg.innerHTML = 'Password miss match';
		return false
	}
	
	else{
		return true;
		
	}
	
	
 }
 