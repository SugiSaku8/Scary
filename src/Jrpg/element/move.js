export default class move {
  constructor(player_dom, game_container_dom, KeyEvent) {
    this.player = player_dom;
    this.gameContainer = game_container_dom;
    this.w = KeyEvent.w;
    this.s = KeyEvent.s;
    this.a = KeyEvent.a;
    this.d = KeyEvent.d;
  }
  start(forbiddenAreas) {
    let playerX = 0;
    let playerY = 0;

    // キーボードの入力を監視
    document.addEventListener("keydown", function (event) {
      let nextPlayerX = playerX;
      let nextPlayerY = playerY;

      switch (event.key) {
        case this.w:
          nextPlayerY = playerY - 10;
          break;
        case this.s:
          nextPlayerY = playerY + 10;
          break;
        case this.d:
          nextPlayerX = playerX - 10;
          break;
        case this.a:
          nextPlayerX = playerX + 10;
          break;
      }

      if (nextPlayerX < 0) nextPlayerX = 0;
      if (nextPlayerX > gameContainer.offsetWidth - player.offsetWidth)
        nextPlayerX = gameContainer.offsetWidth - player.offsetWidth;
      if (nextPlayerY < 0) nextPlayerY = 0;
      if (nextPlayerY > gameContainer.offsetHeight - player.offsetHeight)
        nextPlayerY = gameContainer.offsetHeight - player.offsetHeight;
      for (let i = 0; i < forbiddenAreas.length; i++) {
        if (
          nextPlayerX < forbiddenAreas[i].x + forbiddenAreas[i].width &&
          nextPlayerX + player.offsetWidth > forbiddenAreas[i].x &&
          nextPlayerY < forbiddenAreas[i].y + forbiddenAreas[i].height &&
          nextPlayerY + player.offsetHeight > forbiddenAreas[i].y
        ) {
          return;
        }
      }

      playerX = nextPlayerX;
      playerY = nextPlayerY;
      player.style.left = playerX + "px";
      player.style.top = playerY + "px";
    });
  }
}
