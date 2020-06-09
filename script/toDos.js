
//******************** table*****************//
$(document).ready(function(){
    // alert("please wait while we load");
function list(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status == 200){
            var items = JSON.parse(this.responseText);
            var output ="<table><tr><th>To Do List</td></tr>";
            var cbox = `<input class="checkboxes" type="checkbox" ></input>`;
            var chk = document.getElementsByClassName("checkboxes");
             for(i=0;i<items.length;i++){
               var currentItem = items[i];
               output +="<tr><td>"+cbox+" "+ currentItem.title+"</td></tr>";
             }
            output +="</table>"
            document.getElementById("out").innerHTML= output;
            var counter = 0;
            items.forEach((element)=>{
             if(element.completed === true){
                chk[counter].setAttribute("checked","checked");
                chk[counter].setAttribute('disabled', 'disabled');
            }
            counter += 1;
            })
         }
         
    }
     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    //xhttp.open("GET","./sample.json",true);
    xhttp.send();
    }
    list();
    // //====================promise============================
    var count =0;
    setTimeout(() => {
        alert("page loaded successfully");
        console.log("ready");
       $("table").on("change",()=>{
        var p = new Promise(function(resolve,reject){
            count++;
            console.log(count);
            if(count>=5){
                resolve(`you have completed ${count} tasks successfully!`);
            }
            else{
                reject("wait");
            }
        });
    p
    .then(function(e){
        console.log(e);
        alert(e);
    })
    .catch(function(f){
        console.log(f);
    })
       })
    }, 4000);
})
