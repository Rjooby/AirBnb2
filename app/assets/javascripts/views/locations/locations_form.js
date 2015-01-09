Air.Views.LocationForm = Backbone.View.extend({
  tagName: 'form',
  template: JST['locations/form'],

  events: {
    "click .formsubmit" : "submit"
  },

  render: function (){
    var content = this.template({ location : this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    console.log(attrs);
    console.log(this.model);
    var that = this;

    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("",  {trigger:true});
      }
    });
  }

});
