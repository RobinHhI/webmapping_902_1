var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PNP_zone_coeur_1 = new ol.format.GeoJSON();
var features_PNP_zone_coeur_1 = format_PNP_zone_coeur_1.readFeatures(json_PNP_zone_coeur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_zone_coeur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_zone_coeur_1.addFeatures(features_PNP_zone_coeur_1);
var lyr_PNP_zone_coeur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_zone_coeur_1, 
                style: style_PNP_zone_coeur_1,
                popuplayertitle: "PNP_zone_coeur",
                interactive: true,
                title: '<img src="styles/legend/PNP_zone_coeur_1.png" /> PNP_zone_coeur'
            });
var format_PNP_zone_optimale_adhesion_2 = new ol.format.GeoJSON();
var features_PNP_zone_optimale_adhesion_2 = format_PNP_zone_optimale_adhesion_2.readFeatures(json_PNP_zone_optimale_adhesion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_zone_optimale_adhesion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_zone_optimale_adhesion_2.addFeatures(features_PNP_zone_optimale_adhesion_2);
var lyr_PNP_zone_optimale_adhesion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_zone_optimale_adhesion_2, 
                style: style_PNP_zone_optimale_adhesion_2,
                popuplayertitle: "PNP_zone_optimale_adhesion",
                interactive: true,
                title: '<img src="styles/legend/PNP_zone_optimale_adhesion_2.png" /> PNP_zone_optimale_adhesion'
            });
var format_PNP_zone_adhesion_3 = new ol.format.GeoJSON();
var features_PNP_zone_adhesion_3 = format_PNP_zone_adhesion_3.readFeatures(json_PNP_zone_adhesion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_zone_adhesion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_zone_adhesion_3.addFeatures(features_PNP_zone_adhesion_3);
var lyr_PNP_zone_adhesion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_zone_adhesion_3, 
                style: style_PNP_zone_adhesion_3,
                popuplayertitle: "PNP_zone_adhesion",
                interactive: true,
                title: '<img src="styles/legend/PNP_zone_adhesion_3.png" /> PNP_zone_adhesion'
            });
var format_PNP_secteurs_4 = new ol.format.GeoJSON();
var features_PNP_secteurs_4 = format_PNP_secteurs_4.readFeatures(json_PNP_secteurs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_secteurs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_secteurs_4.addFeatures(features_PNP_secteurs_4);
var lyr_PNP_secteurs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_secteurs_4, 
                style: style_PNP_secteurs_4,
                popuplayertitle: "PNP_secteurs",
                interactive: true,
    title: 'PNP_secteurs<br />\
    <img src="styles/legend/PNP_secteurs_4_0.png" /> Secteur d\'Aspe<br />\
    <img src="styles/legend/PNP_secteurs_4_1.png" /> Secteur d\'Aure<br />\
    <img src="styles/legend/PNP_secteurs_4_2.png" /> Secteur d\'Azun<br />\
    <img src="styles/legend/PNP_secteurs_4_3.png" /> Secteur d\'Ossau<br />\
    <img src="styles/legend/PNP_secteurs_4_4.png" /> Secteur de Cauterets<br />\
    <img src="styles/legend/PNP_secteurs_4_5.png" /> Secteur de Luz<br />\
    <img src="styles/legend/PNP_secteurs_4_6.png" /> <br />'
        });
var format_PNP_limites_parc_toutes_zones_5 = new ol.format.GeoJSON();
var features_PNP_limites_parc_toutes_zones_5 = format_PNP_limites_parc_toutes_zones_5.readFeatures(json_PNP_limites_parc_toutes_zones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_limites_parc_toutes_zones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_limites_parc_toutes_zones_5.addFeatures(features_PNP_limites_parc_toutes_zones_5);
var lyr_PNP_limites_parc_toutes_zones_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_limites_parc_toutes_zones_5, 
                style: style_PNP_limites_parc_toutes_zones_5,
                popuplayertitle: "PNP_limites_parc_toutes_zones",
                interactive: true,
                title: '<img src="styles/legend/PNP_limites_parc_toutes_zones_5.png" /> PNP_limites_parc_toutes_zones'
            });
var format_PNP_sentiers_6 = new ol.format.GeoJSON();
var features_PNP_sentiers_6 = format_PNP_sentiers_6.readFeatures(json_PNP_sentiers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_sentiers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_sentiers_6.addFeatures(features_PNP_sentiers_6);
var lyr_PNP_sentiers_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_sentiers_6, 
                style: style_PNP_sentiers_6,
                popuplayertitle: "PNP_sentiers",
                interactive: true,
                title: '<img src="styles/legend/PNP_sentiers_6.png" /> PNP_sentiers'
            });
var format_PNP_plans_eau_7 = new ol.format.GeoJSON();
var features_PNP_plans_eau_7 = format_PNP_plans_eau_7.readFeatures(json_PNP_plans_eau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_plans_eau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_plans_eau_7.addFeatures(features_PNP_plans_eau_7);
var lyr_PNP_plans_eau_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_plans_eau_7, 
                style: style_PNP_plans_eau_7,
                popuplayertitle: "PNP_plans_eau",
                interactive: true,
                title: '<img src="styles/legend/PNP_plans_eau_7.png" /> PNP_plans_eau'
            });
var format_PNP_maisons_du_parc_8 = new ol.format.GeoJSON();
var features_PNP_maisons_du_parc_8 = format_PNP_maisons_du_parc_8.readFeatures(json_PNP_maisons_du_parc_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_maisons_du_parc_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_maisons_du_parc_8.addFeatures(features_PNP_maisons_du_parc_8);
var lyr_PNP_maisons_du_parc_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_maisons_du_parc_8, 
                style: style_PNP_maisons_du_parc_8,
                popuplayertitle: "PNP_maisons_du_parc",
                interactive: true,
                title: '<img src="styles/legend/PNP_maisons_du_parc_8.png" /> PNP_maisons_du_parc'
            });
var format_PNP_refuges_9 = new ol.format.GeoJSON();
var features_PNP_refuges_9 = format_PNP_refuges_9.readFeatures(json_PNP_refuges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNP_refuges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNP_refuges_9.addFeatures(features_PNP_refuges_9);
var lyr_PNP_refuges_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNP_refuges_9, 
                style: style_PNP_refuges_9,
                popuplayertitle: "PNP_refuges",
                interactive: true,
                title: '<img src="styles/legend/PNP_refuges_9.png" /> PNP_refuges'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PNP_zone_coeur_1.setVisible(true);lyr_PNP_zone_optimale_adhesion_2.setVisible(true);lyr_PNP_zone_adhesion_3.setVisible(true);lyr_PNP_secteurs_4.setVisible(true);lyr_PNP_limites_parc_toutes_zones_5.setVisible(true);lyr_PNP_sentiers_6.setVisible(true);lyr_PNP_plans_eau_7.setVisible(true);lyr_PNP_maisons_du_parc_8.setVisible(true);lyr_PNP_refuges_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PNP_zone_coeur_1,lyr_PNP_zone_optimale_adhesion_2,lyr_PNP_zone_adhesion_3,lyr_PNP_secteurs_4,lyr_PNP_limites_parc_toutes_zones_5,lyr_PNP_sentiers_6,lyr_PNP_plans_eau_7,lyr_PNP_maisons_du_parc_8,lyr_PNP_refuges_9];
lyr_PNP_zone_coeur_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_PNP_zone_optimale_adhesion_2.set('fieldAliases', {'ID': 'ID', 'Libellé': 'Libellé', });
lyr_PNP_zone_adhesion_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_PNP_secteurs_4.set('fieldAliases', {'ID': 'ID', 'Nom': 'Nom', });
lyr_PNP_limites_parc_toutes_zones_5.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_PNP_sentiers_6.set('fieldAliases', {'IDPNP': 'IDPNP', });
lyr_PNP_plans_eau_7.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'SUPERFICIE': 'SUPERFICIE', 'area_ha': 'area_ha', });
lyr_PNP_maisons_du_parc_8.set('fieldAliases', {'Nom': 'Nom', });
lyr_PNP_refuges_9.set('fieldAliases', {'Type': 'Type', 'Propriete': 'Propriete', 'Nom': 'Nom', });
lyr_PNP_zone_coeur_1.set('fieldImages', {'id': 'Range', 'nom': 'TextEdit', });
lyr_PNP_zone_optimale_adhesion_2.set('fieldImages', {'ID': 'TextEdit', 'Libellé': 'TextEdit', });
lyr_PNP_zone_adhesion_3.set('fieldImages', {'id': '', 'nom': '', });
lyr_PNP_secteurs_4.set('fieldImages', {'ID': 'TextEdit', 'Nom': 'TextEdit', });
lyr_PNP_limites_parc_toutes_zones_5.set('fieldImages', {'id': 'Range', 'nom': 'TextEdit', });
lyr_PNP_sentiers_6.set('fieldImages', {'IDPNP': 'TextEdit', });
lyr_PNP_plans_eau_7.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'SUPERFICIE': 'Range', 'area_ha': 'TextEdit', });
lyr_PNP_maisons_du_parc_8.set('fieldImages', {'Nom': 'TextEdit', });
lyr_PNP_refuges_9.set('fieldImages', {'Type': 'TextEdit', 'Propriete': 'TextEdit', 'Nom': 'TextEdit', });
lyr_PNP_zone_coeur_1.set('fieldLabels', {'id': 'no label', 'nom': 'header label - visible with data', });
lyr_PNP_zone_optimale_adhesion_2.set('fieldLabels', {'ID': 'no label', 'Libellé': 'header label - visible with data', });
lyr_PNP_zone_adhesion_3.set('fieldLabels', {'id': 'no label', 'nom': 'header label - visible with data', });
lyr_PNP_secteurs_4.set('fieldLabels', {'ID': 'no label', 'Nom': 'header label - visible with data', });
lyr_PNP_limites_parc_toutes_zones_5.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_PNP_sentiers_6.set('fieldLabels', {'IDPNP': 'no label', });
lyr_PNP_plans_eau_7.set('fieldLabels', {'ID': 'no label', 'NATURE': 'no label', 'TOPONYME': 'header label - visible with data', 'SUPERFICIE': 'no label', 'area_ha': 'no label', });
lyr_PNP_maisons_du_parc_8.set('fieldLabels', {'Nom': 'header label - visible with data', });
lyr_PNP_refuges_9.set('fieldLabels', {'Type': 'no label', 'Propriete': 'no label', 'Nom': 'inline label - visible with data', });
lyr_PNP_refuges_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});