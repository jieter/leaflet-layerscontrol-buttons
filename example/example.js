var map = L.map('map', {
    zoomControl: false,
}).setView([48, -3], 5);

var layers = {
    'OSM': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),

    'Toner': L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20
    }),

    'Watercolor': L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        minZoom: 3,
        maxZoom: 16
    })
};

var layersControl = L.control.layers.buttons(layers).addTo(map);

layers.OSM.addTo(map);

var info = L.control();
info.options.position = 'topleft';
info.onAdd = function () {
    var div = L.DomUtil.create('div', 'info');
    L.DomUtil.create('h4', '', div).innerHTML = '<a href="https://github.com/jieter/Leaflet.layerscontrol-buttons">Leaflet.layerscontrol-buttons preview</a>';
    L.DomUtil.create('p', '', div).innerHTML = 'Leaflet layers control buttons.';

    return div;
};

info.addTo(map);
