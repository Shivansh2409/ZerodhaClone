import React from "react";
function Universe() {
  return (
    <div className="container p-5 text-center" style={{ margin: "5rem" }}>
      <div className="row">
        <h1 className="text-center" style={{ color: "#3B3B3B" }}>
          The Zerodha Universe
        </h1>
        <p className="text-center mt-3" style={{}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div
          className="col text-center"
          style={{ margin: "2rem 2rem 2rem 4rem" }}
        >
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ width: "45%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{
              color: "GrayText",
              fontSize: "0.9rem",
              marginBottom: "3rem",
            }}
          >
            Our asset management venture<br></br>
            that is creating simple and transparent index<br></br>
            funds to help you save for your goals.
          </p>
          <img
            src="/images/streakLogo.png"
            style={{ width: "45%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{ color: "GrayText", fontSize: "0.9rem" }}
          >
            Systematic trading platform<br></br>
            that allows you to create and backtest<br></br>
            strategies without coding.
          </p>
        </div>
        <div className="col text-center" style={{ margin: "2rem 0 0 0 " }}>
          <img
            src="/images/sensibullLogo.svg"
            style={{ width: "65%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{
              color: "GrayText",
              fontSize: "0.9rem",
              marginBottom: "3rem",
            }}
          >
            Options trading platform that lets you <br></br>
            create strategies, analyze positions, and examine<br></br>
            data points like open interest, FII/DII, and more.
          </p>
          <img
            src="/images/smallcaseLogo.png"
            style={{ width: "60%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{ color: "GrayText", fontSize: "0.9rem" }}
          >
            Thematic investing platform
            <br></br>
            that helps you invest in diversified<br></br>
            baskets of stocks on ETFs.
          </p>
        </div>
        <div
          className="col text-center"
          style={{ margin: "2rem 4rem 2rem 2rem" }}
        >
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ width: "45%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{
              color: "GrayText",
              fontSize: "0.9rem",
              marginBottom: "3rem",
            }}
          >
            Our asset management venture<br></br>
            that is creating simple and transparent index<br></br>
            funds to help you save for your goals.
          </p>
          <img
            src="/images/zerodhaFundhouse.png"
            style={{ width: "45%", margin: "1.5rem" }}
          ></img>
          <p
            className="text-center"
            style={{ color: "GrayText", fontSize: "0.9rem" }}
          >
            Our asset management venture<br></br>
            that is creating simple and transparent index<br></br>
            funds to help you save for your goals.
          </p>
        </div>
        
      </div>
      <button style={{width:"20%",margin:"3rem 0 0 0 "}}className='p-2 btn btn-primary fs-5'>Sign Up for free</button>
    </div>
  );
}

export default Universe;
