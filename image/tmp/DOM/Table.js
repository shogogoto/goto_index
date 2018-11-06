//records: DBのrecordの配列
define(function(require){
	var iDocument = require("DOM/iDocument");
	
	var Table	=	function Table( records ){
		this.records	=	records;	// collection
		this.self	=	toTable(records);
	};
	inherits( Table, iDocument );
	
//----------------------------------------------------------------------------
	//arr 同じプロパティを持つオブジェクトの配列
	//arrをDB由来なら当然そうなる
	var	toTable	= function(arr){	
		var table = document.createElement("table");
		table.appendChild(toTHead(arr));
		arr.forEach(function(item){
			table.appendChild(toTRow(item));
		});
		return table;
	};
	var toTRow	= function(obj){
		var tr	= document.createElement("tr");
		var val;
		var tNode;
		for(val in obj){
			if(obj.hasOwnProperty(val)){
				var td	= tr.insertCell(tr.cells.length);
				tNode	= document.createTextNode(obj[val]);
				td.appendChild(tNode);
			}
		}
		return tr;
	};
	
	// objが1つでも[ obj ]を引数とせよ
	var toTHead	= function(arr){
		var tr	=	document.createElement("tr");
		var th;
		var tNode;
		var val;		
		//forEachでbreakが使えなかった
		console.log(arr);
		arr.some(function(obj){
			for(val in obj){
				if(obj.hasOwnProperty(val)){					
					th	=	document.createElement("th");
					tNode	= document.createTextNode(val);
					th.appendChild(tNode);
					tr.appendChild(th);
				}
			}
			return true;
		});
		return tr;
	};
	
	return Table;
});