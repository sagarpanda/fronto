define(['backbone'], function(Backbone){

	return Backbone.Collection.extend({

		model: Backbone.Model,

		total: 0, 	// total records

		totalPages: 0, // no. of pages

		currPage: 1,

		pageSize: 3, // no. of records per page

		queryParams: {},

		apiFilter: [],

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			this.calcTotalPage();
			return response;
		},

		calcTotalPage: function(){
			var pages = Math.ceil(this.total/this.pageSize);
			if (pages > 0) {
				this.totalPages = pages;
			}else{
				this.totalPages = 0;
			};
		},

		fetchPage: function(page, options){
			var page = page,
				options = options;
			if (isNaN(page) && typeof page === 'object') {
				options = page;
				page = 0;
			}
			var tempQuery = {};
			if (options && typeof options === 'object') {
				_.extend(this.queryParams, options);
			};
			_.extend(tempQuery, this.queryParams, {page:page});
			this.currPage = page;
			this.fetch({ data: tempQuery });
		},

		nextPage: function(){
			var page = this.currPage + 1;
			if(page <= this.totalPages){
				this.fetchPage(page);
			}
		},

		prevPage: function(){
			var page = this.currPage - 1;
			if(page > 0){
				this.fetchPage(page);
			}
		},

		defaultFilterProp: {
			"string": { "type":"string", "value":"" },
			"number": { "type":"number", "match":false, "greater":false, "less":false }
		},

		addFilter: function(dataIndex, prop){
			
		},

		removeFilter: function(){

		},

		clearFilter: function(){

		}
	});
});
