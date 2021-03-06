Air.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(Air.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit"
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Air.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("#/locations", { trigger: true });
    }
  }

});
