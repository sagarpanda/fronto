define(['marionette'], function(){

    return Mn.Object.extend({

        layout: null,

        initialize: function(options){
            //console.log(options);
        },

        renderLayout: function(LayoutView, region){
            var layout = null;
            if (this.layout instanceof LayoutView) {
                return this.layout;
            }else{
                layout = new LayoutView();
            };
            region.show(layout);
            this.layout = layout;
            return layout;
        }

    });
    
});