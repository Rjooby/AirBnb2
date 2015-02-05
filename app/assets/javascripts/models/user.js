Air.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.locations) {
      this.locations().set(response.locations);
      delete response.locations;
    }

    if (response.booking_requests) {
      this.booking_requests().set(response.booking_requests);
      delete response.booking_requests;
    }

    return response;
  },

  locations: function () {
    if (!this._locations) {
      this._locations = new Air.Collections.Locations();
    }
    return this._locations;
  },

  booking_requests: function () {
    if (!this._booking_requests) {
      this._booking_requests = new Air.Collections.Requests();
    }
    return this._booking_requests
  },

  toJSON: function () {
    var json = {user: _.clone(this.attributes)};

    if (this._image) {
      json.user.avatar = this._image;
    }
    return json;
  }

});

Air.Models.CurrentUser = Air.Models.User.extend({

  url: "/api/session",

  initialize: function(options) {
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  signIn: function(options){
    var model = this;
    var credentials = {
      "user[username]": options.username,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function (data){
        model.set(data);
        options.success && options.success();
      },
      error: function () {
        options.error && options.error();
      }
    });
  },

  signOut: function(){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
        var view = new Air.Views.Landing({ collection : Air.locations});
        Air.router._swapView(view);
        Backbone.history.navigate("/", {trigger: true});
      }
    });
  },

  fireSessionEvent: function(){
    console.log("fire");
    if(this.isSignedIn()){
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  }

})
