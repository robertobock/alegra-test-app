angular.module('starter.directive-scroll-watch', [])
.directive('scrollWatch', function($rootScope, $interval) {
    return function(scope, elem, attr) {
        var start = 0;
        var threshold = 80;
        var slideHeaderPrevious = 0;
        var timer ;
        var firstScroll ;
        elem.bind('scroll', function(e) {
            if(!timer){
                checkPrevious = e.target.scrollTop;
                timer = $interval(function () {
                    if(e.target.scrollTop == checkPrevious){
                        $interval.cancel(timer);
                        timer = null;
                        scope.$emit("contactlist.showAddButton")
                    }
                }, 500);
            }
            scope.$emit("contactlist.hideAddButton");
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
