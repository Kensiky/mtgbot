function adminicaMobile(){

    var $selectMain = $('<select class="full_width">').appendTo('#mobile_nav .main');
    //var $selectSide = $('<select class="full_width">').appendTo('#mobile_nav .side');


    $('#nav_top li').each(function() {
        var $li    = $(this),
            $a     = $li.find('> a'),
            $l	   = $a.children('span:not(".alert")').text(),
            $p     = $li.parents('li'),
            prefix = new Array($p.length + 1).join('-');

        if ( $(this).children('a').hasClass("hide_mobile") ){

        }
        else if ( ($(this).children('a').attr("href")) == "#" ){
        	var $option = $('<optgroup>')
	            .attr("label",prefix + ' ' + $l)
	            .appendTo($selectMain);
        }
        else{
	        var $option = $('<option>')
	            .text(prefix + ' ' + $a.children('span:not(".alert")').text())
	            .val($a.attr('href'))
	            .appendTo($selectMain);

	        if ($li.hasClass('current')) {
	            $option.attr('selected', 'selected');
	        }
        }
    });

    /*$('#sidebar .side_accordion li').each(function() {
        var $li    = $(this),
            $a     = $li.find('> a'),
            $p     = $li.parents('li'),
            prefix = new Array($p.length + 1).join('-');

        var $option = $('<option>')
            .text(prefix + ' ' + $a.text())
            .val($a.attr('href'))
            .appendTo($selectSide);

        if ($li.hasClass('current')) {
            $option.attr('selected', 'selected');
        }
    });*/


    $("#mobile_nav div select").change(function(){
    	theLink = $(this).val();
    	console.log(theLink);
    	$("a[href='" + theLink + "'] ").css("outline", "1px solid red").trigger("click");
    	location.href = theLink;
    	//window.location = theLink;
    });


}
