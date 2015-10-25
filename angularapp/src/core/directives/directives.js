angular.module('rv.directives', [])

.directive('ballAnimation', function($interval){

        return {
            restrict: 'E',
            replace: false,
            templateUrl: '/app/templates/animationdemo.html',
            scope: {},
            link: function (scope, element, attrs) {

                var svg = d3.select("body")
                    .append("svg")
                    .attr("width", '300px')
                    .attr("height", '300px');

                var svg = d3.select("#ball-animation")

                var circle1 = svg.append('circle');
                var circle2 = svg.append('circle');
                var circle3 = svg.append('circle');

                var circle4 = svg.append('circle');
                var circle5 = svg.append('circle');
                var circle6 = svg.append('circle');


                circle1
                    .attr('cx', 440)
                    .attr('cy', 10)
                    .attr('r', 10)

                circle2
                    .attr('cx', '10')
                    .attr('cy', '150')
                    .attr('r', 10)

                circle3
                    .attr('cx', 440)
                    .attr('cy', 290)
                    .attr('r', 10)

                circle4
                    .attr('cx', 10)
                    .attr('cy', 290)
                    .attr('r', 10)

                circle5
                    .attr('cx', 225)
                    .attr('cy', 10)
                    .attr('r', 10)

                circle6
                    .attr('cx', 440)
                    .attr('cy', 290)
                    .attr('r', 10)

                var rightBound = 440
                var leftBound = 10
                var upperBound = 10
                var lowerBound = 290

                function circle1MoveLeft() {
                    circle1.transition().ease("linear").duration(1745).attr('cx', leftBound);
                    setTimeout(function () {
                        circle1MoveRight();
                    }, 1745)
                }

                function circle1MoveRight() {
                    circle1.transition().ease("linear").duration(1745).attr('cx', rightBound);
                    setTimeout(function () {
                        circle1MoveLeft();
                    }, 1745)
                }

                function circle2MoveRight() {
                    circle2.transition().ease("linear").duration(2000).attr('cx', rightBound);
                    setTimeout(function () {
                        circle2MoveLeft();
                    }, 2000)
                }

                function circle2MoveLeft() {
                    circle2.transition().ease("linear").duration(2000).attr('cx', leftBound);
                    setTimeout(function () {
                        circle2MoveRight();
                    }, 2000)
                }

                function circle3MoveLeft() {
                    circle3.transition().ease("linear").duration(1860).attr('cx', leftBound);
                    setTimeout(function () {
                        circle3MoveRight();
                    }, 1860)
                }

                function circle3MoveRight() {
                    circle3.transition().ease("linear").duration(1860).attr('cx', rightBound);
                    setTimeout(function () {
                        circle3MoveLeft();
                    }, 1860)
                }

                function circle4MoveUp() {
                    circle4.transition().ease("linear").duration(2000).attr('cy', upperBound);
                    setTimeout(function() {
                        circle4MoveDown();
                    }, 2000)
                }
                function circle4MoveDown() {
                    circle4.transition().ease("linear").duration(2000).attr('cy', lowerBound);
                    setTimeout(function() {
                        circle4MoveUp();
                    }, 2000)
                }

                function circle5MoveDown() {
                    circle5.transition().ease("linear").duration(1670).attr('cy', lowerBound);
                    setTimeout(function() {
                        circle5MoveUp();
                    }, 1670)
                }
                function circle5MoveUp() {
                    circle5.transition().ease("linear").duration(1670).attr('cy', upperBound);
                    setTimeout(function() {
                        circle5MoveDown();
                    }, 1670)
                }

                function circle6MoveUp() {
                    circle6.transition().ease("linear").duration(1800).attr('cy', upperBound);
                    setTimeout(function() {
                        circle6MoveDown();
                    }, 1800)
                }
                function circle6MoveDown() {
                    circle6.transition().ease("linear").duration(1800).attr('cy', lowerBound);
                    setTimeout(function() {
                        circle6MoveUp();
                    }, 1800)
                }

                //setTimeout(function () {
                //    circle1MoveLeft();
                //}, 1000)
                //setTimeout(function () {
                //    circle3MoveRight();
                //}, 1000)
                //circle2MoveLeft();
                //
                //setTimeout(function() {
                //    circle4MoveUp();
                //}, 1000)
                //setTimeout(function() {
                //    circle5MoveUp();
                //}, 1000)
                //circle6MoveDown()

                circle1MoveLeft();
                circle2MoveRight();
                circle3MoveLeft();

                circle4MoveUp();
                circle5MoveDown();
                circle6MoveUp();
            }
        }
    });