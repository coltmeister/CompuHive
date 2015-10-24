angular.module('rv.directives', [])

.directive('ballAnimation', function($interval){

        return {
            restrict: 'E',
            replace: false,
            templateUrl: '/app/templates/animationdemo.html',
            scope: {},
            link: function(scope, element, attrs) {

                //var svg = d3.select("body")
                //    .append("svg")
                //    .attr("width", '300px')
                //    .attr("height", '300px');

                var svg = d3.select("#ball-animation")

                var circle1 = svg.append('circle');
                var circle2 = svg.append('circle');
                var circle3 = svg.append('circle');



                circle1
                    .attr('cx', 440)
                    .attr('cy', 10)
                    .attr('r', 10)

                circle2
                    .attr('cx', '225')
                    .attr('cy', '150')
                    .attr('r', 10)

                circle3
                    .attr('cx', 10)
                    .attr('cy', 290)
                    .attr('r', 10)

                var rightBound = 440
                var leftBound = 10

                function circle1MoveLeft() {
                    circle1.transition().ease("linear").duration(2000).attr('cx', leftBound);
                    setTimeout(function() {
                        circle1MoveRight();
                    }, 2000)
                }
                function circle1MoveRight() {
                    circle1.transition().ease("linear").duration(2000).attr('cx', rightBound);
                    setTimeout(function() {
                        circle1MoveLeft();
                    }, 2000)
                }

                function circle2MoveLeft() {
                    circle2.transition().ease("linear").duration(2000).attr('cx', leftBound);
                    setTimeout(function() {
                        circle2MoveRight();
                    }, 2000)
                }
                function circle2MoveRight() {
                    circle2.transition().ease("linear").duration(2000).attr('cx', rightBound);
                    setTimeout(function() {
                        circle2MoveLeft();
                    }, 2000)
                }

                function circle3MoveLeft() {
                    circle3.transition().ease("linear").duration(2000).attr('cx', leftBound);
                    setTimeout(function() {
                        circle3MoveRight();
                    }, 2000)
                }
                function circle3MoveRight() {
                    circle3.transition().ease("linear").duration(2000).attr('cx', rightBound);
                    setTimeout(function() {
                        circle3MoveLeft();
                    }, 2000)
                }

                setTimeout(function() {
                    circle1MoveLeft();
                }, 1000)
                setTimeout(function() {
                    circle3MoveRight();
                }, 1000)
                circle2MoveLeft();

            }
        }

    })