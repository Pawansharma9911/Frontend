import React from "react";
import developer from "../../assets/developer.png";

function Team() {
  return (
    <div className="container">
      <h2 className="text-center text-muted">People</h2>
      <div className="row mt-5">
        <div className="col-6 p-5 text-center ">
          <img
            src={developer}
            style={{ borderRadius: "100%", width: "60%", marginTop: "-60px", marginLeft: "-40px"  }}
          />
          <h5 className="text-muted mt-4">Pawan Sharma</h5>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            Pawan bootstrapped and founded Finexa in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Finexa has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
          Doing Gym is his zen.
          </p>
          <p >
          Connect on <a style={{textDecoration:"none"}} href="https://nithinkamath.me">Homepage</a> /  <a style={{textDecoration:"none"}} href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /  <a style={{textDecoration:"none"}} href="https://x.com/PawanSh72379275">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
