ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([480409.764926, 7188936.853385, 491772.575271, 7194928.153385]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.907000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lineailuminacion_1 = new ol.format.GeoJSON();
var features_lineailuminacion_1 = format_lineailuminacion_1.readFeatures(json_lineailuminacion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_lineailuminacion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineailuminacion_1.addFeatures(features_lineailuminacion_1);
var lyr_lineailuminacion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lineailuminacion_1, 
                style: style_lineailuminacion_1,
                popuplayertitle: "linea iluminacion",
                interactive: true,
                title: '<img src="styles/legend/lineailuminacion_1.png" /> linea iluminacion'
            });
var format_APL5_2 = new ol.format.GeoJSON();
var features_APL5_2 = format_APL5_2.readFeatures(json_APL5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL5_2.addFeatures(features_APL5_2);
var lyr_APL5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL5_2, 
                style: style_APL5_2,
                popuplayertitle: "AP L5..",
                interactive: true,
                title: '<img src="styles/legend/APL5_2.png" /> AP L5..'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N3"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_lineailuminacion_1.setVisible(true);lyr_APL5_2.setVisible(true);
var layersList = [group_OpenStreetMap,lyr_lineailuminacion_1,lyr_APL5_2];
lyr_lineailuminacion_1.set('fieldAliases', {'ruta': 'ruta', });
lyr_APL5_2.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Hora de Inicio de la Ejecuci�n': 'Hora de Inicio de la Ejecuci�n', 'Hora de fin de la Ejecuci�n': 'Hora de fin de la Ejecuci�n', 'Ubicaci�n': 'Ubicaci�n', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Tipo de Poste': 'Tipo de Poste', 'Fiscal Lote 5': 'Fiscal Lote 5', 'Autorizaci�n del Servicio': 'Autorizaci�n del Servicio', '�TEM DE MONTAJE': '�TEM DE MONTAJE', 'TIPO': 'TIPO', 'POTENCIA': 'POTENCIA', 'Tipo de Brazo': 'Tipo de Brazo', 'Creado': 'Creado', 'Cuadrilla 5': 'Cuadrilla 5', });
lyr_lineailuminacion_1.set('fieldImages', {'ruta': 'TextEdit', });
lyr_APL5_2.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Hora de Inicio de la Ejecuci�n': 'TextEdit', 'Hora de fin de la Ejecuci�n': 'TextEdit', 'Ubicaci�n': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Fiscal Lote 5': 'TextEdit', 'Autorizaci�n del Servicio': 'TextEdit', '�TEM DE MONTAJE': 'Range', 'TIPO': 'TextEdit', 'POTENCIA': 'Range', 'Tipo de Brazo': 'TextEdit', 'Creado': 'TextEdit', 'Cuadrilla 5': 'TextEdit', });
lyr_lineailuminacion_1.set('fieldLabels', {'ruta': 'no label', });
lyr_APL5_2.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 5': 'no label', 'Hora de Inicio de la Ejecuci�n': 'no label', 'Hora de fin de la Ejecuci�n': 'no label', 'Ubicaci�n': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Tipo de Poste': 'no label', 'Fiscal Lote 5': 'no label', 'Autorizaci�n del Servicio': 'no label', '�TEM DE MONTAJE': 'no label', 'TIPO': 'no label', 'POTENCIA': 'no label', 'Tipo de Brazo': 'no label', 'Creado': 'no label', 'Cuadrilla 5': 'no label', });
lyr_APL5_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});