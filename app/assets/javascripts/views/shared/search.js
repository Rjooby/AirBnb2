Air.Views.Search = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.searchResults = new Air.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "click .search" : "search",
    "click .next-page" : "nextPage"
  },

  template: JST["shared/search"],

  render: function () {
    var content = this.template({collection: this.searchResults});
    this.$el.html(content);

    this.renderSearchResults();

    return this;
  },

  renderSearchResults: function () {
    var container = this.$(".search-results");
    this.searchResults.each(function(model) {
      console.log(model);
      var template = JST["locations/list_item"]
      container.append(template({model: model}));
    });
  },

  search: function(event){
    console.log("hwat");
    event.preventDefault();
    this.searchResults._query = this.$(".query").val();
    this.searchResults.fetch({
      data: {query: this.searchResults._query}
    });
  }
})
