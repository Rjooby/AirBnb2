Air.Views.LocationsIndex = Backbone.View.extend({

  template: JST['locations/index'],

  render: function () {
    var content = this.template({ locations : Air.locations });
    this.$el.html(content);
    return this;
  }

});
