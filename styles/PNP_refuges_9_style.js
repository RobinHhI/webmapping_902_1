var size = 0;
var placement = 'point';

var style_PNP_refuges_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Noto Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nom") !== null) {
        labelText = String(feature.get("Nom"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(238,96,85,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(238,96,85,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};