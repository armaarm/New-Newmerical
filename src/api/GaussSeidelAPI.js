const express = require("express");
const router = express.Router();
const math = require("mathjs");

/**
 * @swagger
 *  tags:
 *    name: GaussSeidels
 *    description: GaussSeidel
 */

/**
 * @swagger
 * /api/GaussSeidelAPI:
 *  get:
 *    tags: [GaussSeidels]
 *    responses:
 *      201:
 *        description: GET
 */

/**
 * @swagger
 * /api/GaussSeidelAPI:
 *  post:
 *    parameters:
 *       - name: MatrixA
 *       - name: MatrixB
 *       - name: MatrixX
 *    tags: [GaussSeidels]
 *    responses:
 *      201:
 *        description: post data
 */

router.post("/api/GaussSeidelAPI", (req, res) => {
  var MatrixA = req.body.matrixA;
  var MatrixB = [].concat(...req.body.matrixB);
  var MatrixX = [].concat(...req.body.matrixX);
  var solution = [];
  var n = MatrixA.length;
  var temp = [];
  var temp2;
  var Check = -1;

  var xold;
  epsilon = new Array(n);

  for(var i = 0 ; i < n ; i++)
  {
    if(MatrixA[i][i] == 0)
    {
      check = 1;
    }
  }

  if(check > -1)
  {
    for(var i = 0 ; i < n ; i++)
    {
      if(check < n-1)
      {
        temp[i] = MatrixA[check];
        MatrixA[check] = MatrixA[check + 1];
        MatrixA[check+1] = temp[i];
        temp2 = MatrixB[check];
        MatrixB[check+1] = MatrixB[check];
        MatrixB[check] = temp2;
      }
      else 
      {
        temp[i] = MatrixA[check];
        MatrixA[check] = MatrixA[check - 1];
        MatrixA[check-1] = temp[i];
        temp2 = MatrixB[check];
        MatrixB[check-1] = MatrixB[check];
        MatrixB[check] = temp2;
      }
    }
  }
  do {
    xold = MatrixX;
    for (var i = 0; i < n; i++) {
      var sum = 0;
      for (var j = 0; j < n; j++) {
        if (i !== j) {
          sum = sum + MatrixA[i][j] * MatrixX[j];
        }
      }
      MatrixX[i] = (MatrixB[i] - sum) / MatrixA[i][i];
    }
  } while (error(MatrixX, xold));

  for (i = 0; i < MatrixX.length; i++) {
    solution.push(MatrixX[i]);
  }

  function error(xnew, xold) {
    for (var i = 0; i < xnew.length; i++) {
      epsilon[i] = Math.abs((xnew[i] - xold[i]) / xnew[i]);
    }
   
      if (epsilon[0] > 0.000000001 && epsilon[1] > 0.000000001 && epsilon[2] > 0.000000001) {
        return true;
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
