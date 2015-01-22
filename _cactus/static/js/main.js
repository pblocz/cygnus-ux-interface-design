/*
  Mini-módulo para renderizar de manera dinámica algunos datos
  Preguntar a pablo por funcionamiento
*/
var dynamic_render = (function(doc,win$){ 

    _.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g,
	evaluate: /\{%([\s\S]+?)%\}/g
    };

    var ret = {}
    var templates;

    function byString (o, s) {
	s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	s = s.replace(/^\./, '');           // strip a leading dot
	var a = s.split('.');
	while (a.length) {
    	    var n = a.shift();
    	    if (n in o) {
    		o = o[n];
    	    } else {
    		return;
    	    }
	}
	return o;
    }

    function render_to_template(template,variable) {
	console.log(variable,template);
	var template = templates.filter('#'+template).eq(0).text();
	console.log(_.template(template)({"data":['sadf','sadf']}));
	return _.template(template)({"data":byString(window.APP_DATA,variable)});
    }

    $(function(){
	templates = $("script[type='text/template']");
	$('.dynamic-render,.drender').each(function(){
	    var template = $(this).data('template'),
	    variable = $(this).data('var');
	    if(template) $(this).html(render_to_template(template,variable));
	    else $(this).html(byString(window.APP_DATA,variable));
	});
    });

    return {'templates': function(){ return templates; }, "byString": byString, "render_to_template": render_to_template };
})(document,window,jQuery);


// Definición del calendario
$(function(){
    function myDateFunction(id) {
        var date = $("#" + id).data("date");
        var hasEvent = $("#" + id).data("hasEvent");
        console.log('You clicked on date ' + date);
	return true;
    }

    $("#app-calendar").zabuto_calendar({
	language: "es", 
	data: APP_DATA.notifications.calendar,
	action: function() { return myDateFunction(this.id); }
    });
})

// Definición del selectpicker de la busqueda en la barra superior
$(function(){
    $('.search-select').selectpicker({'showSubtext': true});
})
