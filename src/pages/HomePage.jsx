import { Menu, Board } from "gumoku-component";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { value, setValue } = useMainContext();

  return (
    <div>
      <button onClick={() => setValue("Good Bye")} className="test">
        Test
      </button>
      <p>
        This is sent from a provider:{" "}
        <span style={{ fontSize: "30px" }}>{value}</span>
      </p>

      <Board boardTiles={80}>
        <Menu className="menuOverlay" />
      </Board>
    </div>
  );
}
