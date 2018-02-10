const HtmlView = Mn.View.extend({
  viewOptions: ['html'],

  html: '',

  constructor: function(options) {
    this.mergeOptions(options, this.viewOptions);
    this.template = _.template(this.html);
    Mn.View.prototype.constructor.apply(this, arguments);
  }
});

export default HtmlView;
