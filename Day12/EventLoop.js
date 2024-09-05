/*
console.log("Start")


function temp(){

    console.log("Heee")
}
setTimeout(temp,0);  //even after mrk 0 interval flow output will not change due GEC has to complete first
console.log("end");

*/
//    Example2


console.log("Start")


function hello(){



    console.log("helloe");

  function done(){
    console.log("=== Donee Hello");

  }
setTimeout(done,5000);
}

function world(){

    console.log("World")


    function done(){
        console.log("=== Donee World");
    
      }
setTimeout(done,5000);
}

hello();
world();


