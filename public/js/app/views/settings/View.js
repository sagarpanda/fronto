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
 				xclass: TabPanel,
 				items: [
 					{
 						title: 'User Management',
 						active: true,
 						html: 'Description 1'
 					}, {
 						title: 'Roll/Access Management',
 						html: 'Description 2'
 					}, {
 						title: 'Content Management',
 						html: 'Description 3'
 					}
 				]
 			}
 		]

	});

});