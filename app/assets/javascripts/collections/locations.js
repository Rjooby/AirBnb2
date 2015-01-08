Air.Collections.Locations = Backbone.Collection.extend({
  url: "/api/locations",
  model: Air.Models.Location,

  getOrFetch: function (id) {
    var loc = Location.get(id);
    var locs = Air.locations;
    if (!loc) {
      loc = new Air.Models.Location({ id : id });
      loc.fetch({
        success: function () {
          locs.add(loc);
        }
      });
    } else {
      loc.fetch();
    }
    return loc;
  }

});
