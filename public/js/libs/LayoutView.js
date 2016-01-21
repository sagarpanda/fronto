define([], function(){

	return Mn.LayoutView.extend({

		constructor: function(){
			if (this.events) {
				var reg = /^(\S*)\s+(\S*)/
				for(key in this.events){
					var match = key.match(reg);
					if (match && (match[1] === 'xclick')) {
						this.events['click ' + match[2]] = '_xClickEventHandler';
					};
				}
			};
			Mn.LayoutView.prototype.constructor.apply(this, arguments);
		},

		_xClickEventHandler: function(e){
			e.preventDefault();
			e.stopPropagation();
			if (!e.currentTarget.classList.contains('disabled')) {
				$(e.currentTarget).trigger('xclick');
			};
		}
	})
	
});