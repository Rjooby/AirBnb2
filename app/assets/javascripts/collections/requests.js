Air.Collections.Requests = Backbone.Collection.extend({
  url: "/api/requests",
  model: Air.Models.Request,

  getOrFetch: function (id) {
    var request = Air.requests.get(id);
    var requests = Air.requests;
    if (!request) {
      request = new Air.Models.Request({ id : id });
      request = new Air.Models.User({ id : id });
      request.fetch({
        success: function () {
          requests.add(request);
        }
      });
    } else {
      request.fetch();
    }
    return request;
  }

});
