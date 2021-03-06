Air.Views.Landing = Backbone.View.extend({

  id: "landing-container",

  initialize: function () {

  },

  template: JST["shared/landing"],

  events: {
    "submit" : "search"
  },

  render: function () {
    var content = this.template;
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event && event.preventDefault();
    var callback = this.search.bind(this);
    if (!Air.router._requireSignedIn(callback)){ return; }

    this.collection._query = this.$(".query").val();
    var that = this;
    this.collection.fetch({
      data: {
        query: this.collection._query,
        success: function () {
          var i_view = new Air.Views.LocationsIndex({ className: 'main group', collection : that.collection });
          Air.router._swapView(i_view);
          Backbone.history.navigate("/locations");
        }
      }
    })
  }


})
