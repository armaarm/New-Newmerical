import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Table } from "antd"; //สามารถเปลี่ยนแปลงค่าในตารางทุกอย่างได้และคำสั่งง่าย
import Axios from "axios";

import "../../App.css";
import Topbar from "../Topbar";
import Footer from "../Footer";

const header = [
  {
    title: () => {
      return <p> Iteration </p>;
    },
    dataIndex: "iteration",
    key: "iteration",
    align: "center",
  },
  {
    title: () => {
      return (
        <p>
          {" "}
          X <sub> L </sub> 
        </p>
      );
    },
    dataIndex: "xl",
    align: "center",
    width: 300,
  },
  {
    title: () => {
      return (
        <p>
          X <sub> R </sub>
        </p>
      );
    },
    dataIndex: "xr",
    align: "center",
    width: 300,
  },
  {
    title: () => {
      return (
        <p>
          X <sub> M </sub>
        </p>
      );
    },
    dataIndex: "xm",
    align: "center",
    width: 300,
  },
  {
    title: "Error",
    dataIndex: "Error",
    align: "center",
    width: 300,
  },
];

var newArr = [];

export default function Bisection() {
  const topic = "Bisection Method";
  const [equation, setEquation] = useState("x^3 - x - 3");
  const [btnState, setBtnState] = useState(0);
  let [xl, setXL] = useState(1);
  let [xr, setXR] = useState(2);

  useEffect(() => {
    document.title = topic;
  }, []);

  const handleSubmit = (e) => {
    if (btnState === 0) { //e = เป็นตัวเก็บค่าstateทุกอย่างในweb
      e.preventDefault(); //ไม่ให้ทำงานบางอย่างที่เราต้องการในที่นี้คือการrefreshหน้าเพราะhtmlจะรีโหลดทุกครั้งที่กดsubmit ถ้าไม่ป้องกันจะทำให้ค่าที่เราต้องการแสดงหายไป
      bisection();
    }
  };

  const bisection = () => {

    Axios.post("http://localhost:5000/api/BisectionAPI", {//เรีัยกwebserviceที่เครื่องตัวเอง โดยที่กำหนด port ที่ server.js
      xl: parseFloat(xl), //parsefloat = เปลี่ยนค่าให้เป็น float
      xr: parseFloat(xr),
      equation: equation,
    })
      .then((res) => {
        console.log(res.data.tmpArr);
        newArr = res.data.tmpArr;
        setBtnState(1);
        console.log(newArr);
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
          <p>
            Equation :<span>&nbsp;&nbsp;</span>
            {equation}
          </p>
          <p>
            X<sub>L</sub> :<span>&nbsp;&nbsp;</span>
            {xl}
          </p>
          <p>
            X<sub>R</sub> :<span>&nbsp;&nbsp;</span>
            {xr}
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Equation :<span>&nbsp;&nbsp;</span>
              <input
                disabled={btnState}
                type="text"
                value={equation}
                onChange={(e) => 
                  {setEquation(e.target.value);
                  console.log(e)}}
              />
            </label>
            <p></p>
            <label>
              X<sub>L</sub> :<span>&nbsp;&nbsp;</span>
              <input
                disabled={btnState}
                type="text"
                value={xl}
                onChange={(e) => setXL(e.target.value)}
              />
            </label>
            <p></p>
            <label>
              X<sub>R</sub> :<span>&nbsp;&nbsp;</span>
              <input
                disabled={btnState}
                type="text"
                value={xr}
                onChange={(e) => setXR(e.target.value)}
              />
            </label>
            <p></p>

            {btnState === 0 ? (
              <button type="submit" >
                Submit
              </button>
            ) : (
              <button type="submit" >
                Reset
              </button>
            )}
          </form>
          <p></p>
          <p></p>
          <div>
            {
              <Table
                dataSource={newArr}
                columns={header}
                rowKey="iteration" //จัดลำดับแถวตามตัวแปรที่ตั้งไว้
                pagination={false}
              />
            }
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
