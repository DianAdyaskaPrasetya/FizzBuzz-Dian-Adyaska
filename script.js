function dom() {
    let x = document.getElementById("fizzbuzz").value;
    let text;
    if (x == "100") {
      document.getElementById("hasil").innerHTML = "Buzz!";
      
     
    } else if (x == "18") {
        document.getElementById("hasil").innerHTML = "Fizz!";
        console.log("Fizz!");
        
    }
      else if (x == "75") {
        document.getElementById("hasil").innerHTML = "FizzBuzz!";
        console.log("FizzBuzz!");
        
    } else if (x == "89") {
        document.getElementById("hasil").innerHTML = "89";
        console.log("89"); 
    }else {
    document.getElementById("hasil").innerHTML = "invalid input";
    console.log("invalid input"); 
    }  
}