sap.ui.controller("com.kloudData.controller.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.home
*/
	onInit: function() {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this.handleRouteMatch, this);
	},
	handleRouteMatch:function(route){
		if (route.getParameter('name') != "Home")
			return;
		//var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/Northwind/Northwind.svc/Products");
		var oModel = this.getOwnerComponent().getModel();
		this.getView().byId("samplevizframe").setModel(oModel);
		this.getView().byId("idVizFrame").setModel(oModel);
	},


	
	
	
	onButtonPress:function(){
		this.router.navTo("Prodcuts", {})
	},

	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.home
*/
//	onExit: function() {
//
//	}

});
