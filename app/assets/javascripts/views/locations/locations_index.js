Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render),
    this.listenTo(this.collection, "sync change", this.renderListing),
    this.listenTo(Air.currentUser, "sync change", this.render),
    this.listenTo(Air.currentUser, "sync change", this.renderListing)
  },

  template: JST['locations/index'],

  events: {
    "submit form.search-listings" : "search"
  },

  render: function () {
    console.log("rendering");
    var content = this.template({ locations : this.collection });
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event.preventDefault();

    this.collection._query = this.$(".query").val();
    var that = this;
    this.collection.fetch({
      data: {
        query: this.collection._query,
        success: function () {
          var og = that.collection.getOrFetch(1);
          // Air.map.panTo([parseFloat(og.escape("longitude")), parseFloat(og.escape("latitude"))]);

        }
      }
    })
    // Air.map.panTo("Hawaii");
    // map.panTo(layer.getLatLng());

  },

  renderListing: function () {
    Air.map = L.mapbox.map('map-one', 'rjooby.kodi76mc');

    var featureLayer = L.mapbox.featureLayer().addTo(Air.map);
    var geoJSON =
    {
      type: "FeatureCollection",
      features: []
    };

    this.collection.each( function(location) {

      geoJSON.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
          location.escape("longitude"),
          location.escape("latitude")
          ]
        },
        properties: {
          title: location.escape("name"),
          description: location.escape("description"),
          id: location.id,
          photo_url: location.escape("photo_url"),
          price: location.escape("price"),
          'marker-size': 'large',
          'marker-color': '#00A1D6',
          'marker-symbol': 'campsite'
        }
      });

    })

    featureLayer.setGeoJSON(geoJSON);
    var keys = [];
    for (var k in featureLayer._layers) keys.push(k);


    console.log(keys) ;
    if (keys.length === 0) {
      var $ul = $("ul#locations-list");
      var $li = $('<li>');
      $li.html("No nearby locations available. May I suggest New York or Hawaii?");
      $ul.append($li);
    } else {
    featureLayer.eachLayer(function(layer) {
      var $ul = $("ul#locations-list");
      $ul.addClass("group");
      var $li = $('<li>');

      var $a =  $('<a>');
      var $img = $('<img>');
      $img.attr("src", layer.feature.properties.photo_url);
      $a.attr("href", "#/locations/" + layer.feature.properties.id);
      $a.attr("class", "listing");
      $a.html($img);

      var $div = $('<div>');
      $div.attr("class", "listing-info");

      var $h4 = $('<h4>');
      var $h5 = $('<h5>');
      $h4.html(layer.feature.properties.title);
      $h5.html("$" + layer.feature.properties.price);
      $div.append($h4);


      // console.log($a);

      $li.html($a);
      $li.append($h5);
      $li.append($div);
      $a.on("mouseenter", function(event) {
        console.log(layer.feature.properties['marker-color'])
        Air.map.panTo(layer.getLatLng());
        layer.addTo(Air.map);
      })
      $ul.append($li);
    });

    Air.map.fitBounds(featureLayer.getBounds());

  }
}

});
