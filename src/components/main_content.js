import SINGLE_CARD from "./get_s_card";
import SEARCH from "./search";
import "../styles/App.css";

export default function MainContent() {
  return <div className="main_content">{<SEARCH />}</div>;
}
