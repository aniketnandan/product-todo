$("document").ready(function(){
    $("#Submit").click(function(e){
	e.preventDefault();
	var productListArray=[];
	var productArray=[];
	var priceArray=[];
	var countProduct=0;
	var countPrice=0;

	$("input.product_name").each(function(i,el){
	    productArray.push($(el).val().toLowerCase());
	    countProduct+=1;
	});

	$("input.product_price").each(function(i,el){
	    priceArray.push($(el).val());
	    countPrice+=1;
	});
	

	for(var i=0;i<countProduct;i++)
	{
	    productListArray.push({name:productArray[i],price:priceArray[i]});
	    $(".ProductList .ul").append("<li>Product Name is:  " + productListArray[i].name + "=>Price is:  " + productListArray[i].price + "</li>");
	}

	console.log(productListArray);
	console.log(productArray);
	console.log(priceArray);
	
	$(".ul li").click(function() {
	    $(this).fadeOut("slow");
	}); //fadeOut close
    });//submit close
    
    $("#Submit_another").click(function(e){
	e.preventDefault();
	var row=$("<tr> </tr>");
	row.append("<td><input name=product_name value='' class=product_name></td>");
	row.append("<td><input name=product_price value='' class=product_price></td>");
	$(".list").append(row);
    });//Submit Another closed

    $("#clear").click(function(){
	$("form")[0].reset();
    });//clear closed
});//ready closed
