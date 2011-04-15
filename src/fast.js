/**
* Copyright (c) 2011 Markus Kohlhase (mail@markus-kohlhase.de)
*/

var fast = fast || (function( window, undefined ){
  
  // container for the modules
  var modules = { };
    
  var init = function(){
    
    scaleApp.register("collection", fast.modules.collection.controller,{
      models: { 
	collection: fast.modules.collection.collection,
	entry: fast.modules.collection.entry
      }
    });
    
    scaleApp.register("cli", fast.modules.cli.controller,{
      models: { model: fast.modules.cli.model },
      views: { view: fast.modules.cli.view },
      templates: { cli: "modules/cli/cli.html" },
      i18n: fast.modules.cli.i18n      
    }); 
    
    scaleApp.register("list", fast.modules.list.controller,{
      models: { model: fast.modules.list.model },
      views: { view: fast.modules.list.view },
      templates: { list: "modules/list/list.html" },
      
      i18n: fast.modules.list.i18n      
    }); 
    
    scaleApp.startAll();  
    
  };
  
  return ({ 
    init: init, 
    modules: modules     
  });
  
})( window );

$(document).ready(function(){
  fast.init();  
});