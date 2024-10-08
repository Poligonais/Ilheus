var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1 = new ol.format.GeoJSON();
var features_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1 = format_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.readFeatures(json_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.addFeatures(features_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1);
var lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1, 
                style: style_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1,
                popuplayertitle: "Anexo XV - Terreno a Sudoeste da Área com o RIP 3573.00000177-30",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.png" /> Anexo XV - Terreno a Sudoeste da Área com o RIP 3573.00000177-30'
            });
var format_AnexoXIVreaAqutica_2 = new ol.format.GeoJSON();
var features_AnexoXIVreaAqutica_2 = format_AnexoXIVreaAqutica_2.readFeatures(json_AnexoXIVreaAqutica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVreaAqutica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVreaAqutica_2.addFeatures(features_AnexoXIVreaAqutica_2);
var lyr_AnexoXIVreaAqutica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVreaAqutica_2, 
                style: style_AnexoXIVreaAqutica_2,
                popuplayertitle: "Anexo XIV - Área Aquática",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVreaAqutica_2.png" /> Anexo XIV - Área Aquática'
            });
var format_AnexoXIIIPortoNovoAmpliaodoPorto_3 = new ol.format.GeoJSON();
var features_AnexoXIIIPortoNovoAmpliaodoPorto_3 = format_AnexoXIIIPortoNovoAmpliaodoPorto_3.readFeatures(json_AnexoXIIIPortoNovoAmpliaodoPorto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIPortoNovoAmpliaodoPorto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIPortoNovoAmpliaodoPorto_3.addFeatures(features_AnexoXIIIPortoNovoAmpliaodoPorto_3);
var lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIPortoNovoAmpliaodoPorto_3, 
                style: style_AnexoXIIIPortoNovoAmpliaodoPorto_3,
                popuplayertitle: "Anexo XIII - Porto Novo (Ampliação do Porto)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIPortoNovoAmpliaodoPorto_3.png" /> Anexo XIII - Porto Novo (Ampliação do Porto)'
            });
var format_AnexoXIIPortoNovoreaD2_4 = new ol.format.GeoJSON();
var features_AnexoXIIPortoNovoreaD2_4 = format_AnexoXIIPortoNovoreaD2_4.readFeatures(json_AnexoXIIPortoNovoreaD2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIPortoNovoreaD2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIPortoNovoreaD2_4.addFeatures(features_AnexoXIIPortoNovoreaD2_4);
var lyr_AnexoXIIPortoNovoreaD2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIPortoNovoreaD2_4, 
                style: style_AnexoXIIPortoNovoreaD2_4,
                popuplayertitle: "Anexo XII - Porto Novo (Área D2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIPortoNovoreaD2_4.png" /> Anexo XII - Porto Novo (Área D2)'
            });
var format_AnexoXIPortoNovoreaB_5 = new ol.format.GeoJSON();
var features_AnexoXIPortoNovoreaB_5 = format_AnexoXIPortoNovoreaB_5.readFeatures(json_AnexoXIPortoNovoreaB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIPortoNovoreaB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIPortoNovoreaB_5.addFeatures(features_AnexoXIPortoNovoreaB_5);
var lyr_AnexoXIPortoNovoreaB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIPortoNovoreaB_5, 
                style: style_AnexoXIPortoNovoreaB_5,
                popuplayertitle: "Anexo XI - Porto Novo (Área B)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIPortoNovoreaB_5.png" /> Anexo XI - Porto Novo (Área B)'
            });
var format_AnexoXPortoNovoreaA_6 = new ol.format.GeoJSON();
var features_AnexoXPortoNovoreaA_6 = format_AnexoXPortoNovoreaA_6.readFeatures(json_AnexoXPortoNovoreaA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXPortoNovoreaA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXPortoNovoreaA_6.addFeatures(features_AnexoXPortoNovoreaA_6);
var lyr_AnexoXPortoNovoreaA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXPortoNovoreaA_6, 
                style: style_AnexoXPortoNovoreaA_6,
                popuplayertitle: "Anexo X - Porto Novo (Área A)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXPortoNovoreaA_6.png" /> Anexo X - Porto Novo (Área A)'
            });
var format_AnexoIXPortoNovo_7 = new ol.format.GeoJSON();
var features_AnexoIXPortoNovo_7 = format_AnexoIXPortoNovo_7.readFeatures(json_AnexoIXPortoNovo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXPortoNovo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXPortoNovo_7.addFeatures(features_AnexoIXPortoNovo_7);
var lyr_AnexoIXPortoNovo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXPortoNovo_7, 
                style: style_AnexoIXPortoNovo_7,
                popuplayertitle: "Anexo IX - Porto Novo",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXPortoNovo_7.png" /> Anexo IX - Porto Novo'
            });
var format_AnexoVIIIPortoNovoParte2_8 = new ol.format.GeoJSON();
var features_AnexoVIIIPortoNovoParte2_8 = format_AnexoVIIIPortoNovoParte2_8.readFeatures(json_AnexoVIIIPortoNovoParte2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIPortoNovoParte2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIPortoNovoParte2_8.addFeatures(features_AnexoVIIIPortoNovoParte2_8);
var lyr_AnexoVIIIPortoNovoParte2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIPortoNovoParte2_8, 
                style: style_AnexoVIIIPortoNovoParte2_8,
                popuplayertitle: "Anexo VIII - Porto Novo (Parte 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIPortoNovoParte2_8.png" /> Anexo VIII - Porto Novo (Parte 2)'
            });
var format_AnexoVIIPortoNovoParte1_9 = new ol.format.GeoJSON();
var features_AnexoVIIPortoNovoParte1_9 = format_AnexoVIIPortoNovoParte1_9.readFeatures(json_AnexoVIIPortoNovoParte1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIPortoNovoParte1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIPortoNovoParte1_9.addFeatures(features_AnexoVIIPortoNovoParte1_9);
var lyr_AnexoVIIPortoNovoParte1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIPortoNovoParte1_9, 
                style: style_AnexoVIIPortoNovoParte1_9,
                popuplayertitle: "Anexo VII - Porto Novo (Parte 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIPortoNovoParte1_9.png" /> Anexo VII - Porto Novo (Parte 1)'
            });
var format_AnexoVIPortoVelhoreaE_10 = new ol.format.GeoJSON();
var features_AnexoVIPortoVelhoreaE_10 = format_AnexoVIPortoVelhoreaE_10.readFeatures(json_AnexoVIPortoVelhoreaE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIPortoVelhoreaE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIPortoVelhoreaE_10.addFeatures(features_AnexoVIPortoVelhoreaE_10);
var lyr_AnexoVIPortoVelhoreaE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIPortoVelhoreaE_10, 
                style: style_AnexoVIPortoVelhoreaE_10,
                popuplayertitle: "Anexo VI - Porto Velho (Área E)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIPortoVelhoreaE_10.png" /> Anexo VI - Porto Velho (Área E)'
            });
var format_AnexoVPortoVelhoreaD_11 = new ol.format.GeoJSON();
var features_AnexoVPortoVelhoreaD_11 = format_AnexoVPortoVelhoreaD_11.readFeatures(json_AnexoVPortoVelhoreaD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVPortoVelhoreaD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVPortoVelhoreaD_11.addFeatures(features_AnexoVPortoVelhoreaD_11);
var lyr_AnexoVPortoVelhoreaD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVPortoVelhoreaD_11, 
                style: style_AnexoVPortoVelhoreaD_11,
                popuplayertitle: "Anexo V - Porto Velho (Área D)",
                interactive: true,
                title: '<img src="styles/legend/AnexoVPortoVelhoreaD_11.png" /> Anexo V - Porto Velho (Área D)'
            });
var format_AnexoIVPortoVelhoreaC1_12 = new ol.format.GeoJSON();
var features_AnexoIVPortoVelhoreaC1_12 = format_AnexoIVPortoVelhoreaC1_12.readFeatures(json_AnexoIVPortoVelhoreaC1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVPortoVelhoreaC1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVPortoVelhoreaC1_12.addFeatures(features_AnexoIVPortoVelhoreaC1_12);
var lyr_AnexoIVPortoVelhoreaC1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVPortoVelhoreaC1_12, 
                style: style_AnexoIVPortoVelhoreaC1_12,
                popuplayertitle: "Anexo IV - Porto Velho (Área C1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVPortoVelhoreaC1_12.png" /> Anexo IV - Porto Velho (Área C1)'
            });
var format_AnexoIIIPortoVelhoreaC_13 = new ol.format.GeoJSON();
var features_AnexoIIIPortoVelhoreaC_13 = format_AnexoIIIPortoVelhoreaC_13.readFeatures(json_AnexoIIIPortoVelhoreaC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIPortoVelhoreaC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIPortoVelhoreaC_13.addFeatures(features_AnexoIIIPortoVelhoreaC_13);
var lyr_AnexoIIIPortoVelhoreaC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIPortoVelhoreaC_13, 
                style: style_AnexoIIIPortoVelhoreaC_13,
                popuplayertitle: "Anexo III - Porto Velho (Área C)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIPortoVelhoreaC_13.png" /> Anexo III - Porto Velho (Área C)'
            });
var format_AnexoIIPortoVelhoreaB_14 = new ol.format.GeoJSON();
var features_AnexoIIPortoVelhoreaB_14 = format_AnexoIIPortoVelhoreaB_14.readFeatures(json_AnexoIIPortoVelhoreaB_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIPortoVelhoreaB_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIPortoVelhoreaB_14.addFeatures(features_AnexoIIPortoVelhoreaB_14);
var lyr_AnexoIIPortoVelhoreaB_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIPortoVelhoreaB_14, 
                style: style_AnexoIIPortoVelhoreaB_14,
                popuplayertitle: "Anexo II - Porto Velho (Área B)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIPortoVelhoreaB_14.png" /> Anexo II - Porto Velho (Área B)'
            });
var format_AnexoIPortoVelhoreaA_15 = new ol.format.GeoJSON();
var features_AnexoIPortoVelhoreaA_15 = format_AnexoIPortoVelhoreaA_15.readFeatures(json_AnexoIPortoVelhoreaA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPortoVelhoreaA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPortoVelhoreaA_15.addFeatures(features_AnexoIPortoVelhoreaA_15);
var lyr_AnexoIPortoVelhoreaA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPortoVelhoreaA_15, 
                style: style_AnexoIPortoVelhoreaA_15,
                popuplayertitle: "Anexo I - Porto Velho (Área A)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPortoVelhoreaA_15.png" /> Anexo I - Porto Velho (Área A)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.setVisible(true);lyr_AnexoXIVreaAqutica_2.setVisible(true);lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3.setVisible(true);lyr_AnexoXIIPortoNovoreaD2_4.setVisible(true);lyr_AnexoXIPortoNovoreaB_5.setVisible(true);lyr_AnexoXPortoNovoreaA_6.setVisible(true);lyr_AnexoIXPortoNovo_7.setVisible(true);lyr_AnexoVIIIPortoNovoParte2_8.setVisible(true);lyr_AnexoVIIPortoNovoParte1_9.setVisible(true);lyr_AnexoVIPortoVelhoreaE_10.setVisible(true);lyr_AnexoVPortoVelhoreaD_11.setVisible(true);lyr_AnexoIVPortoVelhoreaC1_12.setVisible(true);lyr_AnexoIIIPortoVelhoreaC_13.setVisible(true);lyr_AnexoIIPortoVelhoreaB_14.setVisible(true);lyr_AnexoIPortoVelhoreaA_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1,lyr_AnexoXIVreaAqutica_2,lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3,lyr_AnexoXIIPortoNovoreaD2_4,lyr_AnexoXIPortoNovoreaB_5,lyr_AnexoXPortoNovoreaA_6,lyr_AnexoIXPortoNovo_7,lyr_AnexoVIIIPortoNovoParte2_8,lyr_AnexoVIIPortoNovoParte1_9,lyr_AnexoVIPortoVelhoreaE_10,lyr_AnexoVPortoVelhoreaD_11,lyr_AnexoIVPortoVelhoreaC1_12,lyr_AnexoIIIPortoVelhoreaC_13,lyr_AnexoIIPortoVelhoreaB_14,lyr_AnexoIPortoVelhoreaA_15];
lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVreaAqutica_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIPortoNovoreaD2_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIPortoNovoreaB_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXPortoNovoreaA_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXPortoNovo_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIPortoNovoParte2_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIPortoNovoParte1_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIPortoVelhoreaE_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVPortoVelhoreaD_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVPortoVelhoreaC1_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIIPortoVelhoreaC_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIPortoVelhoreaB_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPortoVelhoreaA_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVreaAqutica_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIPortoNovoreaD2_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIPortoNovoreaB_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXPortoNovoreaA_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXPortoNovo_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIPortoNovoParte2_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIPortoNovoParte1_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIPortoVelhoreaE_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVPortoVelhoreaD_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVPortoVelhoreaC1_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIIPortoVelhoreaC_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIPortoVelhoreaB_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPortoVelhoreaA_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVTerrenoaSudoestedareacomoRIP35730000017730_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVreaAqutica_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIIPortoNovoAmpliaodoPorto_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIPortoNovoreaD2_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIPortoNovoreaB_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXPortoNovoreaA_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXPortoNovo_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIPortoNovoParte2_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIPortoNovoParte1_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIPortoVelhoreaE_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVPortoVelhoreaD_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVPortoVelhoreaC1_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIIPortoVelhoreaC_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIPortoVelhoreaB_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortoVelhoreaA_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPortoVelhoreaA_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});