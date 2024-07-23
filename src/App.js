import "./App.css";
import { useState } from "react";
function App() {
  const [tab, tabState] = useState(1);

  return (
    <div className="maintab">
      <h3>Trending</h3>

      <div className="block-tables">
        <div
          onClick={() => tabState(1)}
          className={tab === 1 ? "tab active-tab" : "tab"}
        >
          Games
        </div>
        <div
          onClick={() => tabState(2)}
          className={tab === 2 ? "tab active-tab" : "tab"}
        >
          Movies
        </div>
        <div
          onClick={() => tabState(3)}
          className={tab === 3 ? "tab active-tab" : "tab"}
        >
          Books
        </div>
      </div>

      <div className="info-tabs">
        <div className={tab === 1 ? "info active-info" : "info"}>
          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>Space Simulator</h2>
                <p>Game/Free/Simulation</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>

          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>Mechinarium</h2>
                <p>Game/Paid/Adventure</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>

          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>Code of War</h2>
                <p>Game/Free/Action</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>
        </div>

        <div className={tab === 2 ? "info active-info" : "info"}>
          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>Oppenheimer</h2>
                <p>Drama/Thriller</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>

          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>Barbie</h2>
                <p>Comedy/Drama</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>
        </div>

        <div className={tab === 3 ? "info active-info" : "info"}>
          <div className="info-child">
            <div className="info-childs">
              <div>
                <h2>
                  Lord of the rings: <br /> Fellowship of the ring
                </h2>
                <p>Fantasy</p>
              </div>
              <h4>Explore</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
