$(document).ready(function () {
	$("#form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			pass: {
				required: true,
				minlength: 8
			},
			cpass: {
				required: true,
				equalTo: "#pass"
			},
		},
		messages: {
			// email: 'Email is required '
			cpass: {
				required: 'Confirm your password',
				equalTo: 'Please enter the password again.'
			}
		}
	});
})


// resetting
const reset = document.querySelector("input[name='reset']");
let error = document.querySelector(".error");
reset.addEventListener("click", () => {
	// console.log(error)
})
