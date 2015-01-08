window.Air = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Air.locations = new Air.Collections.Locations();
    Air.locations.fetch();
    new Air.Routers.Router({ $rootEl : $('#content') });
    Backbone.history.start();

  }
};

// $(document).ready(function(){
//   Air.initialize();
// });
