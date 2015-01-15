Air.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  events: {
    "submit form" : "submit",
    "change #input-url-avatar" : "fileInputChange",
    "click .delete-location" : "deleteLocation"

  },

  initialize: function () {
    this.listenTo( this.model, "sync", this.render);
    this.listenTo( Air.locations, "destroy", this.render);
  },

  render: function () {
    var content = this.template({ user : this.model });
    this.$el.html(content);
    return this;
  },

  fileInputChange: function(event){

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._image = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this._updatePreview("");
      delete this.model._image;
    }
  },

  _updatePreview: function(src){
    this.$el.find("#preview-user-avatar").attr("src", src);
  },

  submit: function (event) {
    event.preventDefault();
    var that = this;
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save({}, {
      success: function (){

        that.collection.add(that.model, {merge: true});
        delete that.model._image;
      }
    })
  },

  deleteLocation: function (event) {
    event.preventDefault();
    $target = $(event.currentTarget);
    console.log($target);
    var location2 = this.model.locations().get($target.attr("data-id"));
    location2.destroy();
    var location = Air.locations.get($target.attr("data-id"));
    location.destroy();
  }


});
