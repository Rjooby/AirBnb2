window.Air = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    L.mapbox.accessToken = 'pk.eyJ1Ijoicmpvb2J5IiwiYSI6IjU1VlpHSncifQ.s94ec3J04a7nUvuB7GrlNQ';
    this.currentUser = new Air.Models.CurrentUser();
    this.currentUser.fetch();
    Air.locations = new Air.Collections.Locations();
    Air.locations.fetch();
    Air.users = new Air.Collections.Users();
    Air.users.fetch();
    Air.requests = new Air.Collections.Requests();
    Air.reviews = new Air.Collections.Reviews();
    Air.reviews.fetch();
    this.header = new Air.Views.Header({el : "#header"});
    Air.router = new Air.Routers.Router({ $rootEl : $('#content') });
    Backbone.history.start();

  }
};
