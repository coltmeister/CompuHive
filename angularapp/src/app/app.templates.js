angular.module('rv.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<div ui-view></div>"
  );


  $templateCache.put('/app/pages/home.html',
    "<ball-animation></ball-animation>"
  );


  $templateCache.put('/app/templates/animationdemo.html',
    "<div id=ball-animation></div>"
  );

}]);
