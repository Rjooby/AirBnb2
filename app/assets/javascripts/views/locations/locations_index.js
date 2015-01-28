Air.Views.LocationsIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "sync change reset", this.render),
    this.listenTo(this.collection, "sync change route", this.renderListing)
  },

  template: JST['locations/index'],

  events: {
    "click .submit" : "search"
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
    this.collection.fetch({
      data: {
        query: this.collection._query,
        success: function () {
          var featureLayer = 
        }
      }
    })
    Air.map.panTo("Hawaii");
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


  var markerList = document.getElementById('locations-list');

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
      Air.map.panTo(layer.getLatLng());

    })
    $ul.append($li);
  });

}

});
