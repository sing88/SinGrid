jQuery(document).ready(function(){
   var tabla = new SingGrid('#tblSingGrid');
   tabla.addColumn('Id');
   tabla.addColumn('Nombre');
   tabla.addColumn('Apellidos');
   tabla.addColumn('Direccion');
   tabla.addModel({name:'id',index:'id',width:55});
   tabla.addModel({name:'Nombre',index:'Nombre',width:100});
   tabla.addModel({name:'Apellidos',index:'Apellidos',width:100});
   tabla.addModel({name:'Direccion',index:'Direccion',width:100});
   tabla.setDataType('local');
   tabla.displayGrid();
});