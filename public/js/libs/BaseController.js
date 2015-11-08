define(['marionette'], function(){

    var layout = null;

    return Mn.Object.extend({

        layout: null,

        initialize: function(options){
            //console.log(options);
        },

        renderLayout: function(LayoutView, region){
            if (layout instanceof LayoutView) {
                return layout;
            }else{
                layout = new LayoutView();
            };
            this.layout = layout;
            region.show(layout);
            return layout;
        }

    });
    
});