jQuery.sap.require("com.kloudData.utils.Formatter");
sap.ui.controller("com.kloudData.controller.ProductsDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductsDetails
*/
	onInit: function() {
        var that = this;
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this.handleRouteMatch, this);
        
        //onMouse event function
       this.getView().byId("declarationInputId").attachBrowserEvent("mouseenter", function(oEvent) {
    //get your model and do whatever you want:
   that.getView().byId("enableButton").setEnabled(!that.getView().byId("enableButton").getEnabled());
       });
	},
	handleRouteMatch:function(route){
		if (route.getParameter('name') != "Prodcuts")
			return;
		//var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/Northwind/Northwind.svc/Products");
		var oModel = this.getOwnerComponent().getModel();
		this.getView().byId("idProductsTable").setModel(oModel);
	},
	onInputValueChanges:function(){
		var query  = this.getView().byId('declarationInputId').getValue();
		var oTable = this.getView().byId('idProductsTable');
		  var binding = oTable.getBinding('rows');
		  var aFilter = [];
		  if(query.length != 0){
			  //Create a filter for this binding
			var oFilter1 = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, query);
			aFilter.push(oFilter1);
			binding.filter(aFilter,sap.ui.model.FilterType.Application);
		  }
		  else{
			  binding.filter([]);
			 
		  }

		 },
		 onPress:function(){
				this.router.navTo("Home", {})
			},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.ProductsDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.ProductsDetails
*/
	/*onAfterRendering: function() {
    	}*/
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.ProductsDetails
*/
//	onExit: function() {
//
//	}

});
