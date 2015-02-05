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
    "submit form.modal-signup" : "signUp"
  },

  template: JST['shared/header'],

  render: function(){
    var newuser = new Air.users.model();
    var content = this.template({ currentUser: Air.currentUser, user: this.model });
    this.$el.html(content);

    return this;
  },

  openSignInModal: function () {
    $(".modal").addClass("active");
  },

  closeSignInModal: function () {
    console.log("yto");
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
