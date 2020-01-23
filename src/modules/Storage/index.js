import {reactLocalStorage as LocalStorage} from 'reactjs-localstorage';

class Storage {
  /**
   * Get saved data
   * @param key
   * @param game
   * @return {object}
   */
   get(key = 'dot-game', game = null) {
    const swap = LocalStorage.getObject(key, {}, true);
    if (game && swap[game]) {
      return swap[game];
    }

    return swap;
  }

  /**
   * Add game to game saved list
   * @param game
   * @param key
   * @return {object}
   */
  add(game, key = 'dot-game') {
    const swap = this.get();
    const code = game.code ? game.code : new Date().getTime();
    swap[code] = ({...game, code});
    LocalStorage.setObject(key, swap, true);

    return swap;
  }

  /**
   * Clear all
   * @return {void}
   */
  clear() {
    LocalStorage.clear();
  }
}

export default Storage;
