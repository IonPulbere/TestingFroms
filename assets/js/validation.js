// Just one field
// try to validate the email input
var item = document.querySelector('.field input[type="email"]');

function CheckIfISEmpty(item,formName){
// target the form
var form= document.getElementById('firstForm');
function validationForm(){
  var atrname=item.getAttribute("name"); // get the name
  var x = document.forms[formName][atrname].value
  if(x==""){
     var hasP = item.parentElement.childNodes;
     var exist;
     var itemexist;
     for(var i=0; i<hasP.length;i++){

       if(hasP[i].nodeName.toUpperCase()=='P'){

         exist=true;
         itemexist=hasP[i];
       } else{
         exist=false


       }
     }
        if(exist){ // here ledtf
          var existingPara= document.getElementById("tempo");
          if (existingPara) {
            console.log('ss');
            existingPara.parentNode.removeChild(existingPara); //remove the child created
              }
          // make it toUpperCase and concatenate
          var s1=atrname.substring(0,1).toUpperCase();
              atrname=s1+atrname.substring(1);
          var neP= document.createElement("p");
          var neText= document.createTextNode(atrname+" field is required !");
          neP.appendChild(neText);
          neP.className="validate-me";
          neP.id='tempo';
          item.parentElement.appendChild(neP);

           // return false;
         } else{
           var s1=atrname.substring(0,1).toUpperCase();
               atrname=s1+atrname.substring(1);
           var neP= document.createElement("p");
           var neText= document.createTextNode(atrname+" field is required !");
           neP.appendChild(neText);
           neP.className="validate-me";
           neP.id='tempo';
           item.parentElement.appendChild(neP);
         }

  } else{
    var existingPara= document.getElementById("tempo");
    if (existingPara) {
      existingPara.parentNode.removeChild(existingPara); //remove the child created
        }
      }
}
// validationForm();
item.addEventListener('blur',function(){
validationForm();
},false);
} // end of function

//  Check the specified field
var listOfRequired=[ 'color','date','number','url', 'email','datetime','as'];
for(var i =0 ; i<listOfRequired.length; i++){
  var item = document.querySelector('.field input[type='+listOfRequired[i]+']');
  if(item){
    CheckIfISEmpty(item,'formName');
    }
}

// go through all elemnts in form
// document.querySelectorAll("p");
// var form= document.getElementById('firstForm');
// var formChildren=form.childNodes;
// for (var i=0;i<formChildren.length;i++){
// console.log(formChildren[i].child);
// }
// for ( var f in form){
//
// }





// +++++++++++++++++++


// // Just one field
// // try to validate the email input
// var item = document.querySelector('.field input[type="email"]');
// // target the form
// var form= document.getElementById('firstForm');
// function validationForm(){
//   var x = document.forms["formName"]["email"].value
//   if(x==""){
//     var neP= document.createElement("p");
//
//     var atrname=item.getAttribute("name"); // get the name
//     // make it toUpperCase
//      var s1=atrname.substring(0,1).toUpperCase();
//         atrname=s1+atrname.substring(1);
//     var neText= document.createTextNode(atrname+" field is required !");
//     neP.appendChild(neText);
//     neP.className="validate-me";
//     neP.id='tempo';
//     item.parentElement.appendChild(neP);
//      return false;
//   } else{
//     var existingPara= document.getElementById("tempo");
//     if (existingPara) {
//       existingPara.parentNode.removeChild(existingPara); //remove the child created
//         }
//       }
// }
// // validationForm();
// item.addEventListener('blur',function(){
// validationForm();
// },false);
