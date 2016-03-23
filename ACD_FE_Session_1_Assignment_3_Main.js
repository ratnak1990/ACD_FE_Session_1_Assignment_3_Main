(function check(){
    
    setTimeout(check, 20000);
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    if(name == null || name == "")
        {
            alert("Name is required field");
        }
    if(email==null || email=="")
        {
            alert("Email is required field");
        }
    if(phone==null || phone=="")
        {
            alert("Phone is required field");
        }
    if(email!=null)
        {
            var atpos= email.indexOf("@");
                            var dotpos=email.lastIndexOf(".");
                            if(atpos<1 || atpos+2 > dotpos || dotpos+2>=email.length)
                                {
                                    alert("Not a valid Email Id.Please Verify!!");
                                }
                           
        }
})();