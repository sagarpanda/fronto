const LayoutView = Mn.View.extend({
  constructor: function() {
    if (this.events) {
      const reg = /^(\S*)\s+(\S*)/;
      for (const key in this.events) {
        const match = key.match(reg);
        if (match && match[1] === 'xclick') {
          this.events[`click ${match[2]}`] = '_xClickEventHandler';
        }
      }
    }
    Mn.View.prototype.constructor.apply(this, arguments);
  },

  _xClickEventHandler: function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.classList.contains('disabled')) {
      $(e.currentTarget).trigger('xclick');
    }
  }
});

export default LayoutView;
