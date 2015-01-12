Air.Collections.Reviews = Backbone.Collection.extend({
  url: "/api/reviews",
  model: Air.Models.Review,

  getOrFetch: function (id) {
    var review = Air.reviews.get(id);
    var reviews = this;

    if (!review) {
      review = new Air.Models.Review({id : id});
      review.fetch({
        success: function () {
          reviews.add(review);
        }
      })
    } else {
      review.fetch();
    }
    return review;
  }

});
