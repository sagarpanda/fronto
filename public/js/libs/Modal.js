define(['bootstrap'], function(){

	var Modal = Mn.LayoutView.extend({

		regions: {
			modalBody: '.modal-body'
		},

		ui: {
			modal: '.modal',
			title: '.modal-title',
			dialog: '.modal-dialog'
		},

		template: function(){
			var tpl = '\
			    <div class="modal fade" tabindex="-1" role="dialog">\
			      <div class="modal-dialog">\
			        <div class="modal-content">\
			          <div class="modal-header">\
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
			            <h4 class="modal-title">Modal title</h4>\
			          </div>\
			          <div class="modal-body">\
			            <p>One fine body&hellip;</p>\
			          </div>\
			          <div class="modal-footer">\
			            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
			            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->\
			          </div>\
			        </div><!-- /.modal-content -->\
			      </div><!-- /.modal-dialog -->\
			    </div><!-- /.modal -->';

			return _.template(tpl);
		},

		/*templateHelpers: function(){
			var self = this;
			return {title: self.title}
		},*/

		onShow: function(){
			
		},

		onDestroy: function(){
			
		},

	});

	function fn(region, configs){

		var modal = new Modal();
		region.show(modal);

		modal.ui.modal.on('hidden.bs.modal', function(){
			modal.ui.title.html('');
			modal.ui.dialog.removeClass('modal-lg');
			modal.ui.dialog.removeClass('modal-sm');
			modal.modalBody.currentView.destroy();
		});

		this.size = 'modal-lg';// modal-lg, modal-sm

		this.show = function(view, options){
			if (view) { 
				modal.modalBody.show(view);
				modal.ui.title.html(options.title);
			};
			if (this.size) {
				modal.ui.dialog.addClass(this.size);
			};
			modal.ui.modal.modal('show');
		};
	}
	fn.extend = Marionette.extend;

	return fn;
});