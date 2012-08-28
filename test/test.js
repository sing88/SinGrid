module("Sing Grid Tests",{
	setup: function(){
		this.singGrid=new SingGrid('#tblSingGrid');
	},
	tearDown:function(){
		//Nothing right now
	}
});
test("Valores se inicializan en el default",function(){
	expect(8);
	ok(this.singGrid.colNames instanceof Array, "ColNames es un arreglo");
	equal(this.singGrid.colNames.length, 0, "colNames Empieza vacio");
	ok(this.singGrid.colModels instanceof Array, "colModels es una arreglo");
	equal(this.singGrid.colModels.length, 0, "colModels Empieza vacio");
	equal(this.singGrid.datatype, "local", "Datatype es local");
	equal(this.singGrid.tabla, "#tblSingGrid", "El Query Selector es correcto");
	ok(this.singGrid.viewrecords,"View Records es true");
	equal(this.singGrid.numrows, 10,"NumRows se inicializa en 10");
	
});
test("Add Column agrega columnas", function(){
	expect(2);
	this.singGrid.addColumn("Name");
	equal(this.singGrid.colNames.length, 1, "Adding a Column works")
	this.singGrid.addColumn("Other");
	this.singGrid.addColumn("YetOther");
	equal(this.singGrid.colNames.length, 3, "Adding many Column works")
});
test("Add Model agrega modelos",function(){
	expect(2);
	this.singGrid.addModel({name:'id',index:'id',width:55});
	equal(this.singGrid.colModels.length,1,"Adding a model works");
	this.singGrid.addModel({name:'apellido',index:'apellido',width:55});
	this.singGrid.addModel({name:'test',index:'test',width:55});
	equal(this.singGrid.colModels.length,3,"Adding many model works");
});
test("A grid is displayed",function(){
	expect(1);
	this.singGrid.addColumn('Id');
	this.singGrid.addColumn('Nombre');
	this.singGrid.addColumn('Apellidos');
	this.singGrid.addColumn('Direccion');
	this.singGrid.addModel({name:'id',index:'id',width:55});
	this.singGrid.addModel({name:'Nombre',index:'Nombre',width:100});
	this.singGrid.addModel({name:'Apellidos',index:'Apellidos',width:100});
	this.singGrid.addModel({name:'Direccion',index:'Direccion',width:100});
	this.singGrid.displayGrid();
	equal($('#gbox_tblSingGrid').length, 1, "Grid has been displayed");
});
test("No columns means no table is displayed", function(){
	expect(1);
	this.singGrid.displayGrid();
	equal($('#gbox_tblSingGrid').length, 0, "No error has been thrown");
})