import { Chessboard } from "react-chessboard";
const Board = () => {
  const styles = {
    board: {
      width: "100px",

      margin: "auto",
    },
  };

  return (
    <div>
      <Chessboard style={styles.board} position={"start"} />;
    </div>
  );
};
export default Board;
