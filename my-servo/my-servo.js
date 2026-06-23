export function init(state) {
  state.angle = 0;
}

export function update({ angle }, state) {
  const arm = state.svg.getElementById("arm");
  if (!arm) return;

  state.angle = angle;
  arm.setAttribute("transform", `rotate(${state.angle} 60 60)`);
}
