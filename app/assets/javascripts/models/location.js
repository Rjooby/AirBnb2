Air.Models.Location = Backbone.Model.extend({
  urlRoot: "/api/locations",

  parse: function (response) {
    if (response.requests) {
      this.requests().set(response.requests);
      delete response.requests;
    }

    if (response.reviews) {
      this.reviews().set(response.reviews);
      delete response.reviews;
    }

    if (response.current) {
      this.current().set(response.current);
      delete response.current;
    }
    return response;
  },

  current: function () {
    if (!this._current) {
      this._current = new Air.Models.User();
    }
    return this._current;
  },

  requests: function () {
    if (!this._requests) {
      this._requests = new Air.Collections.Locations([], {location: this});
    }
    return this._requests;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new Air.Collections.Reviews();
    }
    return this._reviews;
  }

});
