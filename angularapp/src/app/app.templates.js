angular.module('rv.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<header><div rv-s-row><div rv-s-col=3 rv-s-py=3 rv-s-px=4><img src=/assets/img/rv-logo-shadow.png width=30 alt=\"reverbio\"></div></div></header><div rv-s-row><div rv-s-col=12><h1>Hello {{ text }}</h1></div></div><div ui-view rv-s-pxy=6></div>"
  );

}]);
