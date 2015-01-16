Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  template: JST['locations/index'],

  events: {
    "submit" : "search"
  },

  render: function () {
    console.log('rendering');
    var content = this.template({ locations : this.collection });
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event.preventDefault();
    console.log(yuo);
    var info = $(event.currentTarget).serializeJSON();
    console.log(info);
  }

});
