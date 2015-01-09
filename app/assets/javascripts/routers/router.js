Air.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },


  routes: {
    "" : "locationsIndex"
  },

  locationsIndex: function () {
    console.log(new Air.Views.LocationsIndex());
    var view = new Air.Views.LocationsIndex({ collection : Air.locations });
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
