define([], function(){

	return Mn.ItemView.extend({

		viewOptions: ['html'],

		html: '',

		initialize: function(options){
			this.mergeOptions(options, this.viewOptions);
			this.template = _.template(this.html);
		}
		
	});

});