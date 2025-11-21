import "./styles.css";
import Button from "../../../button";
import Start from "../../../start";

export default () =>
  /*html*/ `<div class="g-o wh jc"><div class="ti jc"><h1>游戏暂停</h1><h3></h3></div>${Button(
    "play",
    "➜",
    "",
    "点击继续",
    140
  )}${Start(
    90,
    "带开始"
  )}<div class="me jc"><h1></h1><h3></h3></div><div class="t jc">${Button(
    "main",
    "✕",
    "",
    "主菜单",
    80
  )}${Button("run", "↺", "", "重新运行", 80)}${Button(
    "next",
    "❯",
    "",
    "下一关",
    80
  )}</div></div>`;
