Air.Views.SignIn2 = Backbone.View.extend({

  initialize: function(options){
    this.render();
    this.callback = options.callback;
    this.listenTo(Air.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "signIn",

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

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("#/locations", { trigger: true });
    }
  }

});
