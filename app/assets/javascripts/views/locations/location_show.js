Air.Views.LocationShow = Backbone.View.extend({

  initialize: function () {
    console.log(this.model.current());
    this.listenTo(this.model, "sync", this.render),
    this.listenTo(this.model.reviews(), "add remove", this.render)
  },

  events: {
    "click .submit-request" : "requestLocation",
    "click .submit-review-form" : "addReview"
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

  },

  addReview: function (event) {
    event.preventDefault();
    var review = new Air.Models.Review();
    var attrs = this.$el.find("form.review").serializeJSON();
    var that = this;

    review.save(attrs.review, {
      success: function () {
        that.model.reviews().add(review, {merge: true});
      }
    });
  }

});
