//Mention function name
function validation()                                    
{ 
    // calling values from index.html into form_script.js  using document.getElementById method
    var firstname = document.getElementById('fname').value;         
    var lastname = document.getElementById('lname').value; 
    var gender = document.getElementById('gender').value; 
    var Email =  document.getElementById('eid').value;
    var password =document.getElementById('pass').value; 
    var cpassword = document.getElementById('cpass').value;

// Checking input data's are empty or not using if condition
    if (firstname== "")                                  
    { 
        window.alert("Please enter your first name."); 
    
    } 
   
      else if(lastname == "")                               
    { 
        window.alert("Please enter your last name."); 
         
    } 
       
      else if(gender == "")                                   
    { 
        window.alert("Please select the Gender"); 
        
    } 
   
      else if(Email == "")                           
    { 
        window.alert("Please enter your e-mail id."); 
           
    } 
     else if(password == "")                           
    { 
        window.alert("Please enter your password."); 
            
    } 
     else if(cpassword == "")                        
    { 
        window.alert("Please enter your confirm password"); 
            
    } 
    // To checking password and confirm passwords are same or not

     else if(password !=cpassword)                        
    { 
        window.alert("Password's are miss matching"); 
            
    } 

    //without missing data and matching passwords can complete the create an accound
else{
       window.alert("Successfully created"); 
}

}