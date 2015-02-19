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
        Air.currentUser.fetch(
          {success: function () {
            var loc = new Air.Models.Location();
            loc.save({
              name: "Arizona",
              camptype: "wild",
              owner_id: Air.currentUser.id,
              price: 43,
              description: "adfa",
              coordinates: "Arizona",
              max_occupancy: "4",
              water: true,
              bathroom: false,
              photo_url: "http://annemckinnell.com/blog/wp-content/uploads/2012/05/arizona_20120418__MG_1469-Edit_lg.jpg"
            }, {
              success: function () {
                var rev1 = new Air.Models.Review();
                console.log(loc.id);
                rev1.save({
                  reviewer_id: 1,
                  location_id: loc.id,
                  body: "Too hot for me. Host was pretty nice though. I might come back."
                });
                var rev2 = new Air.Models.Review();
                rev2.save({
                  reviewer_id: 3,
                  location_id: loc.id,
                  body: "Scenery was beautiful. Water pump ran out of water though and we barely managed to survive. Luckily some coyotes guided us the way out."
                });
                var rev3 = new Air.Models.Review();
                rev3.save({
                  review_id: 4,
                  location_id: loc.id,
                  body: "The night sky was absolutely gorgeous. Campsite was well maintained. Would definitely visit again."
                });

                var req1 = new Air.Models.Request();
                req1.save({
                  location_id: loc.id,
                  requester_id: 1,
                  guests_num: 3,
                  start_date: "2015-02-01",
                  end_date: "2015-02-04"
                });
                var req2 = new Air.Models.Request();
                req1.save({
                  location_id: loc.id,
                  requester_id: 2,
                  guests_num: 7,
                  start_date: "2015-02-02",
                  end_date: "2015-02-05"
                });
                var req3 = new Air.Models.Request();
                req1.save({
                  location_id: loc.id,
                  requester_id: 3,
                  guests_num: 5,
                  start_date: "2015-03-11",
                  end_date: "2015-03-12"
                });

              }
            });




          }}
        );
        Air.users.add(that.model, {merge: true});
        Backbone.history.navigate("", {trigger: true});

      }
    })
    this.model = new Air.users.model();
    console.log(userData);
  }

});
