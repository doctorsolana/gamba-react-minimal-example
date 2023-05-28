import React from "react";
import "./App.css";
import { solToLamports, lamportsToSol } from "gamba";
import { Gamba, useGamba } from "gamba/react";
import { GambaModalButton, GambaUi } from "gamba-react-ui";

function Game() {
  const gamba = useGamba();
  return (
    <div className="game-container">
      <div className="button-container">
        <GambaModalButton />
      </div>
      <div className="button-container">
        <button onClick={() => gamba.play([0, 2], solToLamports(0.01))}>
          Play
        </button>
      </div>
      <div className="button-container">
        <button onClick={() => gamba.withdraw()}>
          {lamportsToSol(gamba.user?.balance)} Claim
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Gamba
      creator="your-solana-address-here"
      connection={{
        endpoint:
          "your-rpc-here",
      }}
    >
      <GambaUi>
        <Game />
      </GambaUi>
    </Gamba>
  );
}

export default App;
