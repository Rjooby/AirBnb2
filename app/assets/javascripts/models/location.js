Air.Models.Location = Backbone.Model.extend({
  urlRoot: "/api/locations",

  parse: function (response) {
    if (response.requests) {
      this.requests().set(response.requests);
      delete response.requests;
    }
    return response;
  },

  requests: function () {
    if (!this._requests) {
      this._requests = new Air.Collections.Locations([], {location: this});
    }
    return this._requests;
  }

});
