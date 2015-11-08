define(['backbone'], function(Backbone){

	return Backbone.Collection.extend({

		model: Backbone.Model,

		total: 0, 	// total records

		currPage: 1,

		pageSize: 3, // no. of records per page

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			return response;
		},

		setCurrPage: function(page){
			this.currPage = page;
			this.fetch({
				data: {page: page}
			});
		}
	});
});
