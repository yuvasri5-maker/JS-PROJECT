function age(){
            let dob = document.getElementById("dob").value; 
            if(dob==" "){
                document.getElementById("result").innerHTML="Please select your date of birth"
            } 
            let birth=new Date(dob);
            let tdy=new Date();
            let age=tdy.getFullYear()-birth.getFullYear();
            let month=tdy.getMonth()-birth.getMonth();
            if(month<0 ||(month===0 && tdy.getDate()<birth.getDate())){
                age--;
            }
            document.getElementById("result").innerHTML="Your age is " + age + " years old"
        }