Air.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.locations) {
      this.locations().set(response.locations);
      delete response.latest_entries;
    }
    return response;
  },

  locations: function () {
    if (!this._locations) {
      this._locations = new Air.Collections.Locations([], {user: this});
    }
    return this._locations;
  }

});
