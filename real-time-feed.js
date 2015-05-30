exports = module.exports = {
  init: function (io) {
    this.io = io;
  },

  accept: function (socket) {
    console.log('got a connection');
  },

  send: function (topic) {
    this.io.emit('topic', topic);
  }
};
