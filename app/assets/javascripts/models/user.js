Air.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.locations) {
      this.locations().set(response.locations);
      delete response.locations;
    }

    if (response.booking_requests) {
      this.booking_requests().set(response.booking_requests);
      delete response.booking_requests;
    }

    return response;
  },

  locations: function () {
    if (!this._locations) {
      this._locations = new Air.Collections.Locations();
    }
    return this._locations;
  },

  booking_requests: function () {
    if (!this._booking_requests) {
      this._booking_requests = new Air.Collections.Requests();
    }
    return this._booking_requests
  }

});
