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
    var guestsNames = ["MissySwiss", "GoudaBuddha", "Cheddahead", "LotszaMozza", "TheProvoloner"]
    var guestIndex = Math.floor(Math.random() * guestsNames.length);
    var nameNum = Math.floor(Math.random() * 1000);
    var userData = {first_name: "Guest", last_name: "User", username: guestsNames[guestIndex] + nameNum, password: "feefee"}
    var that = this;
    this.model.set(userData);
    this.model.save({}, {
      success: function () {
        Air.currentUser.fetch();
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});
        // var loc = new Air.Models.Location();
        // loc.save({name: "Arizona", camptype: "wild", owner_id: Air.currentUser.id, price: 43, description: "adfa", coordinates: "Arizona", max_occupancy: "4", water: true, bathroom: false, photo_url: "http://annemckinnell.com/blog/wp-content/uploads/2012/05/arizona_20120418__MG_1469-Edit_lg.jpg" })
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
