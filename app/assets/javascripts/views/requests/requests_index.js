Air.Views.RequestsIndex = Backbone.View.extend({

  template: JST['requests/index'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ location : this.model});
    this.$el.html(content);
    return this;
  }

});
