angular.module('starter.directive-scroll-watch', [])
.directive('scrollWatch', function($rootScope) {
    return function(scope, elem, attr) {
        var start = 0;
        var threshold = 80;
        var slideHeaderPrevious = 0;
        elem.bind('scroll', function(e) {
            console.log(e.target.scrollTop)
            if(e.target.scrollTop - start > threshold) {
                scope.$emit("contactlist.showSubHeader")
            } else {
                scope.$emit("contactlist.hideSubHeader")
            }
            if (slideHeaderPrevious >= e.target.scrollTop - start) {
                scope.$emit("contactlist.hideSubHeader")
            }
            slideHeaderPrevious = e.target.scrollTop - start;
            $rootScope.$apply();
        });
    };
});
