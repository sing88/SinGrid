////////////////
// CLASE GRID //
////////////////
// SingGrid
// Es una clase que simplifica un poco el uso de jqGrid (www.trirand.com)
// www.singlabz.com
// Licence: GPL 3
///////////////////

function SingGrid(table) {
    //    var tabla;
    this.colNames = [];
    this.colModels = [];
    this.datatype = "local";
    this.tabla = table;
    this.viewrecords = true;
    this.numrows = 10;
};
//Obtener la fila seleccionada
//Retorna el indice seleccionado
SingGrid.prototype.getSelectedRow = function() {
    var id = jQuery(this.tabla).getGridParam('selrow');
    if (id == null) {
        return null;
    } else {
        return id;
    }
}

//Obtener las filasseleccionadas
// Retorna un array con los indices seleccionados
SingGrid.prototype.getSelectedRows = function() {
    var ids = jQuery(this.tabla).getGridParam('selarrrow');
    if (ids == null) {
        return null;
    } else {
        return ids;
    }
}

// Limpiar las filas del grid
SingGrid.prototype.clearGrid = function() {
    jQuery(this.tabla).clearGridData();
}

// Actualizar Grid
SingGrid.prototype.gridReload = function(data) {
    jQuery(this.tabla).setGridParam({
        data: data,
        datatype: 'local'
    }).trigger('reloadGrid');
}

//  Obtengo el objeto de la fila seleccionada
SingGrid.prototype.getSelectObject = function() {
    var id = this.getSelectedRow();
    if (id == null) {
        alert('Selecciona una fila');
        return false;
    }
    return jQuery(this.tabla).jqGrid('getRowData', id);
}

// Obtengo la cantidad de filas del jqGrid
SingGrid.prototype.getRowCount = function() {
    return jQuery(this.tabla).jqGrid('getGridParam', 'records');
}

//// Agrego un Model
//SingGrid.prototype.addColumn = function(model) {
//    this.colNames.push(model);
//}
//
//// Agrego un Model
//SingGrid.prototype.addModel = function(model) {
//    this.colModels.push(model);
//}

// Seteo el tipo de datos
SingGrid.prototype.setDataType = function(dataType) {
    this.datatype = dataType;
}
// Retorno el tipo de datos
SingGrid.prototype.getDataType = function() {
    return this.datatype;
}


// Eliminar Fila
SingGrid.prototype.removeRow = function(id) {
    //        jQuery(this.tabla).jqGrid('delRowData',id);
    jQuery(this.tabla).delRowData(id);
}

// Elimina la fila seleccionada
SingGrid.prototype.removeRowSelected = function() {
    var id = this.getSelectedRow();
    if (id == null) {
        alert('Selecciona una fila');
        return false;
    }
    jQuery(this.tabla).delRowData(id);
}

// Setear viewrecords
SingGrid.prototype.setViewRecords = function(visible) {
    this.viewrecords = visible;
}

SingGrid.prototype.setNumRows = function(visible) {
    this.numrows = visible;
}

// Agregar Nombre de Columna y Model
SingGrid.prototype.addColumn = function(model,column) {
    this.colNames.push(model);
    this.colModels.push(column);
}

//Columns
SingGrid.prototype.setColumns = function(columns){
    this.colNames = columns;
}
// Models
SingGrid.prototype.setModels = function(models){
    this.colModels = models;
}


//Display
SingGrid.prototype.displayGrid = function() {
    if (this.colNames < 1 || this.colModel < 1) {
        if (console && 'log' in console) console.log("Not able to display a grid");
    } else {
        jQuery(this.tabla).jqGrid({
            datatype: this.datatype,
            colNames: this.colNames,
            colModel: this.colModels,
            rowNum: this.numrows,
            viewrecords: this.viewrecords,
            loadError: function(xhr, st, str) {
                alert('Ha ocurrido un error ...', 'Aviso');
            }
        });
    }
}