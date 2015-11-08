define(['libs/Store', 'app/models/UserModel'], function(Store, UserModel){

	return Store.extend({

		model: UserModel,

		url: function(){
			return App.constants.url.user;
		},

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			return response.items;
		}
		
	});
});
