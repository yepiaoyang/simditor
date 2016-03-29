(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery",
      "simple-module",
      "simditor"], function ($, SimpleModule) {
      return (root.returnExportsGlobal = factory($, SimpleModule));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),
      require("simple-module"),
      require("simditor"));
  } else {
    root['Simditor'] = factory(jQuery,
      SimpleModule);
  }
}(this, function ($, SimpleModule) {


 

	Simditor.Toolbar.buttons.image = function(){ return }; 
    Simditor.prototype.insertJQNode = function($node) {
       
        if(!$node){
            console.error("$node is null");
            return ;
        }      
		if(!this){
		  console.error("Simditor instance  is null");
		  return;
		} 
		this.focus();
		this['selection'].editor.trigger('selectionchanged');      
		this['selection'].insertNode($node);

		this['selection'].editor.trigger('selectionchanged');
  
		return  ;

	};


return Simditor;


}));
