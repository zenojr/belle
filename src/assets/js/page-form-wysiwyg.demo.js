/*   
Template Name: Source Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.4.0
Author: Sean Ngu
Website: http://www.seantheme.com/source-admin-v1.4/admin/
*/

var handleSummernote = function () {
    "use strict";
    
    $('#summernote').summernote({
        height: $('#summernote').attr('data-height')
    });
};


/* Application Controller
------------------------------------------------ */
var PageDemo = function () {
	"use strict";
	
	return {
		//main function
		init: function () {
		    handleSummernote();
		}
    };
}();