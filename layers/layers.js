ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-32178.535343, 103699.862942, -31416.122097, 104068.066107]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_xref_tracado_1 = new ol.format.GeoJSON();
var features_xref_tracado_1 = format_xref_tracado_1.readFeatures(json_xref_tracado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_xref_tracado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xref_tracado_1.addFeatures(features_xref_tracado_1);
var lyr_xref_tracado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xref_tracado_1, 
                style: style_xref_tracado_1,
                popuplayertitle: 'xref_tracado',
                interactive: false,
                title: '<img src="styles/legend/xref_tracado_1.png" /> xref_tracado'
            });
var format_LimitesAdmin_2 = new ol.format.GeoJSON();
var features_LimitesAdmin_2 = format_LimitesAdmin_2.readFeatures(json_LimitesAdmin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimitesAdmin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesAdmin_2.addFeatures(features_LimitesAdmin_2);
var lyr_LimitesAdmin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesAdmin_2, 
                style: style_LimitesAdmin_2,
                popuplayertitle: 'LimitesAdmin',
                interactive: false,
                title: '<img src="styles/legend/LimitesAdmin_2.png" /> LimitesAdmin'
            });
var format_LimiteExprop_3 = new ol.format.GeoJSON();
var features_LimiteExprop_3 = format_LimiteExprop_3.readFeatures(json_LimiteExprop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimiteExprop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteExprop_3.addFeatures(features_LimiteExprop_3);
var lyr_LimiteExprop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteExprop_3, 
                style: style_LimiteExprop_3,
                popuplayertitle: 'LimiteExprop',
                interactive: false,
                title: '<img src="styles/legend/LimiteExprop_3.png" /> LimiteExprop'
            });
var format_239_4 = new ol.format.GeoJSON();
var features_239_4 = format_239_4.readFeatures(json_239_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_239_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_239_4.addFeatures(features_239_4);
var lyr_239_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_239_4, 
                style: style_239_4,
                popuplayertitle: '239',
                interactive: true,
                title: '<img src="styles/legend/239_4.png" /> 239'
            });
var group_PrediosERAA = new ol.layer.Group({
                                layers: [lyr_239_4,],
                                fold: "open",
                                title: 'PrediosERAA'});
var group_LimiteExpropriacao = new ol.layer.Group({
                                layers: [lyr_LimiteExprop_3,],
                                fold: "open",
                                title: 'LimiteExpropriacao'});
var group_xrefs = new ol.layer.Group({
                                layers: [lyr_xref_tracado_1,],
                                fold: "open",
                                title: 'xrefs'});
var group_Rasters = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'Rasters'});

lyr_GoogleSatellite_0.setVisible(true);lyr_xref_tracado_1.setVisible(true);lyr_LimitesAdmin_2.setVisible(true);lyr_LimiteExprop_3.setVisible(true);lyr_239_4.setVisible(true);
var layersList = [group_Rasters,group_xrefs,lyr_LimitesAdmin_2,group_LimiteExpropriacao,group_PrediosERAA];
lyr_xref_tracado_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LimitesAdmin_2.set('fieldAliases', {'fid': 'fid', 'DICOFRE': 'DICOFRE', 'Freguesia': 'Freguesia', 'Municipio': 'Municipio', 'Ilha': 'Ilha', 'TAA': 'TAA', 'Area_T_ha': 'Area_T_ha', 'Area_EA_ha': 'Area_EA_ha', 'Distrito': 'Distrito', 'Des_Simpli': 'Des_Simpli', 'layer': 'layer', });
lyr_LimiteExprop_3.set('fieldAliases', {'LimiteExpropriacao': 'LimiteExpropriacao', });
lyr_239_4.set('fieldAliases', {'fid': 'fid', 'Parcela': 'Parcela', 'AreaTotal': 'AreaTotal', 'Artigo Matriz': 'Artigo Matriz', 'Artigo Antigo': 'Artigo Antigo', 'Descrição Predial': 'Descrição Predial', 'Morada': 'Morada', 'Nome': 'Nome', 'Contribuinte': 'Contribuinte', 'Telefone': 'Telefone', 'Observações': 'Observações', 'AreaCadernetaAtual': 'AreaCadernetaAtual', 'AreasProj_x_AreasMatriz': 'AreasProj_x_AreasMatriz', 'MatrizBupi': 'MatrizBupi', 'Indicacao': 'Indicacao', 'EspacoAgricola': 'EspacoAgricola', 'EspacoEquiInfra': 'EspacoEquiInfra', 'EspacoEspEquiInfra': 'EspacoEspEquiInfra', 'EspacoFlorestal': 'EspacoFlorestal', 'EspacoHabitacional': 'EspacoHabitacional', 'EspacoNatPaisa': 'EspacoNatPaisa', 'EspacoVerde': 'EspacoVerde', 'AreaTotExprop': 'AreaTotExprop', });
lyr_xref_tracado_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LimitesAdmin_2.set('fieldImages', {'fid': '', 'DICOFRE': '', 'Freguesia': '', 'Municipio': '', 'Ilha': '', 'TAA': '', 'Area_T_ha': '', 'Area_EA_ha': '', 'Distrito': '', 'Des_Simpli': '', 'layer': '', });
lyr_LimiteExprop_3.set('fieldImages', {'LimiteExpropriacao': '', });
lyr_239_4.set('fieldImages', {'fid': '', 'Parcela': '', 'AreaTotal': '', 'Artigo Matriz': '', 'Artigo Antigo': '', 'Descrição Predial': '', 'Morada': '', 'Nome': '', 'Contribuinte': '', 'Telefone': '', 'Observações': '', 'AreaCadernetaAtual': '', 'AreasProj_x_AreasMatriz': '', 'MatrizBupi': '', 'Indicacao': '', 'EspacoAgricola': '', 'EspacoEquiInfra': '', 'EspacoEspEquiInfra': '', 'EspacoFlorestal': '', 'EspacoHabitacional': '', 'EspacoNatPaisa': '', 'EspacoVerde': '', 'AreaTotExprop': '', });
lyr_xref_tracado_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHandle': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_LimitesAdmin_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'DICOFRE': 'inline label - visible with data', 'Freguesia': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Ilha': 'inline label - visible with data', 'TAA': 'inline label - visible with data', 'Area_T_ha': 'inline label - visible with data', 'Area_EA_ha': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Des_Simpli': 'inline label - visible with data', 'layer': 'inline label - visible with data', });
lyr_LimiteExprop_3.set('fieldLabels', {'LimiteExpropriacao': 'inline label - visible with data', });
lyr_239_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'Parcela': 'inline label - visible with data', 'AreaTotal': 'inline label - visible with data', 'Artigo Matriz': 'inline label - visible with data', 'Artigo Antigo': 'inline label - visible with data', 'Descrição Predial': 'inline label - visible with data', 'Morada': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Contribuinte': 'inline label - visible with data', 'Telefone': 'inline label - visible with data', 'Observações': 'inline label - visible with data', 'AreaCadernetaAtual': 'inline label - visible with data', 'AreasProj_x_AreasMatriz': 'inline label - visible with data', 'MatrizBupi': 'inline label - visible with data', 'Indicacao': 'inline label - visible with data', 'EspacoAgricola': 'inline label - visible with data', 'EspacoEquiInfra': 'inline label - visible with data', 'EspacoEspEquiInfra': 'inline label - visible with data', 'EspacoFlorestal': 'inline label - visible with data', 'EspacoHabitacional': 'inline label - visible with data', 'EspacoNatPaisa': 'inline label - visible with data', 'EspacoVerde': 'inline label - visible with data', 'AreaTotExprop': 'inline label - visible with data', });
lyr_239_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});