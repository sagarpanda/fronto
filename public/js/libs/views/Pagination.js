define(['marionette'], function(Mn){

	return Mn.ItemView.extend({

		tagName: 'ul',

		className: 'pagination grid-pagination',

		events: {
			'click li': 'onClickHandler'
		},

		ui: {
			listUi: 'li'
		},

		collectionEvents: {
			'sync' : 'render'
		},
  		
		initialize: function(){
			this.collection = this.options.collection;
		},

		onClickHandler: function(e){
			var target = e.currentTarget || e.srcElement;
			var val = target.getAttribute('data-val');

			if (val === 'prev') {
				val = this.collection.currPage - 1;
				if(val > 0){
					this.collection.setCurrPage(val);
				}
			}else if(val === 'next'){
				val = this.collection.currPage + 1;
				if(val <= this.totalPage){
					this.collection.setCurrPage(val);
				}
			}else{
				val = parseInt(val, 10);
				this.collection.setCurrPage(val);
			};
		},

		template: function(store){
			var tpl = '<% if(pages.length > 0){%><li data-val="prev"><a><span aria-hidden="true">«</span></a></li>\
				<% _.each(pages, function(count){ %>\
				<li <% if(count === currPage){ %> class="active" <%} %> data-val="<%= count %>"><a><%= count %></a></li>\
				<% }); %>\
				<li data-val="next"><a><span aria-hidden="true">»</span></a></li><% } %>';
			return _.template(tpl)(store);
		},

		templateHelpers: function(){
			var pages = Math.ceil(this.collection.total/this.collection.pageSize);
			if (pages > 0) {
				this.totalPage = pages;
				return { pages: _.range(1, pages+1), currPage: this.collection.currPage };
			};
			return {pages: []};
		}

	});
});