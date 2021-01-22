$(document).ready(() => {
    $("#form").submit( (e) => {
        e.preventDefault();

        if($("#email").val() === "" || null){
            console.log("empty email field ")
        }
        else{
        $("#form").submit()
       
        }
    });
});