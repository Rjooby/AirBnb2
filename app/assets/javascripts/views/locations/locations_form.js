Air.Views.LocationForm = Backbone.View.extend({
  id: 'locform-container',
  template: JST['locations/form'],

  events: {
    "submit form#location-form" : "submit",
    "change #input-url-photo" : "fileInputChange"
  },

  render: function (){
    var content = this.template({ location : this.model });
    this.$el.html(content);
    return this;
  },

  fileInputChange: function(event) {
    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
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

  _updatePreview: function (src) {
    this.$el.find("#preview-location-photo").attr("src", src);
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.find("form#location-form").serializeJSON().location;
    console.log(attrs);
    var that = this;

    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("",  {trigger:true});
      }
    });
  }

});
