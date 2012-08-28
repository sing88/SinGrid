////////////////
// CLASE GRID //
////////////////
// SingLabzGrid
// Es una clase que simplifica un poco el uso de jqGrid
// 
///////////////////
function SingGrid(table){
//    var tabla;
    this.colNames = [];
    this.colModels = [];
    this.datatype = "local";
    this.tabla = table;
    this.colNames = [];
    this.viewrecords = true;
    this.numrows = 10;
    //Obtener la fila seleccionada
    //Retorna el indice seleccionado
    this.getSelectedRow = function(){
        var id = jQuery(this.tabla).getGridParam('selrow');
        if(id == null)
            return  null;
        else
            return id;
    }

    //Obtener las filasseleccionadas
    // Retorna un array con los indices seleccionados
    this.getSelectedRows = function(){
        var ids = jQuery(this.tabla).getGridParam('selarrrow');
        if(ids == null)
            return  null;
        else
            return ids;
    }
    
    // Limpiar las filas del grid
    this.clearGrid = function(){
        jQuery(this.tabla).clearGridData();
    }
    
    // Actualizar Grid
    this.gridReload = function (data){
        jQuery(this.tabla).setGridParam({
            data: data,
            datatype:'local'
        }).trigger('reloadGrid');
    }
    
    //  Obtengo el objeto de la fila seleccionada
    this.getSelectObject = function(){
        var id = this.getSelectedRow();
        if(id == null){
            alert('Selecciona una fila');
            return false;
        }
        var rep = jQuery(this.tabla).jqGrid('getRowData',id);
        return rep;
    }
    
    // Obtengo la cantidad de filas del jqGrid
    this.getRowCount = function(){
        return jQuery(this.tabla).jqGrid('getGridParam','records');
    }
    
    // Agrego un Model
    this.addColumn = function(model){
        this.colNames.push(model);
    }
    
    // Agrego un Model
    this.addModel = function(model){
        this.colModels.push(model);
    }
    
    // Seteo el tipo de datos
    this.setDataType = function(dataType){
        this.datatype = dataType;
    }
    this.getDataType = function(){
        return this.datatype;
    }
    
    
    // Eliminar Fila
    this.removeRow =  function(id){
//        jQuery(this.tabla).jqGrid('delRowData',id);
        jQuery(this.tabla).delRowData(id);
    }
    
    // Elimina la fila seleccionada
    this.removeRowSelected = function(){
        var id = this.getSelectedRow();
        if(id == null){
            alert('Selecciona una fila');
            return false;
        }
        jQuery(this.tabla).delRowData(id);
    }
    
    // Setear viewrecords
    this.setViewRecords = function(visible){
        this.viewrecords = visible;
    }
       
    this.setNumRows = function(visible){
        this.numrows = visible;
    }
    
    
/*
 *jQuery('#tblMarca').jqGrid({
        datatype:'local',
        colNames:['Id','Nombre','Activo'],
        colModel:[
            {name:'mar_id',index:'mar_id',width:55},
            {name:'mar_nombre',index:'mar_nombre',width:200},
            {name:'mar_activo',index:'mar_activo',width:40}
        ],
        rowNum:10,
        viewrecords:true,
        loadError : function(xhr, st, str){
            alert('Ha ocurrido un error al traer datos de Colaborador..','Aviso');
        }
    });
    jQuery("#tblMarca").jqGrid('navGrid','#divMarcaPager',{edit:false,add:false,del:false});
 **/    
    
    // Display
    
    this.displayGrid = function(){
        jQuery(this.tabla).jqGrid({
            datatype: this.datatype,
            colNames: this.colNames,
            colModel: this.colModels,
            rowNum:this.numrows,
            viewrecords:this.viewrecords,
        loadError : function(xhr, st, str){
            alert('Ha ocurrido un error al traer datos de Colaborador..','Aviso');
        }
        });
    }
};
