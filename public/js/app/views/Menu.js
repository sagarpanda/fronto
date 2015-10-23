define(['text!templates/menu.tpl'], function(MenuTpl){

	return Mn.LayoutView.extend({

		className: 'container-fluid',

		ui: {
			home 	 : '.m_home',
			settings : '.m_settings',
		},

		template: _.template(MenuTpl),

		setActive: function(cls){
			if (this.ui[cls]) {
				if (this.activeEl) {
					this.removeActive();
				};
				this.ui[cls].addClass('active');
				this.activeEl = this.ui[cls];
			};
		},

		removeActive: function(){
			if (this.activeEl)
			this.activeEl.removeClass('active');
		}

	});

});