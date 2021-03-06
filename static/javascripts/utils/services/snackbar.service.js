(function($, _) {
    'use strict';
    
    angular
        .module('thinkster.utils.services')
        .factory('Snackbar', Snackbar);

    function Snackbar() {
        var Snackbar = {
            error: error,
            show: show
        };
        
        return Snackbar;
        
        /**
         * @name _snackbar
         * @desc Display a snackbar
         * @param {string} content The content of a snackbar
         * @param {Object} options Options for displaying the snackbar
         */
        function _snackbar(content, options) {
            options = _.extend({ timeout: 3000 }, options);
            options.content = content;
            
            $.snackbar(options);
        }
        
        /** 
         * @name error
         * @desc Display an error snackbar
         * @param {string} content The content of the snackbar
         * @param {Object} options Options for displaying the snackbar
         * @memberOf thinkster.utils.services.Snackbar
         */
        function error(content, options) {
            console.log("why am i here");
            _snackbar('Error: ' + content, options);
        }
        
        /** 
         * @name show
         * @desc Display a standard snackbar
         * @param {string} content The content of the snackbar
         * @param {Object} options The options for displaying the snackbar
         * @memberOf thinkster.utils.services.Snackbar
         */
        function show(content, options) {
            _snackbar(content, options);
        }
    }
})($, _);