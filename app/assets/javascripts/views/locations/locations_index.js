Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render),
    this.listenTo(this.collection, "sync route", this.renderListing)
  },

  template: JST['locations/index'],

  events: {
    "submit" : "search"
  },

  render: function () {
    console.log('rendering');
    var content = this.template({ locations : this.collection });
    this.$el.html(content);
    return this;
  },

  search: function (event) {
    event.preventDefault();
    var info = $(event.currentTarget).serializeJSON();
  },

  renderListing: function () {
    var map = L.mapbox.map('map-one', 'rjooby.kodi76mc');

    var featureLayer = L.mapbox.featureLayer().addTo(map);
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
          id: location.id ,
          'marker-size': 'large',
          'marker-color': '#00A1D6',
          'marker-symbol': 'campsite'
        }
      });

      })

      featureLayer.setGeoJSON(geoJSON);


      var markerList = document.getElementById('locations-list');

        featureLayer.eachLayer(function(layer) {
          var $ul = $("ul#locations-list");
          var $li = $('<li>');
          var $a =  $('<a>');
          $a.attr("href", "#/locations/" + layer.feature.properties.id);
          $a.html(layer.feature.properties.title)
          $li.html($a);
          $li.on("mouseenter", function(event) {
            map.panTo(layer.getLatLng());

          })
          $ul.append($li);
        });





  }

});
