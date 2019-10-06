const posting = require('./posting');
const following = require('./following');
const reading = require('./reading');
const wall = require('./wall');
const end = require('./end');

module.exports = (state) => ({
  posting: posting(state),
  following: following(state),
  reading: reading(state),
  wall: wall(state),
  end: end(state),
});