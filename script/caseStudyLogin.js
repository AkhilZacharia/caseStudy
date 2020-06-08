
    // //=================callback=================
    function validate(callback){
         let token = callback();
         console.log(token);
        if (token === 1){
            console.log("success");
           return true;
        }
        else{
            alert("invlid login credentials");
            console.log("failed");
            return false;
        }
        // callback()
    }
    function val2(){
        var username = document.getElementById("use").value ;
        var password = document.getElementById("pas").value ;
        const user ="admin";
        const pass = 12345;
        console.log(password);
        if ((user === username)&(pass === Number(password))){
            return 1;
        }
        else{
            //console.log("fail");
            return 0;
        }
    }

