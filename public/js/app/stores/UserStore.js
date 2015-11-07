define(['backbone', 'app/models/UserModel'], function(Backbone, UserModel){

	return Backbone.Collection.extend({

		model: UserModel,

		total: 0,

		url: 'datas/user.json',

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			return response.items;
		}
	});
});