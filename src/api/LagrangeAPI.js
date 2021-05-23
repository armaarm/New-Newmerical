const express = require("express");
const router = express.Router();

router.post("/api/LagrangeAPI", (req, res) => {
  var xi = req.body.FindX;
  var x = [].concat(...req.body.xValue);
  var y = [].concat(...req.body.yValue);

  var Point = [].concat(...req.body.interpolatePoint);
  var n = Point.length;
  var sum = lagrange(xi,n);

   function lagrange (xi,n)
  {
      var result = 0;
      for (var i=0; i<n; i++)
      {
          var term = y[i];
          for (var j=0;j<n;j++)
          {
              if (j!=i)
                  term = term*((xi - x[j])/(x[i] - x[j]));
          }
          result += term;
      }
      return result;
  }
  console.log(sum);

  res.json({
    out: sum,
  });
});
module.exports = router;
