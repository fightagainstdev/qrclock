import "./styles.css";
import { $, eventButton, setHtml, shareLink } from "../../utils/helpers";
import { CONTAINER } from "../../utils/constants";
import { setColor, showSelecedColor } from "../theme/helpers";
import Button from "../button";
import Logo from "../logo";
import Screen, { Params, Screens } from "../../Screen";
import Theme from "../theme";

const Lobby = () => {
  const render = /*html*/ `<div class="lb wh jc">${Logo()}<div class="lb-b"><div class="lb-s jc">${[
    ["progress", "✩", "进展"],
    ["infinite", "∞", "无穷模式"],
  ]
    .map((v) => Button(v[0], v[1], "lb-bu", v[2], 130))
    .join(
      ""
    )}</div>${Theme()}<div class="lb-o jc"><a href="https://bio.link/jorgerub" target="_blank" class="btn bor jc">☻</a>${[
    ["sh", "⛓"],
  ]
    .map((v) => Button(v[0], v[1], "", "", 60))
    .join(
      ""
    )}</div><a href="https://github.com/fightagainstdev" target="_blank" class="lb-l jc">由LUMIN团队制作</a></div></div>`;

  setHtml($(`#${CONTAINER}`), render);

  // Establecer el tema seleccionado...
  showSelecedColor();

  eventButton((action) => {
    if (["infinite", "progress"].includes(action)) {
      let screen: Screens = "Progress";
      let data: Params = {};

      if (action === "infinite") {
        screen = "Game";
        data = { f: true };
      }

      Screen(screen, data);
    }

    if (action === "sh") {
      shareLink({
        title: "🕗 时钟指向",
        text: "玩时钟指向",
        url: window.location.href,
      });
    }

    if (action.includes("col-")) {
      setColor(+action.split("-")[1]);
    }
  });
};

export default Lobby;
