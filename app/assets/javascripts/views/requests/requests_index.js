Air.Views.RequestsIndex = Backbone.View.extend({

  template: JST['requests/index'],

  events: {
    "click .approve" : "approveRequest",
    "click button.deny" : "denyRequest"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add sync", this.render)
  },

  approveRequest: function (request) {
    event.preventDefault();
    $target = $(event.currentTarget);
    var request = this.collection.get($target.attr("data-id"));
    console.log($target);
    var that = this;
    request.save({status: "APPROVED"}, {
      success: function() {
        that.collection.add(request, {merge: true});
      }
    })
  },

  render: function () {
    var content = this.template({ location : this.model});
    this.$el.html(content);
    return this;
  }

});
