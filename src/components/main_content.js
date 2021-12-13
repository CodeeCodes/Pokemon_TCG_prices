import SET_LIST from "./set_call";
import CARD_LIST from "./get_r_cards";
import SINGLE_CARD from "./get_s_card";
import "../styles/App.css";

export default function MainContent() {
  return (
    <div className="main_content">
      {/* <CARD_LIST /> */}
      {/* <SET_LIST /> */}
      {<SINGLE_CARD />}
    </div>
  );
}
