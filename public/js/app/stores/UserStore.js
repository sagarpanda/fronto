define(['libs/Store', 'app/models/UserModel'], function(Store, UserModel){

	return Store.extend({

		model: UserModel,

		initialize: function(options){
			_.extend(this, {queryParams:{}});
		},

		url: function(){
			return App.constants.url.user;
		},

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			this.calcTotalPage();
			return response.items;
		}
		
	});
});
