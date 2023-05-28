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
      creator="5Wu7wbvCXYHrER7tnTyV3SzzMyoDaJoyRNFQVms3kvvg"
      connection={{
        endpoint:
          "https://rpc.helius.xyz/?api-key=d1b8ca10-0ab9-4f59-9568-18a686943a7f",
      }}
    >
      <GambaUi>
        <Game />
      </GambaUi>
    </Gamba>
  );
}

export default App;
