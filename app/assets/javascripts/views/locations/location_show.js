Air.Views.LocationShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST['locations/show'],

  render: function () {
    var content = this.template({ location: this.model });
    this.$el.html(content);
    return this;
  }

});
