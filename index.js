// let  age = prompt("What is your age");
// //age= 15 - 30
// //And Operator depends on two statement should be correct
// //Or operator depends on minimum one condition 
// if((age>15) || (age <=30 )){
//      document.write("you are eligible for cricket");
//  }
//  else{
//      console.log("you are not eligible")
//  }

let message=prompt("welcome to utech \n choose your answer \n how much cost type cost \n what courses available type courses \n what is utech type utech");

if ( (message=="cost")||(message=="Cost")){
    alert("Fees structure 3000/month")
}
else if ((message=="Courses")||(message=="courses")){
    alert("javascript available now")
}
else if ((message=="Utech")||(message=="utech")){
    alert("utech is digital platform for kids age below 15")
}
else{
    alert("data not found")
}