export function player_init() {
  const icon = document.getElementById("skinContainer");
  const map = document.getElementById("map"); // ← マップ要素
  const speed = 5;

  let xs = 0;
  let ys = 0;

  const keysPressed = {};
  let isAnimating = false;
  let requestID;

  const iconW = icon.offsetWidth;
  const iconH = icon.offsetHeight;

  document.addEventListener("keydown", function (e) {
    keysPressed[e.key] = true;
    if (!isAnimating) animateIcon();
  });

  document.addEventListener("keyup", function (e) {
    delete keysPressed[e.key];
    if (Object.keys(keysPressed).length === 0 && isAnimating) {
      cancelAnimationFrame(requestID);
      isAnimating = false;
    }
  });

  function animateIcon() {
    isAnimating = true;
    updatePosition();
    requestID = requestAnimationFrame(animateIcon);
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function updatePosition() {
    let dx = 0;
    let dy = 0;
    if (keysPressed["w"]) dy -= speed;
    if (keysPressed["s"]) dy += speed;
    if (keysPressed["a"]) dx -= speed;
    if (keysPressed["d"]) dx += speed;

    xs += dx;
    ys += dy;

    const maxX = map.clientWidth - iconW;
    const maxY = map.clientHeight - iconH;

    xs = clamp(xs, 0, maxX);
    ys = clamp(ys, 0, maxY);

    icon.style.transform = `translate(${xs}px, ${ys}px)`;
  }

  // 外部ボタン用
  function MOVE(movexy) {
    let dx = 0;
    let dy = 0;
    if (movexy === "TOP") dy -= speed;
    if (movexy === "BACK") dy += speed;
    if (movexy === "LEFT") dx -= speed;
    if (movexy === "RIGHT") dx += speed;

    xs += dx;
    ys += dy;

    const maxX = map.clientWidth - iconW;
    const maxY = map.clientHeight - iconH;

    xs = clamp(xs, 0, maxX);
    ys = clamp(ys, 0, maxY);

    icon.style.transform = `translate(${xs}px, ${ys}px)`;
  }

  window.MOVE = MOVE; // 外から呼べるように
}