//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

                            //set initial state
  let [homeScore, setCount1] = useState(0);
  let [awayScore, setCount2] = useState(0);

  const timesSevenHome = event => {
    setCount1(homeScore + 7)
  };

  const timesSevenAway = event => {
    setCount2(awayScore + 7)
  };

  const timesThreeHome = event => {
    setCount1(homeScore + 3)
  };

  const timesThreeAway = event => {
    setCount2(awayScore + 3)
  };

  // console.log(count);
  // console.log(setCount);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {timesSevenHome}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {timesThreeHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {timesSevenAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {timesThreeAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
