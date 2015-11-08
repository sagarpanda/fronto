define([], function(){

	return Mn.ItemView.extend({

		viewOptions: ['html'],

		html: '',

		constructor: function(options){
			this.mergeOptions(options, this.viewOptions);
			this.template = _.template(this.html);
			Mn.ItemView.prototype.constructor.apply(this, arguments);
		}
		
	});

});