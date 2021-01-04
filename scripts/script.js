function clearCheck(){
	var check = document.getElementsByName("check");
	for(i=0; i<check.length; i++){
		check[i].checked = false;
	}
}