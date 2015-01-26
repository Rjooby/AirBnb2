Air.Views.Header = Backbone.View.extend({

  initialize: function(options) {
    this.listenTo(Air.currentUser, "sync change", this.render);
    this.render();
  },

  events: {
    "click #signout" : "signOut",
    "submit #signin" : "signIn"
  },

  template: JST ['shared/header'],

  render: function(){
    var content = this.template({ currentUser: Air.currentUser });
    this.$el.html(content);

    return this;
  },

  signIn: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Air.currentUser.signIn(
      formData.username,
      formData.password,
      function(){
        alert("Wrong username/password combination. Please try again.");
      }
    );
  },

  signOut: function(event){
    event.preventDefault();
    Air.currentUser.signOut();
  }
})
