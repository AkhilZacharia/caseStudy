
// ${"#file"}.load("../sample.txt",(res,status,xhr)=>{
//         console.log(res);
// })

//******************** table*****************//
// $(document).ready(function(){
//     var array= $.getJSON("https://jsonplaceholder.typicode.com/todos");
//     // console.log(array);
//     var counter =0;
//     jQuery.each( array, function( i, val ){
//         console.log(va)
//         counter ++;
//     })
// })
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
            console.log(currentItem);
            output +="</table>"
            document.getElementById("out").innerHTML= output;
            var counter = 0;
            items.forEach((element)=>{
            if(element.completed === true){
                chk[counter].setAttribute("checked","checked");
            }
            counter += 1;
            })
         }
         
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    list();

    $(document).ready(function(){
        $(".checkboxes").on("change",function(){
            
        })
    // var counter =0;
    // jQuery.each( array, function( i, val ){
    //     console.log(va)
    //     counter ++;
    // })
    })
//var cbox = $(`<input class="checkboxes" type="checkbox" ></input>`).on("click",function(){
//});
//     // var i= chk[counter].getAttribute("");
//     // console.log(i)



    // //====================promise============================
    // var p = new Promise(function(resolve,reject){
    //     //var count =0;
    //     var i =0;
    //     // var ch = document.getElementsByClassName("checkboxes");
    //     // ch.forEach((element)=>{
    //     //    var i= element.getAttribute("checked","checked")
    //         // if(element.completed === "true"){
    //         //     count += 1;
    //         // }
    //         // if(element.getAttribute("checked","checked")==="checked"){
    //            // console.log(i)
    //         //     i++;
    //         // }
    //    // })
    //     if(count>=5){
    //                 resolve("success");
    //             }
    //             else{
    //                 reject(i);
    //             }
    // });
    // p
    // .then(function(e){
    //     console.log(e)
    // })
    // .then(function(){
    //     console.log("e")
    // })
    // .then(function(){
    //     console.log("e")
    // })
    // .catch(function(f){
    //     console.log(f)
    // })

//return inside create post&& createpost.then()