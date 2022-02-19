        
$("#username").val();
      
$("#login-container").submit(function(e){
          e.preventDefault();

     nameValue = $("#username").val();
     passValue = $("#password").val();
     console.log(nameValue);
     console.log(passValue);
});
      
    var user = document.querySelector("#username");
        
    $(document).ready(function(){
        $("#message").after();
        });    

    user.addEventListener("keyup", function(){
        $("#message").empty();  

        var check = document.querySelector("#check");
        var error = document.querySelector("#error");
      
    if(user.value == "new_user") {
          user.style.border = "3px solid green";
          check.style.display = "block";
          error.style.display = "none";
          return false;
    }else {
          user.style.border = "3px solid red";
          error.style.display = "block";
          check.style.display = "none"; 
          $("#message").html("*please, enter valid username");
        }
    });
      
        var pass = document.querySelector("#password");
          
        pass.addEventListener("keyup", function(){
            $("#message").empty();

        var check1 = document.querySelector("#check1");
        var error1 = document.querySelector("#error1");

    if (pass.value == "123456789") {
          pass.style.border = "3px solid green";
          check1.style.display = "block";
          error1.style.display = "none";
          return false;
    }else {
          pass.style.border = "3px solid red";
          error1.style.display = "block";
          check1.style.display = "none";

          $("#message").html("*please, enter valid password");
        }
    });

     function validate() {

        var user = $("#username").val();
        var pass = $("#password").val();

        if(user == "new_user" && pass == "123456789") {
            $("#message").html("Successfull login!")
            return false;
        }else{
            $("#message").html("Login failed!")
            }
        };