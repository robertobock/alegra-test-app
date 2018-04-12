angular.module('starter.directive-scroll-watch', [])
.directive('scrollWatch', function($rootScope, $interval) {
    return function(scope, elem, attr) {
        var start = 0;
        // this variable checks if the scroll has moved enough to emit an event to hide searchbar
        var threshold = 80;
        // this variable handles the last position of scroll
        var slideHeaderPrevious = 0;
        // timer and previous are used to calculate if the scroll is "moving" or is stopped
        var timer ;
        var previous;
        elem.bind('scroll', function(e) {
            if(!timer){
                previous = e.target.scrollTop;
                timer = $interval(function () {
                    if(e.target.scrollTop == previous){
                        $interval.cancel(timer);
                        timer = null;
                        scope.$emit("contactlist.showAddButton")
                    }else{
                        previous = e.target.scrollTop;
                    }
                }, 100);
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
