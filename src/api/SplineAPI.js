const express = require("express");
const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: Spline
 *    description: Spline
 */

/**
 * @swagger
 * /api/SplineAPI:
 *  get:
 *    tags: [Spline]
 *    responses:
 *      201:
 *        description: GET
 */

/**
 * @swagger
 * /api/SplineAPI:
 *  post:
 *    parameters:
 *       - name: xValue
 *       - name: yValue
 *       - name: FindX
 *    tags: [Spline]
 *    responses:
 *      201:
 *        description: post data
 */

  router.post("/api/SplineAPI", (req, res) => {
    var xs = [].concat(...req.body.xValue);
    var ys = [].concat(...req.body.yValue);
    // var ks = getNaturalKs((xs.length));
    var X = req.body.FindX;
    var choose1 = 0;
    var choose2 = 0;
    var count = 0;
    var answer = LinearS(X, xs, ys)

  function LinearS(X,xs,ys)
  {
      for(var i = 0 ; i < xs.length; i++)
      {
        if(X > xs[i])
        {
          console.log(xs[i]);
          count++;
        }
      }
      choose1 = count;
      choose2 = count-1;
      console.log(X);
      console.log(count);
      console.log(choose1,choose2);
      console.log(xs[choose1],xs[choose2]);
      console.log(ys[choose1],ys[choose2]);
      var ss = (ys[choose1]-ys[choose2])/(xs[choose1] - xs[choose2]);
      console.log(ss);
      var t = ss*(X - xs[choose2]);
      console.log(t);
      var aws = ys[choose2]+t;
      console.log(aws);
      return aws;
  }
  
res.json({
    out: answer,
  });
});
module.exports = router;