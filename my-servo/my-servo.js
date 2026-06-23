export function init(state) {
  state.value = 0;
}

export function update(params, state) {
  state.value = params.value || 0;
}
