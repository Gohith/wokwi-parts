export function init(state) {
  state.angle = 0;
}

export function update({ angle }, state) {
  state.angle = angle;

  const arm = state.svg.getElementById("arm");
  arm.setAttribute(
    "transform",
    `rotate(${state.angle} 60 60)`
  );
}
