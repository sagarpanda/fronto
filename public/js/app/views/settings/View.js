define([
	'libs/behaviors/AddMnItems', 
	'libs/views/Panel', 
	'libs/views/HtmlView', 
	'libs/views/TabPanel'
	], function(AddMnItems, Panel, HtmlView, TabPanel){

	return Mn.LayoutView.extend({

		className: 'settings',

		template: false,


 		behaviors: {
 			appendView: {
 				behaviorClass: AddMnItems,
 				uiSelector: 'el'
 			}
 		},

 		items: [
 			{
 				xclass: HtmlView,
 				tagName: 'h1',
 				html: 'Settings',
 				className: 'page-header page-header-crm'
 			},{
 				xclass: HtmlView,
 				html: 'text goes here...'
 			}
 		]

	});

});