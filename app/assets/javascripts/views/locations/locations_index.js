Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  template: JST['locations/index'],

  render: function () {
    console.log('rendering');
    var content = this.template({ locations : this.collection });
    this.$el.html(content);
    return this;
  }

});
