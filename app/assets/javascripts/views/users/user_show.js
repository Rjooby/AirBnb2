Air.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  initialize: function () {
    this.listenTo( this.model, "sync", this.render);
  },

  render: function () {
    console.log(this.model);
    console.log(this.model.locations());
    var content = this.template({ user : this.model });
    console.log(content);
    this.$el.html(content);
    return this;
  }

});
