import React from 'react';

function App() {
  return (
    <div className="App">
      <form className="form">
        <div className="title">Card Number</div>
        <input></input>
        <div className="title">Card Name</div>
        <input></input>
        <div className="title">
          Expiration Date
          <div className="title">
            MO
          </div>
          <div className="title">
            Year
          </div>
          <div className="title">
            CVV
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
