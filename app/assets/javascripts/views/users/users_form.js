Air.Views.UsersForm = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/form'],

  events: {
    "submit form": "submit",
    "click .guest" : "guestLogin"
  },

  guestLogin: function(event){
    event.preventDefault();
    var userData = {first_name: "swissC", last_name: "heez", username: "heryum", password: "feefee"}
    var that = this;
    this.model.set(userData);
    this.model.save({}, {
      success: function () {
        Air.currentUser.fetch();
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});
      }
    })
    console.log(userData);
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;
    console.log(userData);
    var that = this;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Air.currentUser.fetch();
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      },
      error: function(data){
        alert("Form invalid. Let the user know what went wrong.");
        console.log(data);
      }
    });
  }

});
