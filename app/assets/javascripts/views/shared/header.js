Air.Views.Header = Backbone.View.extend({

  initialize: function(options) {
    // console.log("init")
    // this.callback = options.callback;
    this.listenTo(Air.currentUser, "sync change", this.render);
    // this.listenTo(Air.currentUser, "signIn", this.signInCallBack);
    this.render();
  },

  events: {
    "click #signout" : "signOut",
    "submit form.modal-signin" : "signIn",
    "click .signinmodal" : "openSignInModal",
    "click .closemodal" : "closeSignInModal",
    "click .signupmodal" : "openSignUpModal",
    "click .closemodal2" : "closeSignUpModal",
    "submit form.modal-signup" : "signUp",
    "click .guest" : "guestLogin"
  },

  template: JST['shared/header'],

  render: function(){
    var newuser = new Air.users.model();
    var content = this.template({ currentUser: Air.currentUser, user: this.model });
    this.$el.html(content);

    return this;
  },

  openSignInModal: function () {
    // $(".modal").addClass("active");
    Air.router.signIn();
  },

  closeSignInModal: function () {
    $(".modal").removeClass('active');
  },

  openSignUpModal: function () {
    $(".modal2").addClass("active");
  },

  closeSignUpModal: function () {
    $(".modal2").removeClass("active");
  },

  signIn: function(event){
    event.preventDefault();
    var $form = this.$el.find('form.modal-signin');
    var formData = $form.serializeJSON().user;

    Air.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signOut: function(event){
    event.preventDefault();
    Air.currentUser.signOut();
  },

  signUp: function (event) {
    event.preventDefault();

    var $form = this.$el.find('form.modal-signup');
    var userData = $form.serializeJSON().user;
    console.log(userData);
    var that = this;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Air.currentUser.fetch();
        Air.users.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      },
      error: function(data){
        alert("Form invalid. Let the user know what went wrong.");
        console.log(data);
      }
    });
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

  //
  // signInCallback: function () {
  //   if(this.callback) {
  //     this.callback();
  //   } else {
  //     Backbone.history.navigate("", { trigger: true });
  //   }
  // }
})
