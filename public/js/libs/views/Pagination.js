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
				this.collection.prevPage();
			}else if(val === 'next'){
				this.collection.nextPage();
			}else{
				val = parseInt(val, 10);
				this.collection.fetchPage(val);
			};
		},

		template: function(store){
			var tpl = '<% if(pages.length > 1){%><li data-val="prev"><a><span aria-hidden="true">«</span></a></li>\
				<% _.each(pages, function(count){ %>\
				<li <% if(count === currPage){ %> class="active" <%} %> data-val="<%= count %>"><a><%= count %></a></li>\
				<% }); %>\
				<li data-val="next"><a><span aria-hidden="true">»</span></a></li><% } %>';
			return _.template(tpl)(store);
		},

		templateHelpers: function(){
			var pages = this.collection.totalPage;
			if (pages > 0) {
				return { pages: _.range(1, pages+1), currPage: this.collection.currPage };
			};
			return {pages: []};
		}

	});
});