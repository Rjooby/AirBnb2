Air.Collections.SearchResults = Backbone.Collection.extend({

  url: "api/search",

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new Air.Models.Location(attrs);
  },

  parse: function(resp) {
    this._page = resp._page;

    return resp.results;
  }
})
