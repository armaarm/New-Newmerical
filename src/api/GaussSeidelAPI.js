const express = require("express");
const router = express.Router();
const math = require("mathjs");
/** 
 * @swagger
 * tags:
 *    name: GaussSeidel
 *    description: GuassSeidel
 */

/**
 * 
 * @swagger
 * /api/GaussSeidelAPI:
 *  get:
 *    tags: [GaussSeidel]
 *    responses:
 *      201:
 *      description : GET
 *      
 */

/** 
 * @swagger
 * /api/GaussSeidelAPI:
 *    post:
 *      parameters:
 *        - name: MatrixA
 *        - name: MatrixB
 *        - name: MatrixX
 *      tags: [GaussSeidel]
 *      responses:
 *        201:
 *          description : post data
 * 
 */

router.post("/api/GaussSeidelAPI", (req, res) => {
  var MatrixA = req.body.matrixA;
  var MatrixB = [].concat(...req.body.matrixB);
  var MatrixX = [].concat(...req.body.matrixX);
  var solution = [];
  var n = MatrixA.length;

  x = new Array(n);
  var xold;
  epsilon = new Array(n);
  do {
    xold = JSON.parse(JSON.stringify(x));
    for (var i = 0; i < n; i++) {
      var sum = 0;
      for (var j = 0; j < n; j++) {
        if (i !== j) {
          //else i == j That is a divide number
          sum = sum + MatrixA[i][j] * MatrixX[j];
        }
      }
      x[i] = (MatrixB[i] - sum) / MatrixA[i][i]; //update x[i]
    }
  } while (error(x, xold)); //if true , continue next iteration

  for (i = 0; i < x.length; i++) {
    solution.push(x[i]);
  }

  function error(xnew, xold) {
    for (var i = 0; i < xnew.length; i++) {
      epsilon[i] = Math.abs((xnew[i] - xold[i]) / xnew[i]);
    }
    for (i = 0; i < epsilon.length; i++) {
      if (epsilon[i] > 0.000001) {
        return true;
      }
    }
    return false;
  }

  console.log(solution);
  console.log(math.multiply(MatrixA, solution));

  res.json({
    out: solution,
  });
});
module.exports = router;
