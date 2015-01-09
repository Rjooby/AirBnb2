Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render)
  },

  template: JST['locations/index'],

  render: function () {
    var content = this.template({ locations : this.collection });
    this.$el.html(content);
    return this;
  }

});
