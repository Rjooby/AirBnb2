Air.Views.RequestsIndex = Backbone.View.extend({

  template: JST['requests/index'],

  render: function () {
    console.log(this.model);
    var content = this.template({ location : this.model});
    this.$el.html(content);
    return this;
  }

});
