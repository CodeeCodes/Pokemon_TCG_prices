import SET_LIST from "./set_call";
import CARD_LIST from "./get_r_cards";
import "../styles/App.css";

export default function MainContent() {
  return (
    <div className="main_content">
      {/* <SET_LIST /> */}
      <CARD_LIST />
    </div>
  );
}
