import "./styles.css";
import { Clock } from "../game/components";

export default () =>
  /*html*/ `<div class="logo"><span>时钟</span>${Clock([
    137, 10,
  ])}<span id="l2">指向</span></div>`;
