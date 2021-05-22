const express = require("express");
const router = express.Router();
const math = require("mathjs");
/**
 * @swagger
 *  tags:
 *   name: LUDecompose
 *   description: LU
 * 
 */


/**
 * @swagger
 * /api/LUDecomposeAPI:
 *   get:
 *     tags: [LUDecompose]
 *     responses:
 *       201:
 *         description: GET
 */

/**
 * @swagger
 * /api/LUDecomposeAPI:
 *  post:
 *    parameters:
 *      - name: MatrixA
 *      - name: MatrixB
 *      - name: MatrixX 
 *    tags: [LUDecompose]
 *    responses: 
 *       201:
 *        description: post data
 */

router.post("/api/LUDecomposeAPI", (req, res) => {
  var MatrixA = req.body.matrixA;
  var MatrixB = [].concat(...req.body.matrixB);
  var solution = [];
  var decompose;

  decompose = math.lusolve(MatrixA, MatrixB);
  for (var i = 0; i < decompose.length; i++) {
    solution.push(Math.round(decompose[i]));
  }

  console.log(solution);

  res.json({
    out: solution,
  });
});
module.exports = router;
