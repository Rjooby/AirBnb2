Air.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "" : "locationsIndex",
    "locations/new" : "newLocation",
    "locations/:id" : "showLocation",
    "locations/:id/requests" : "requestsIndex",
    "locations/:id/edit" : "editLocation",
    "users/new" : "newUser",
    "users/:id" : "showUser",
    "session/new" : "signIn",
    "search" : "search"
  },

  // ------Location

  editLocation: function (id) {
    var location = Air.locations.getOrFetch(id);
    var view = new Air.Views.LocationForm({model: location, collection: Air.locations});
    this._swapView(view);
  },

  locationsIndex: function () {
    Air.locations.fetch();
    var view = new Air.Views.LocationsIndex({ className: 'main group', collection : Air.locations });
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

  // ------Users

  newUser: function () {
    if (!this._requireSignedOut()) { return ;}

    var model = new Air.users.model();
    var view = new Air.Views.UsersForm({ collection : Air.users, model : model});
    this._swapView(view);
  },

  showUser: function (id) {
    var user = Air.users.getOrFetch(id);
    var view = new Air.Views.UserShow({ model : user, collection : Air.users });
    this._swapView(view);
  },

  signIn: function (callback) {
    if (!this._requireSignedOut(callback)) { return; }

    var view = new Air.Views.SignIn({
      callback : callback
    });
    this._swapView(view);
  },

  _requireSignedOut: function(callback){
    if (Air.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }
    return true;
  },

  _goHome: function () {
    Backbone.history.navigate("", { trigger: true });
  },

  requestsIndex: function (id) {
    var location = Air.locations.getOrFetch(id);
    var view = new Air.Views.RequestsIndex({ model : location, collection : Air.requests });
    this._swapView(view);
  },

  search: function () {
    var searchView = new Air.Views.Search();
    this._swapView(searchView);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
