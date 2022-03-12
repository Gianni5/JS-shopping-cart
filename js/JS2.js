// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
/*jshint esversion: 6 */



function showProduct(){
	'use strict';
	// assign JSON file to a variable data
	var data = nikkiNacksProducts;
	if (data != null )
	{   //creating a Header for the table 
		var header = "<tr><th>id</th><th>Name</th><th>Type</th><th>New Release</th><th>Price</th><th>Qty</th></tr>";
		// this two variable below are the same split in two 
		var qtyElementStart = "<input type='number'";
		var qtyElementEnd = "class='quantity' min='0'  value='0' max='30' />";
		var list = "<table id='myTable'>" + header;
		
		// lopping throught all products 
		for (var i = 0 , count = data.length; i < count; i++ )
		{
		
			// Creating a table called list that contain all products
			list +="<tr>"+
			"<td id='proId'>" +data[i].productId + "</td>"+
			"<td id='proNam'>" + data[i].productName + "</td>"+
			"<td id='proTy'>" + data[i].productType + "</td>"+
			"<td id='new'>" + data[i].newRelease + "</td>"+
			"<td id='proPr'>"+ "$" + data[i].productPrice.toFixed(2) + "</td>"+
											    //assign ID="data[i].productId to quantity
			"<td id='proQty'>" + qtyElementStart + " id='" + data[i].productId + "' " + qtyElementEnd +   "</td>";
	
	        
			
		}
    list+= "</tr></table>";
    
	// display table in HTML where ID="itemlist"
	document.getElementById("itemlist").innerHTML = list;
	
		
    }

    

	
	
}


function showMovies(){
	'use strict';
	var data = nikkiNacksProducts;
	if (data != null ){
		var header = "<tr><th>id</th><th>Name</th><th>Type</th><th>New Release</th><th>Price</th><th>Qty</th></tr>";
		var qtyElementStart = "<input type='number'";
		var qtyElementEnd = "class='quantity' min='0'  value='0' max='30' />";
		var list = "<table id='myTable'>" + header;
		
		// lopping throught all products 
		for (var i = 0 , count = data.length; i < count; i++ ){
			
			// Creating a table called list with all Movies products  
			if(data[i].productType == "Movie"){
				list +="<tr>"+
				"<td id='proId'>" +data[i].productId + "</td>"+
				"<td id='proNam'>" + data[i].productName + "</td>"+
				"<td id='proTy'>" + data[i].productType + "</td>"+
				"<td id='new'>" + data[i].newRelease + "</td>"+
				"<td id='proPr'>"+ "$" + data[i].productPrice.toFixed(2) + "</td>"+
				"<td id='proQty'>" + qtyElementStart + " id='" + data[i].productId + "' " + qtyElementEnd +   "</td>";
		
	        }
			
		}
		list+= "</tr></table>";
    
	// display table in HTML where ID="itemlist"
	document.getElementById("itemlist").innerHTML = list;	
  }    	


}

function showSongs(){
	'use strict';
	var data = nikkiNacksProducts;
	if (data != null )
	{
		var header = "<tr><th>id</th><th>Name</th><th>Type</th><th>New Release</th><th>Price</th><th>Qty</th></tr>";
		var qtyElementStart = "<input type='number'";
		var qtyElementEnd = "class='quantity' min='0'  value='0' max='30' />";
		var list = "<table id='myTable'>" + header;
		
		// lopping throught all products 
		for (var i = 0 , count = data.length; i < count; i++ )
		{    
			// Creating a table called list with all Songs products
			if(data[i].productType == "Song")
			{
				list +="<tr>"+
				"<td id='proId'>" +data[i].productId + "</td>"+
				"<td id='proNam'>" + data[i].productName + "</td>"+
				"<td id='proTy'>" + data[i].productType + "</td>"+
				"<td id='new'>" + data[i].newRelease + "</td>"+
				"<td id='proPr'>"+ "$" + data[i].productPrice.toFixed(2) + "</td>"+
				"<td id='proQty'>" + qtyElementStart + " id='" + data[i].productId + "' " + qtyElementEnd +   "</td>";
		
	        }
			
		}
    list+= "</tr></table>";
	
	// display table in HTML where ID="itemlist"
	document.getElementById("itemlist").innerHTML = list;
		
    }

    
	
}

function selectedProduct(){
  	'use strict';
	// creating a new object call myobj
	var myobj = {};
	// creating a new header for the new table 
	var header = "<tr><th>Name</th><th>Price</th><th>Qty</th></tr>";
	var list = "<table id='myTable'>" + header;
	// creating a new array called myTableList
	var myTableList= [];
	// get the previous table rows by ID
	var table = document.getElementById('myTable').rows;
	 
	 // looping throught all products in table 
	for (var i = 0; i < table.length; i++){
		
		// getting all products where the value is > 0 by looping throught the realated cells
		if(parseInt(table[i].cells[5].lastChild.value) > 0){
			var name = table[i].cells[1].innerHTML;
			var price = table[i].cells[4].innerHTML;
			var quantity = table[i].cells[5].lastChild.value;
			// push in a new array the object with the value > than 0
			myTableList.push(myobj);
			
			// creating a new table 
			list +="<tr>";
			list+="<td id='proNam'>" + `${name}` + "</td>";
			list+="<td id='proPr'>" + `${price}` + "</td>";
			list+="<td id='proQty'>"+`${quantity}`+"</td>";
			
			
		}
		
	}
	list+= "</tr></table>";
	
	// display table in HTML where ID="itemlist"
	document.getElementById("itemlist").innerHTML = list;
  }	

	




	
	

function calculate() {
	'use strict';
	
	// creating variable with value 0 
	var totalPrice = 0; 
	// creating variable with value 0 
	var total = 0;
	// getting the previous table rows by id 
	var table = document.getElementById('myTable').rows;
	// creating variable with value 0 
	var quantity = 0;
	// looping throught the table 
    for (var i = 0; i< table.length; i++){ 
		// getting the productId by cells
	    var myId = table[i].cells[0].innerHTML;
		// getting the productPrice by cells
		var price = table[i].cells[4].innerHTML;
		if(parseInt(myId)){
			// assign to the quantity the value 
			quantity= parseInt(document.getElementById(`${myId}`).value);
		    var ItemPrice = parseFloat(price.substring(1));
			total = ItemPrice * quantity;
			totalPrice += total;
		}	
		
	}
	
	selectedProduct();
	
    document.getElementById('Total').innerHTML = `<b>Total: $${totalPrice.toFixed(2)}</b>`;

		
   
			    
}	// End of calculate() function.




function printq(){
	
	// hiding all unwanted elements of HTML page 
	document.getElementById("offer").style.display = "none";
	document.getElementById("search").style.display = "none";
	document.getElementById("headerLinks").style.display = "none";
	document.getElementById("buttons").style.display = "none";
	document.getElementById("menubar").style.display = "none";
	document.getElementById("foot").style.display = "none";
	window.print();
}

function init(){
	'use strict';
	document.getElementById("movies").addEventListener("click", showMovies);
	document.getElementById("songs").addEventListener("click", showSongs);
	document.getElementById("allproducts").addEventListener("click", showProduct);
	document.getElementById("submit").addEventListener("click", calculate);
	document.getElementById("printQuote").addEventListener("click", printq);
	
}


window.onload = init();

