import React from 'react';

function App() {
  return (
    <div className="App">
      <form className="form">
        <div className="title">Card Number</div>
        <input></input>
        <div className="title">Card Name</div>
        <input></input>
        
        <div className="verification">
          <div className="verification-container">
            <div className="title">
              Expiration Date
            </div>
            <div className="verification-date">
              <div className="dropdown">
                <span className="dropdown-selection">MO</span>
                <div className="dropdown-content">
                  <p className="item">01</p>
                  <p className="item">02</p>
                  <p className="item">03</p>
                  <p className="item">04</p>
                  <p className="item">05</p>
                </div>
              </div>
              <div className="dropdown">
                <span className="dropdown-selection">YR</span>
                <div className="dropdown-content">
                  <p className="item">2019</p>
                  <p className="item">2020</p>
                  <p className="item">2022</p>
                  <p className="item">2023</p>
                  <p className="item">2024</p>
                </div>
              </div>
            </div>

          </div>

          <div className="cvv">
            <div className="title">
              CVV
            </div>
            <input></input>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
