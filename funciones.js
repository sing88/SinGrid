jQuery(document).ready(function(){
    
//  Usando jqGrid

    jQuery('#tblSingGrid').jqGrid({
        datatype: 'local',
        colNames: ['id','Nombre','Apellidos','Direccion'],
        colModel: [{
            name:'id',
            index:'id',
            width:55
        },
        {
            name:'Nombre',
            index:'Nombre',
            width:100
        },
        {
            name:'Apellidos',
            index:'Apellidos',
            width:100
        },
        {
            name:'Direccion',
            index:'Direccion',
            width:100
        }],
        rowNum: 10,
        viewrecords: true,
        loadError: function(xhr, st, str) {
            alert('Ha ocurrido un error ...', 'Aviso');
        }
    });
        
//  Usando SingGrid

    var tabla2 = new SingGrid('#tblSingGrid2');
    tabla2.addColumn('Id',{name:'id',index:'id',width:55});
    tabla2.addColumn('Nombre',{name:'Nombre',index:'Nombre',width:100});
    tabla2.addColumn('Apellidos',{name:'Apellidos',index:'Apellidos', width:100});
    tabla2.addColumn('Direccion',{name:'Direccion',index:'Direccion', width:100});
    tabla2.setDataType('local');
    tabla2.displayGrid();
   
   
   
});