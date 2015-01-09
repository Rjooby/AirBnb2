Air.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: Air.Models.User,

  getOrFetch: function (id) {
    var user = Air.users.get(id);
    var users = Air.users;
    if (!user) {
      user = new Air.Models.User({ id : id });
      user.fetch({
        success: function () {
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }
    return user;
  }

});
