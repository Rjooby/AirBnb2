Air.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "" : "locationsIndex",
    "locations/new" : "newLocation",
    "locations/:id" : "showLocation",
    "users/:id" : "showUser",
    "locations/:id/requests" : "requestsIndex",
    "locations/:id/edit" : "editLocation"
  },

  editLocation: function (id) {
    var location = Air.locations.getOrFetch(id);
    var view = new Air.Views.LocationForm({model: location, collection: Air.locations});
    this._swapView(view);
  },

  locationsIndex: function () {
    var view = new Air.Views.LocationsIndex({ collection : Air.locations });
    this._swapView(view);
  },

  newLocation: function () {
    var location = new Air.Models.Location();
    var view = new Air.Views.LocationForm({ collection: Air.locations, model: location });
    this._swapView(view);
  },

  showLocation: function (id) {
    var location = Air.locations.getOrFetch(id);
    var view = new Air.Views.LocationShow({ model : location, collection : Air.requests});
    this._swapView(view);
  },

  showUser: function (id) {
    var user = Air.users.getOrFetch(id);
    var view = new Air.Views.UserShow({ model : user, collection : Air.users });
    this._swapView(view);
  },

  requestsIndex: function (id) {
    var location = Air.locations.getOrFetch(id);
    var view = new Air.Views.RequestsIndex({ model : location, collection : Air.requests });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
