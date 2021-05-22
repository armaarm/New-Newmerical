import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";

import "../../App.css";
import Topbar from "../Topbar";
import Footer from "../Footer";

export default function NewtonDivided() {
  const topic = "Newton Divided Difference";
  const [num, setNum] = useState(0);
  const [xValue, setX] = useState([]);
  const [yValue, setY] = useState([]);
  const [pointCount, setpointCount] = useState(0);
  const [FindX, setFindX] = useState(0);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    document.title = topic;
  }, []);

  const generate_table = () => {
    return [...Array(parseInt(num || 0)).keys()];
  };

 
  const initialX = (i, event) => {
    let copy = [...xValue];
    copy[i] = +event.target.value;
    setX(copy);
  };

  const initialY = (i, event) => {
    let copy = [...yValue];
    copy[i] = +event.target.value;
    setY(copy);
  };


  const sendToAPI = (e) => {
    e.preventDefault();
    Spline();
  };
  const Spline = () => {
    Axios.post("http://localhost:5000/api/SplineAPI", {
      xValue: xValue,
      yValue: yValue,
      FindX: FindX,
      pointCount: pointCount,
    })
      .then((res) => {
        setOutput(res.data.out);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Topbar />
      <p></p>
      <div>
        <Container>
          <h1>
            <code>{topic}</code>
          </h1>
          <p></p>
          <p></p>
          <div>
            <label>
              Enter number of Variable :<span>&nbsp;&nbsp;</span>
              <input
                type="text"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </label>
            <p></p>
            {num > 0 ? (
              <form onSubmit={sendToAPI}>
                <p></p>
                {generate_table().map((i) => (
                  <div key={i} className="list-group list-group-flush">
                    <div className="list-group-item">
                      <div className="form-row">
                        <div className="form-group col-4">
                          <label>
                            X<sub>{i + 1}</sub> =
                          </label>
                          <input
                            type="number" step="any"
                            onChange={(e) => initialX(i, e)}
                          />
                        </div>
                        <div className="form-group col-4">
                          <label>
                            F(x<sub>{i + 1}</sub>) =
                          </label>
                          <input
                            type="number" step="any"
                            onChange={(e) => initialY(i, e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <p></p>
                <label>
                  Find value at X :<span>&nbsp;&nbsp;</span>
                  <input
                    type="text"
                    value={FindX}
                    onChange={(e) => setFindX(e.target.value)}
                  />
                </label>
                <p></p>
                <label>
                  Enter Spline Points :<span>&nbsp;&nbsp;</span>

                <select value={pointCount} onChange={(e) => setpointCount(e.target.value)}>
                    <option value="2">Linear Spline</option>
                    <option value="3">Quadratic Spline</option>
                    <option selected value="4">Cubic Spline</option>
                </select>

                </label>

                <p></p>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </form>
            ) : null}
          </div>
          <p></p>
          <h2>Output</h2>
          F(x) = {output}
        </Container>
      </div>
      <Footer />
    </div>
  );
}
