export function player_init() {
  const icon = document.getElementById("skinContainer");
  const map = document.getElementById("map");
  const speed = 5;

  // transform座標系に統一
  let xs = 0;
  let ys = 0;

  icon.style.left = "0px";
  icon.style.top = "0px";
  icon.style.transform = "translate(0px, 0px)";

  const keysPressed = {};
  let isAnimating = false;
  let requestID;

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  document.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
    if (!isAnimating) animateIcon();
  });

  document.addEventListener("keyup", (e) => {
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

  function updatePosition() {
    let dx = 0;
    let dy = 0;
    if (keysPressed["w"]) dy -= speed;
    if (keysPressed["s"]) dy += speed;
    if (keysPressed["a"]) dx -= speed;
    if (keysPressed["d"]) dx += speed;

    xs += dx;
    ys += dy;

    const maxX = map.clientWidth - icon.offsetWidth;
    const maxY = map.clientHeight - icon.offsetHeight;

    xs = clamp(xs, 0, maxX);
    ys = clamp(ys, 0, maxY);

    icon.style.transform = `translate(${xs}px, ${ys}px)`;
  }

  window.MOVE = function (movexy) {
    let dx = 0;
    let dy = 0;
    if (movexy === "TOP") dy -= speed;
    if (movexy === "BACK") dy += speed;
    if (movexy === "LEFT") dx -= speed;
    if (movexy === "RIGHT") dx += speed;

    xs += dx;
    ys += dy;

    const maxX = map.clientWidth - icon.offsetWidth;
    const maxY = map.clientHeight - icon.offsetHeight;

    xs = clamp(xs, 0, maxX);
    ys = clamp(ys, 0, maxY);

    icon.style.transform = `translate(${xs}px, ${ys}px)`;
  };
}
