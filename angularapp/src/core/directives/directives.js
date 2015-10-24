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



                circle2
                    .attr('cx', 150)
                    .attr('cy', 280)
                    .attr('r', 20)

                circle1
                    .attr('cx', '20')
                    .attr('cy', '150')
                    .attr('r', 20)

                var leftBound = 20
                var rightBound = 280
                var upperBound = 280
                var lowerBound = 20

                function moveLeft(){
                    circle1.transition().ease("linear").duration(3000).attr('cx', leftBound)
                    circle2.transition().ease("linear").duration(3000).attr('cy', upperBound)
                    setTimeout(function(){
                        moveRight()
                    }, 3000)
                }

                function moveRight(){
                    circle1.transition().ease("linear").duration(3000).attr('cx', rightBound)
                    circle2.transition().ease("linear").duration(3000).attr('cy', lowerBound)
                    setTimeout(function(){
                        moveLeft()
                    }, 3000)
                }

                moveRight()


            }
        }

    })