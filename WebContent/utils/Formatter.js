jQuery.sap.declare("com.kloudData.utils.Formatter");


com.kloudData.utils.Formatter = {
		removeZeros:function(value){
			if(value == null || value == "undefined")
				return
			var removeZeros = value.split(".");
			return removeZeros[0]+".00"
		
		
}
}