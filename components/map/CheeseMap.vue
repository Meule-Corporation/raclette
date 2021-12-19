<template>
  <div id="map" style="height: 1000px; width: 1000px"></div>
</template>

<script>
import {Icon, Style} from "ol/style";
import {Tile as TileLayer, Vector as VectorLayer} from "ol/layer";
import VectorSource from "ol/source/Vector";
import KML from "ol/format/KML";
import Map from "ol/Map";
import XYZ from "ol/source/XYZ";
import View from "ol/View";
import {fromLonLat} from 'ol/proj';

export default {
  name: "CheeseMap",
  props: {
    center: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      map: null
    }
  },
  watch: {
    center: function(newValue) {
      this.map.getView().setCenter(fromLonLat(newValue.reverse(), 'EPSG:3857'))
      this.map.getView().setZoom(12)
    }
  },
  mounted() {

    const iconStyle = new Style({
      image: new Icon({
        scale: 0.05,
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: '/cheese-slice.svg',
      }),
    });
    const vector = new VectorLayer({
      minZoom: 8,

      source: new VectorSource({

        url: '/kml/cheese-shops.kml',
        format: new KML({defaultStyle: [iconStyle]}),
      }),
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
        vector
      ],
      view: new View({
        //
        center: fromLonLat(this.center.reverse(), 'EPSG:3857'),
        zoom: 12,
        // maxZoom: 18,
        // constrainOnlyCenter: true,
        // zoom: 2
      })
    });

  },
}
</script>
