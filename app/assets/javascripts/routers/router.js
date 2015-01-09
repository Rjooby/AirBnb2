Air.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },


  routes: {
    "" : "locationsIndex",
    "locations/new" : "newLocation",
    "locations/:id" : "showLocation"
  },

  locationsIndex: function () {
    var view = new Air.Views.LocationsIndex({ collection : Air.locations });
    this._swapView(view);
  },

  newLocation: function () {
    var location = new Air.Models.Location();
    var view = new Air.Views.LocationForm({ collection: Air.locations, model: location })
    this._swapView(view);
  },

  showLocation: function (id) {
    var location = Air.locations.getOrFetch(id);
    console.log(location);
    var view = new Air.Views.LocationShow({ model : location});
    this._swapView(view);

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
