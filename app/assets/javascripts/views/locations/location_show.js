Air.Views.LocationShow = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "sync", this.render),
    this.listenTo(this.model.reviews(), "add remove", this.render)
    // this.listenTo(this.model, "sync", this.renderMap)
  },

  events: {
    "submit location-request" : "requestLocation",
    "click .submit-review-form" : "addReview",
    "click .delete-review" : "deleteReview"
  },

  template: JST['locations/show'],

  render: function () {
    console.log('rendering');
    var content = this.template({ location: this.model });
    this.$el.html(content);
    return this;
  },

  renderMap: function () {
    var map = L.mapbox.map('map-show', 'rjooby.kodi76mc');
    console.log(this.model);
    map.setView([this.model.escape("latitude"), this.model.escape("longitude")], 13);

    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
        this.model.escape("longitude"),
        this.model.escape("latitude")
        ]
      },
      properties: {
        title: 'this.model.escape("name")',
        description: 'this.model.escape("description")',
        'marker-size': 'large',
        'marker-color': '#00A1D6',
        'marker-symbol': 'campsite'
      }
    }).addTo(map);


  },

  requestLocation: function (event) {
    event.preventDefault();
    var request = new Air.Models.Request();
    var attrs = this.$el.find("form.request").serializeJSON();
    console.log(attrs);
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
        Air.reviews.add(review, {merge: true});
        that.model.reviews().add(review, {merge: true});
      }
    });
  },

  deleteReview: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    console.log($target);
    var review = Air.reviews.get($target.attr("data-id"));
    console.log($target.attr("data-id"));
    console.log(review);
    review.destroy();
  }

});
