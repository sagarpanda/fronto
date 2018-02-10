const FormModel = Backbone.Model.extend({
  url: 'datas/form.php',

  defaults: {
    categories: [],
    fileTypes: []
  },

  parse: function(response) {
    //console.log(options);
    return response.items;
  }
});

export default FormModel;
