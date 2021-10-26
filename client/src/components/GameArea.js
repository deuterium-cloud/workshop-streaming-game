import GameInputs from "./GameInputs"
import GameField from "./GameField"

const GameArea = (props) => {

  const playerName = props.playerName
  const playerID = props.playerID
  const playerMap = props.playerMap
  const playerX = props.playerX
  const setPlayerX = props.setPlayerX
  const playerY = props.playerY
  const setPlayerY = props.setPlayerY
  const boardWidth = props.boardWidth
  const boardHeight = props.boardHeight
  const handleKeyDown = props.handleKeyDown
  const lastSent = props.lastSent
  const lastReceived = props.lastReceived
  const setPlayerH = props.setPlayerH

  return (
    <div>
      <div className="container" onKeyDown={handleKeyDown} tabIndex="0">
        <div className="sidebar">
          <GameInputs
            playerName={playerName}
            playerID={playerID}
            playerX={playerX}
            setPlayerX={setPlayerX}
            playerY={playerY}
            setPlayerY={setPlayerY}
            setPlayerH={setPlayerH}
          />
        </div>
        <div className="content">
          <GameField
            playerMap={playerMap}
            playerID={playerID}
            boardWidth={boardWidth}
            boardHeight={boardHeight}
          />
        </div>
      </div>
      <div className="statusbar">
        <p>Last sent: <code className="game-message">
          {lastSent}
        </code></p>
        <p>Last received: <code className="game-message">
          {lastReceived}
        </code></p>
      </div>
    </div>
  );

}

export default GameArea;
