sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/kloudData/MyRouter",
    "sap/ui/model/json/JSONModel"
], function (UIComponent,Router,JSONModel) {
    "use strict";
    return UIComponent.extend("com.kloudData.Component", {
    	metadata: {
    		name: "First Project",
    		version: "1.0",
    		includes: [],
    		dependencies: {
    			libs: ["sap.m", "sap.ui.layout"],
    			components: []
    		},

    		rootView: "com.kloudData.view.App",

    		config: {
    			resourceBundle: "i18n/messageBundle.properties",
    			
    		},

    		routing: {
    			config: {
    				routerClass: Router,
    				viewType: "XML",
    				viewPath: "com.kloudData.view",
    				clearTarget: false,
    				transition: "slide"
    			},
    			routes: [{
    				pattern: "",
    				name: "Home",
    				view: "home",
    				viewLevel: 1,
    				targetAggregation: "pages",
    				targetControl: "idAppControl",
    				
    			},
    			
    			{
    				pattern: "/ProductsDetail",
    				name: "Prodcuts",
    				view: "ProductsDetails",
    				viewLevel: 1,
    				targetAggregation: "pages",
    				targetControl: "idAppControl",
    				
    			}
    			]
    		}
    	},

    	init: function() {
    		UIComponent.prototype.init.apply(this, arguments);

    		var mConfig = this.getMetadata().getConfig();

    		
    		var oRootPath = jQuery.sap.getModulePath("com.kloudData");

    		// Set i18n model
    		var i18nModel = new sap.ui.model.resource.ResourceModel({
    			bundleUrl: [oRootPath, mConfig.resourceBundle].join("/")
    		});
    		this.setModel(i18nModel, "i18n");
    		
    		var oModel = new sap.ui.model.json.JSONModel("http://services.odata.org/Northwind/Northwind.svc/Products");
    		this.setModel(oModel);

    		

    		// Set device model
    		var oDeviceModel = new JSONModel({
    			isTouch: sap.ui.Device.support.touch,
    			isNoTouch: !sap.ui.Device.support.touch,
    			isPhone: sap.ui.Device.system.phone,
    			isNoPhone: !sap.ui.Device.system.phone,
    			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
    			listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
    		});
    		oDeviceModel.setDefaultBindingMode("OneWay");
    		this.setModel(oDeviceModel, "device");

    		this.getRouter().initialize();

    	},


  });
});




