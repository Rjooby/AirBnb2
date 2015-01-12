Air.Views.LocationShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .submit-request" : "requestLocation"
  },

  template: JST['locations/show'],

  render: function () {
    var content = this.template({ location: this.model });
    this.$el.html(content);
    return this;
  },

  requestLocation: function (event) {
    event.preventDefault();
    var request = new Air.Models.Request();
    var attrs = this.$el.find("form.request").serializeJSON();
    var that = this;


    request.save(attrs.request, {
      success: function () {
        that.collection.add(request, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });

  }

});
