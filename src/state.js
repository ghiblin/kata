class StateManager {
  constructor() {
    this._state = {};
  }

  get state() {
    // copy state
    return {...this._state};
  }

  /**
   * Publish message to a personal timeline
   * @param {string} username 
   * @param {string} msg 
   */
  postMessage(username, msg) {
    // check inputs
    if (!username || !msg) return;
    username = username.toLowerCase().trim();
    msg = msg.trim();

    const info = this._state[username] || {};

    // update state
    this._state = {
      ...this._state,
      [username]: {
        ...info,
        messages: [
          {
            text: msg,
            date: new Date(),
          },
          ...(info.messages || []),
        ]
      }
    };
  }

  /**
   * Follow user
   * @param {string} follower 
   * @param {string} following 
   */
  follows(follower, following) {
    // check inputs
    if (!follower || !following) return;

    follower = follower.toLowerCase().trim();
    following = following.toLowerCase().trim();
    const info = this._state[follower] || {};

    // update state
    this._state = {
      ...this._state,
      [follower]: {
        ...info,
        followings: [
          ...(info.followings || []),
          following,
        ],
      },
    };
  }

  /**
   * Read a personal timeline
   * @param {string} username 
   */
  read(username) {
    if (!username) return [];

    username = username.toLowerCase().trim();

    return (this._state[username] || {}).messages || []; 
  }

  /**
   * Read personal timeline and personal timeline of all following
   * @param {string} username 
   */
  getWall(username) {
    if (!username) return [];

    username = username.toLowerCase().trim();

    return [username, ...((this._state[username] || {}).followings || [])]
      .reduce((acc, user) => acc.concat(
        (this._state[user].messages || []).map(msg => ({ ...msg, user }))
      ), [])
      .sort((a, b) => a.date < b.date ? 1 : -1);
  }
}

const state = new StateManager();

module.exports = state;