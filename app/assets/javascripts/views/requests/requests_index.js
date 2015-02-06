Air.Views.RequestsIndex = Backbone.View.extend({

  template: JST['requests/index'],

  events: {
    "click button.approve" : "approveRequest",
    "click button.deny" : "denyRequest"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add sync", this.render);
    this.listenTo(this.model.requests(), "add sync", this.render);
  },

  approveRequest: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var request = this.collection.getOrFetch($target.attr("data-id"));
    console.log(request);
    var that = this;
    request.save({status: "APPROVED"}, {
      success: function() {
        that.collection.add(request, {merge: true});
        that.model.fetch();
      }
    })
  },

  denyRequest: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var request = this.collection.getOrFetch($target.attr("data-id"));
    var that = this;
    request.save({status: "DENIED"}, {
      success: function() {
        that.collection.add(request, {merge: true});
        that.model.requests().add(request, {merge: true});
      }
    })
  },

  render: function () {
    var content = this.template({ location : this.model});
    this.$el.html(content);
    return this;
  }

});
