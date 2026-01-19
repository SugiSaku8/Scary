/* (C)Carnation Monolith Studio 2025 Scary Dom control script by sugisaku8 */
import { player_init } from "./player.js";
export class Dom {
  constructor() {
    this.start = document.getElementById("start");
    this.btn = {
      start: document.getElementById("newgame_click"),
      setting: document.getElementById("setting_btn_click"),
    };
    this.loading = document.getElementById("loading");
    this.game = document.getElementById("game");
    this.map = document.getElementById("map");
    this.clock = document.getElementById("clock");
    this.die = document.getElementById("die");
    this.clockImg = document.getElementById("clock_img");
    this.dieImg = document.getElementById("die_img");
    this.init();
  }
  init() {
    this.loading.style.display = "none";
    this.game.style.display = "none";
    this.btn.start.addEventListener("click", () => {
      this.load();
    });
    this.btn.setting.addEventListener("click", () => {
      this.OpenSetting();
    });
  }
  load() {
    this.start.style.display = "none";
    this.game.style.display = "block";
    this.map.style.display = "block";
    this.clock.style.display = "none";
    this.die.style.display = "none";
    this.loading.style.display = "none";
    player_init();
  }
  OpenSetting() {
    this.loading.style.display = "none";
    this.game.style.display = "none";
    this.clock.style.display = "none";
    this.die.style.display = "none";
    this.start.style.display = "none";
    //this.setting.style.display = "block";
  }
}
export const game = new Dom();
