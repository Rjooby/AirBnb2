Air.Views.SignIn2 = Backbone.View.extend({

  initialize: function(options){
    this.render();
    this.callback = options.callback;
    this.listenTo(Air.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "signIn",
    "click .guest" : "guestLogin",
    "click .closemodal" : "closeSignInModal"

  },

  template: JST['shared/sign_in2'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  signIn: function(event){
    event.preventDefault();
    var $form = this.$el.find('form.modal-signin');
    var formData = $form.serializeJSON().user;
    var that = this;

    Air.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      },
      success: function(){
        that.remove();
      }
    });
  },

  closeSignInModal: function () {
    $(".modal").removeClass('active');
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("#/locations", { trigger: true });
    }
  },

  guestLogin: function(event){
    event.preventDefault();
    var guestsNames = ["MissySwiss", "GoudaBuddha", "Cheddahead", "LotszaMozza", "TheProvoloner"]
    var guestIndex = Math.floor(Math.random() * guestsNames.length);
    var nameNum = Math.floor(Math.random() * 1000);
    var userData = {first_name: "Guest", last_name: "User", username: guestsNames[guestIndex] + nameNum, password: "feefee"}
    var that = this;
    this.model.set(userData);
    this.model.save({}, {
      success: function () {
        Air.currentUser.fetch();
        Air.users.add(that.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});
        // var loc = new Air.Models.Location();
        // loc.save({name: "Arizona", camptype: "wild", owner_id: Air.currentUser.id, price: 43, description: "adfa", coordinates: "Arizona", max_occupancy: "4", water: true, bathroom: false, photo_url: "http://annemckinnell.com/blog/wp-content/uploads/2012/05/arizona_20120418__MG_1469-Edit_lg.jpg" })
      }
    })
    this.model = new Air.users.model();
    console.log(userData);
  }

});
