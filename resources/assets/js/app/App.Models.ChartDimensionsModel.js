;(function() {		
	"use strict";
	owid.namespace("App.Models.ChartDimensionsModel");
	
	App.Models.ChartDimensionsModel = Backbone.Model.extend( {

		urlRoot: Global.rootUrl + '/chartTypes/',

		defaults: {},

		loadConfiguration: function( chartTypeId ) {

			this.set( "id", chartTypeId );
			this.fetch( {
				success: function( response ) {
				}
			} );

		}

	} );
})();