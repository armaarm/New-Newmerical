const express = require("express");
const router = express.Router();

router.post("/api/SplineAPI", (req, res) => {
  var FindX = req.body.FindX;
  var x = [].concat(...req.body.xValue);
  var y = [].concat(...req.body.yValue);

  var Point = [].concat(...req.body.pointCount);
  var n = Point.length;
  var s1 = (a1*(x[0]^3))+(b1*(x[0]^2))+(c1*(x[0]))+d1;
  var s2 = (a1*(x[1]^3))+(b1*(x[1]^2))+(c1*(x[1]))+d1;
  var s3 = (a2*(x[1]^3))+(b2*(x[1]^2))+(c2*(x[1]))+d2;
  var s4 = (a1*(x[2]^3))+(b1*(x[2]^2))+(c1*(x[2]))+d1;
  var s5 = (a2*(x[2]^3))+(b2*(x[2]^2))+(c2*(x[2]))+d2;
  var s6 = (a3*(x[3]^3))+(b3*(x[3]^2))+(c3*(x[3]))+d3;
  var s7 = math.derivative(s2,x);
  var s8 = math.derivative(s3,x);
  var s9 = math.derivative(s4,x);
  var s10 = math.derivative(s5,x);
  var s11 = math.derivative(math.derivative(s1,x));
  var s12 = math.derivative(math.derivative(s2,x));
  var s13 = math.derivative(math.derivative(s3,x));
  var s14 = math.derivative(math.derivative(s4,x));
  var s15 = math.derivative(math.derivative(s5,x));
  var s16 = math.derivative(math.derivative(s6,x));


  function C(i) {
    switch (i) {
      case 1:
        return (
            Linear()
        );
      case 2:
        return (
          (y[Point[i]] - y[Point[i - 1]]) / (x[Point[i]] - x[Point[i - 1]]) -
          C(i - 1)
        );
      case 3:
        return (
            Cubic()
        );
      default:
        console.log("not done yet");
    }
  }

  function Linear()

  function Cubic()
  {
        k = 12;
        f(k);
  }

  function f(k)
  {
      for(var i = 0 ; i < k ; i++)
      {
          if(i == 0)
          {
            
          }
          else if(i == 1)
          {

          }
          else if(i == 2)
          {

          }
          else if(i == 3)
          {
              
          }
          else if(i == 4)
          {
              
          }
          else if(i == 5)
          {
              
          }
          else if(i == 6)
          {
              
          }
          else if(i == 7)
          {
              s7 = s8;
          }
          else if(i == 8)
          {
              s9 = s10;
          }
          else if(i == 9)
          {
              s9 = 0;
          }
          else if(i == 10)
          {
              s12 = s13;
          }
          else if(i == 11)
          {
              s14 = s15;
          }
          else if(i == 12)
          {
              s16 = 0;
          }
      }
  }

  function findX(X, i) {
    if (i < 0) {
      return 1;
    } else {
      return (X - x[Point[i]]) * findX(X, i - 1);
    }
  }

  fx = y[Point[0]];

  if (n == 2) {
    fx += C(1) * (X - x[Point[0]]);
  } else {
    for (var i = 1; i < n; i++) {
      if (i == 1) {
        fx += C(i) * (X - x[Point[0]]);
      } else {
        fx += (C(i) / (x[Point[i]] - x[Point[0]])) * findX(X, i - 1);
      }
    }
  }

  console.log(fx);

  res.json({
    out: fx,
  });
});
module.exports = router;
