export default {
  getKeypressHandler(store) {
    return function (event) {
      const key = event.key;
      switch (key) {
        case 'ArrowLeft':
          store.dispatch('leftPress');
          break;
        case 'ArrowRight':
          store.dispatch('rightPress');
          break;
        case 'Escape':
          store.dispatch('escPress');
          break;
      }
    };
  }
}