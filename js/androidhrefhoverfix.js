/*
 * iPad hover mwnua emulation
 * Copyright (c) 2013 Ewan Marshall
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery(document).ready(function($) {
	
	function cancel_follow(event) {
		var $target=$(event.currentTarget);
		if($target.next().css('display') == "none" || $target.next().css('visibility') == "hidden") { //Find if the menu is currently hidden.
			$target.one('click.ipadhoveremu', function(event) {
				event.preventDefault();
			});
			setTimeout( function(){
				$target.off('click.ipadhoveremu')
			} , 500 ); //clear the event anyway on the iPad as the click didn't fire.
		}
	}

	$(document).on('touchstart', 'a.sf-with-ul' , function(event){ 
		cancel_follow(event)
	});
});