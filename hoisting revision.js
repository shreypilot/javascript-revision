
 
function problemOne() {
    console.log(num);
  };
  //problemOne(); 
  //console.log(problemOne)   
  //Prediction: fun
  //Actual: num not defined

  function problemTwo() {
    console.log(num);
    var num;
  };
  //problemTwo(); 
  //console.log(problemTwo)  
  //Prediction:not defined
  //Actual: undefined for num

  function problemThree() {
    console.log(num);
    var num;
    num = 6;
  };
//   problemThree();
//   console.log(problemThree)
  //Prediction:num =6
  //Actual:undefined

  function problemFour() {
    num = 6;
    console.log(num);
    var num;
  };
  //problemFour();
  //Prediction: undefined
  //Actual: 6

  function problemFive() {
    var x = 1; 
    console.log(x + " " + y); 
    var y = 2; 
  };
  //problemFive();
  //Prediction:1 undefined
  //Actual:1 undefined

  function problemSix() {
    function bar() {
      return 3;
    }
    console.log(bar()) 
    function bar() {
      return 8;
    }  
  };
  problemSix();
  //Prediction:
  //Actual:
  
  function problemSeven() {
    var bar = function() {
      return 3;
    }
    console.log(bar()) 
    var bar = function() {
      return 8;
    }
  };
  //problemSeven();
  //Prediction
  //Actual:
  
//   function problemEight() {
//     var a = 1;
//     function b() {
//       a = 10;
//       return;
//       function a() {}
//     }
//     b();
//     console.log(a);
//   }
//   //problemEight();
//   //Prediction:
//   //Actual:
  
//   function problemNine() {
//     var x = 1; 
//     console.log(x + " " + y); 
//     let y = 2; 
//   };
//   //problemNine();
//   //Prediction:
//   //Actual:
  
//   function problemTen() {
//     var x = 1; 
//     console.log(x + " " + y); 
//     const y = 2; 
//   };
//   //problemTen();
//   //Prediction:
//   //Actual:
  
//   function problemEleven() {
//     function parent() {
//       var hoisted = "I'm a variable";
//       function hoisted() {
//           return "I'm a function";
//       }
//       return hoisted(); 
//     }
//     console.log(parent());
//   };
//   //problemEleven();
//   //Prediction:
//   //Actual: