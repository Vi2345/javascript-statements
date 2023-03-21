function ifelsecondition(){
    let hour=Number(document.getElementById("textifelse").value);
    if(hour>=6 && hour<18){
      greeting=('Good Day!');
      document.getElementById("demo").innerHTML="If the hour greater than or equal to 6 and less than 18  the output of the value is:"+"<br>"+greeting;
    
    }

}

function elseifcondition(){
  let hour=Number(document.getElementById("textelseif").value);

  if( hour>=3 && hour<12){
    greeting=('Good morning!');
   document.getElementById("demo2").innerHTML="If the hour greater than or equal to 3 and less than 12  the output of the value is:"+"<br>"+greeting;
  }
  else if(hour>=12 && hour<20){
    greeting1=('Good Day!');
    document.getElementById("demo3").innerHTML="If the hour greater than or equal to 12 and less than 20  the output of the value is:"+"<br>"+greeting1;
   
  }

  else{
    document.getElementById("demo4").innerHTML=('Good Evening!');
   
  }


 


}
function natural()
{
    var n = parseInt(document.getElementById ("num").value);
    var sum = 0;
    for (let i =0;i<=n;i++)
    {
        sum = sum + i;
    }
    document.getElementById ("demo5").innerHTML ="Sum of first"+" "+n+ " Natural numbers is :"+" "+sum;
}

function even()
{
   var initial = 2;
   var sum = 0;
   var n = parseInt(document.getElementById ("num").value);
  for (i = 1; i <= n; i++)
  {
      sum = sum + initial;
      initial = initial + 2;
  } 
  document.getElementById ("demo6").innerHTML ="Sum of first"+" "+n+ " Even numbers is :"+sum;
}

function odd()
{
   var initial = 1;
   var sum = 0;
   var n = parseInt(document.getElementById ("num").value);
  for (i = 1; i <= n; i++)
  {
      sum = sum + initial;
      initial = initial + 2;
  } 
  document.getElementById ("demo7").innerHTML ="Sum of first"+" "+n+ " Odd numbers is :"+sum;
}

function forincondition()
{

  let numbers =(document.getElementById("textforin").value);
  
  let text1 = "";
  for (let x in numbers) {
    text1 += numbers[x]+"<br>"; 
    document.getElementById("demo8").innerHTML = text1;
  }
  
 
  
  
  }

  function foroffcondition(){
let language =String(document.getElementById("textforoff").value);

let text ="";
for (let x of language) {
  text += x + "<br>";
  document.getElementById("demo9").innerHTML = text;
}


  }
function factorial()
{
var num = Number(document.getElementById("Factorial").value);
var factorial = 1;
while (num >= 1) {
   factorial = factorial * num;
   num--;
}
document.getElementById ("demo10").innerHTML = "Factorial of the Above Number is"+" "+factorial;
}


function fibonacci()
{
        var answer = [];
        var x = 0;
        var y = 1;
        var z;
        var num = Number(document.getElementById("Fibonacci").value);       
        answer.push(x);
        answer.push(y);
        var i = 2;
        while (i < num) 
        {
          z = x + y;
          x = y;
          y = z;
          answer.push(z);
          i = i + 1;
        }
        document.getElementById ("demo11").innerHTML = "The First"+" "+num+" "+"Fibonacci Series"+" "+"("+answer+")";
}


function switchcase()
{
let marks=Number(document.getElementById("textswitch").value);
switch (true) {
  case (marks > 90):
    document.getElementById("demo12").innerHTML = "Excellent Grade";
    break;
  case (marks > 80):
    document.getElementById("demo12").innerHTML = "Super Grade"
    break;
  case (marks > 50):
    document.getElementById("demo12").innerHTML = "Just Pass!";
    break;
  case (marks > 25):
    document.getElementById("demo12").innerHTML = "Failed Grade";
    break;
   default:
   document.getElementById("demo12").innerHTML=    "well score";
}
}

