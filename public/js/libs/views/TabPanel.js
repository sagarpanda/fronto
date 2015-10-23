define(['libs/behaviors/AddMnItems'], function(AddMnItems){

	return Mn.LayoutView.extend({

		items: [],

		//activeIndex: undefined,

		viewOptions: ['items'],

		initialize: function(options){
			this.mergeOptions(options, this.viewOptions);
			this.listenTo(this, "setActiveIndex", this.setActiveIndex);
			this.listenTo(this, "change", this.onChange);
		},

		regions: {
			body: '.panel-body'
		},

		events: {
			'click ul.nav li': 'onChangeActive'
		},

		ui: {
			tabs: 'li.tab'
		},

		template: function(sModel){
			var tpl = '\
		        <ul class="nav nav-tabs" role="tablist">\
		        	<% _.each(tabs, function(tab, indx) { %>\
		            <li role="presentation" data-id="<%= indx %>" class="tab <% if (tab.active) { %>active<% } %>" >\
		            	<a href="./" role="tab" data-toggle="tab"><%= tab.title %></a>\
		            </li>\
		            <% }); %>\
		        </ul>\
		        <div class="tab-content"></div>';

		    return _.template(tpl)(sModel)
		},

		templateHelpers: function(){
			var temp = null;
			var json = _.map(this.items, function(item){ 
				return _.pick(item, 'title', 'active');
			});
			return {tabs: json};
		},

		onDestroy: function(){
			if (this.childView) {
				//console.log('destroy');
			};
		},

		setActiveIndex: function(newIndex){
			var oldIndex = this.activeIndex;
			this.activeIndex = newIndex;
			this.trigger('change', newIndex, oldIndex);
		},

		onChangeActive: function(e){
			e.preventDefault();
			var index = e.currentTarget.getAttribute('data-id');
			index = parseInt(index, 10);
			this.setActiveIndex(index);
		},

		onChange: function(newIndex, oldIndex){
			this.ui.tabs.eq(newIndex).addClass('active');
			this.ui.tabs.eq(oldIndex).removeClass('active');
			this.items[newIndex].region.$el.addClass('active');
			if (oldIndex !== undefined)
			this.items[oldIndex].region.$el.removeClass('active');
		},

 		behaviors: {
 			appendView: {
 				behaviorClass: AddMnItems,
 				uiSelector: '.tab-content',
 				itemsKey : 'items',
 				className: 'tab-pane'
 			}
 		}

	});

});