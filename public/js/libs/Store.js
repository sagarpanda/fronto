define(['backbone'], function(Backbone){

	return Backbone.Collection.extend({

		model: Backbone.Model,

		total: 0, 	// total records

		totalPage: 0,

		currPage: 1,

		pageSize: 3, // no. of records per page

		queryParam: null,

		parse: function(response, options){
			this.total = response.total ? response.total : this.total;
			this.calcTotalPage();
			return response;
		},

		calcTotalPage: function(){
			var pages = Math.ceil(this.total/this.pageSize);
			if (pages > 0) {
				this.totalPage = pages;
			}else{
				this.totalPage = 0;
			};
		},

		fetchPage: function(page){
			var page = page || this.currPage;
			this.currPage = page;
			this.fetch({
				data: {page: page}
			});
		},

		nextPage: function(){
			var page = this.currPage + 1;
			if(page <= this.totalPage){
				this.fetchPage(page);
			}
		},

		prevPage: function(){
			var page = this.currPage - 1;
			if(page > 0){
				this.fetchPage(page);
			}
		},

		addFilter: function(){

		},

		removeFilter: function(){

		},

		clearFilter: function(){

		}
	});
});
