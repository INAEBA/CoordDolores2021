var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionDolores_3 = new ol.format.GeoJSON();
var features_CoordinacionDolores_3 = format_CoordinacionDolores_3.readFeatures(json_CoordinacionDolores_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionDolores_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionDolores_3.addFeatures(features_CoordinacionDolores_3);
var lyr_CoordinacionDolores_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionDolores_3, 
                style: style_CoordinacionDolores_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionDolores_3.png" /> Coordinacion Dolores'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionSDU1_5 = new ol.format.GeoJSON();
var features_MicroregionSDU1_5 = format_MicroregionSDU1_5.readFeatures(json_MicroregionSDU1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSDU1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSDU1_5.addFeatures(features_MicroregionSDU1_5);
var lyr_MicroregionSDU1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSDU1_5, 
                style: style_MicroregionSDU1_5,
                interactive: false,
    title: 'Microregion SDU1<br />\
    <img src="styles/legend/MicroregionSDU1_5_0.png" /> 2 - 53 Personas<br />\
    <img src="styles/legend/MicroregionSDU1_5_1.png" /> 53 - 131 Personas<br />\
    <img src="styles/legend/MicroregionSDU1_5_2.png" /> 131 - 229 Personas<br />\
    <img src="styles/legend/MicroregionSDU1_5_3.png" /> 229 - 489 Personas<br />\
    <img src="styles/legend/MicroregionSDU1_5_4.png" /> 489 - 873 Personas<br />'
        });
var format_MicroregionDH5_6 = new ol.format.GeoJSON();
var features_MicroregionDH5_6 = format_MicroregionDH5_6.readFeatures(json_MicroregionDH5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDH5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDH5_6.addFeatures(features_MicroregionDH5_6);
var lyr_MicroregionDH5_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDH5_6, 
                style: style_MicroregionDH5_6,
                interactive: false,
    title: 'Microregion DH5<br />\
    <img src="styles/legend/MicroregionDH5_6_0.png" /> 3 - 25 Personas<br />\
    <img src="styles/legend/MicroregionDH5_6_1.png" /> 25 - 57 Personas<br />\
    <img src="styles/legend/MicroregionDH5_6_2.png" /> 57 - 116 Personas<br />\
    <img src="styles/legend/MicroregionDH5_6_3.png" /> 116 - 203 Personas<br />\
    <img src="styles/legend/MicroregionDH5_6_4.png" /> 203 - 324 Personas<br />'
        });
var format_MicroregionDH4_7 = new ol.format.GeoJSON();
var features_MicroregionDH4_7 = format_MicroregionDH4_7.readFeatures(json_MicroregionDH4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDH4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDH4_7.addFeatures(features_MicroregionDH4_7);
var lyr_MicroregionDH4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDH4_7, 
                style: style_MicroregionDH4_7,
                interactive: false,
    title: 'Microregion DH4<br />\
    <img src="styles/legend/MicroregionDH4_7_0.png" /> 1 - 33 Personas<br />\
    <img src="styles/legend/MicroregionDH4_7_1.png" /> 33 - 97 Personas<br />\
    <img src="styles/legend/MicroregionDH4_7_2.png" /> 97 - 197 Personas<br />\
    <img src="styles/legend/MicroregionDH4_7_3.png" /> 197 - 325 Personas<br />\
    <img src="styles/legend/MicroregionDH4_7_4.png" /> 325 - 493 Personas<br />'
        });
var format_MicroregionDH3_8 = new ol.format.GeoJSON();
var features_MicroregionDH3_8 = format_MicroregionDH3_8.readFeatures(json_MicroregionDH3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDH3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDH3_8.addFeatures(features_MicroregionDH3_8);
var lyr_MicroregionDH3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDH3_8, 
                style: style_MicroregionDH3_8,
                interactive: false,
    title: 'Microregion DH3<br />\
    <img src="styles/legend/MicroregionDH3_8_0.png" /> 1 - 33 Personas<br />\
    <img src="styles/legend/MicroregionDH3_8_1.png" /> 33 - 91 Personas<br />\
    <img src="styles/legend/MicroregionDH3_8_2.png" /> 91 - 170 Personas<br />\
    <img src="styles/legend/MicroregionDH3_8_3.png" /> 170 - 287 Personas<br />\
    <img src="styles/legend/MicroregionDH3_8_4.png" /> 287 - 460 Personas<br />'
        });
var format_MicroregionDH2_9 = new ol.format.GeoJSON();
var features_MicroregionDH2_9 = format_MicroregionDH2_9.readFeatures(json_MicroregionDH2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDH2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDH2_9.addFeatures(features_MicroregionDH2_9);
var lyr_MicroregionDH2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDH2_9, 
                style: style_MicroregionDH2_9,
                interactive: false,
    title: 'Microregion DH2<br />\
    <img src="styles/legend/MicroregionDH2_9_0.png" /> 1 - 36 Personas<br />\
    <img src="styles/legend/MicroregionDH2_9_1.png" /> 36 - 82 Personas<br />\
    <img src="styles/legend/MicroregionDH2_9_2.png" /> 82 - 149 Personas<br />\
    <img src="styles/legend/MicroregionDH2_9_3.png" /> 149 - 275 Personas<br />\
    <img src="styles/legend/MicroregionDH2_9_4.png" /> 275 - 392 Personas<br />'
        });
var format_MicroregionDH1_10 = new ol.format.GeoJSON();
var features_MicroregionDH1_10 = format_MicroregionDH1_10.readFeatures(json_MicroregionDH1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionDH1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionDH1_10.addFeatures(features_MicroregionDH1_10);
var lyr_MicroregionDH1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionDH1_10, 
                style: style_MicroregionDH1_10,
                interactive: false,
    title: 'Microregion DH1<br />\
    <img src="styles/legend/MicroregionDH1_10_0.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionDH1_10_1.png" /> 12 - 27 Personas<br />\
    <img src="styles/legend/MicroregionDH1_10_2.png" /> 27 - 49 Personas<br />\
    <img src="styles/legend/MicroregionDH1_10_3.png" /> 49 - 110 Personas<br />\
    <img src="styles/legend/MicroregionDH1_10_4.png" /> 110 - 302 Personas<br />'
        });
var format_CoordinacionDoloresHidalgo_11 = new ol.format.GeoJSON();
var features_CoordinacionDoloresHidalgo_11 = format_CoordinacionDoloresHidalgo_11.readFeatures(json_CoordinacionDoloresHidalgo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionDoloresHidalgo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionDoloresHidalgo_11.addFeatures(features_CoordinacionDoloresHidalgo_11);
var lyr_CoordinacionDoloresHidalgo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionDoloresHidalgo_11, 
                style: style_CoordinacionDoloresHidalgo_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionDoloresHidalgo_11.png" /> Coordinacion Dolores Hidalgo'
            });
var group_CoordinacionDoloresRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionSDU1_5,lyr_MicroregionDH5_6,lyr_MicroregionDH4_7,lyr_MicroregionDH3_8,lyr_MicroregionDH2_9,lyr_MicroregionDH1_10,],
                                title: "Coordinacion Dolores Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionDolores_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionDolores_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionSDU1_5.setVisible(true);lyr_MicroregionDH5_6.setVisible(true);lyr_MicroregionDH4_7.setVisible(true);lyr_MicroregionDH3_8.setVisible(true);lyr_MicroregionDH2_9.setVisible(true);lyr_MicroregionDH1_10.setVisible(true);lyr_CoordinacionDoloresHidalgo_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionDoloresRezago,lyr_CoordinacionDoloresHidalgo_11];
lyr_CoordinacionDolores_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionSDU1_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionDH5_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionDH4_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionDH3_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionDH2_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionDH1_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionDoloresHidalgo_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionDolores_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionSDU1_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionDH5_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionDH4_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionDH3_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionDH2_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionDH1_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionDoloresHidalgo_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionDolores_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionSDU1_5.set('fieldLabels', {});
lyr_MicroregionDH5_6.set('fieldLabels', {});
lyr_MicroregionDH4_7.set('fieldLabels', {});
lyr_MicroregionDH3_8.set('fieldLabels', {});
lyr_MicroregionDH2_9.set('fieldLabels', {});
lyr_MicroregionDH1_10.set('fieldLabels', {});
lyr_CoordinacionDoloresHidalgo_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionDoloresHidalgo_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});