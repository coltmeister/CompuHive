angular.module('rv.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<div ui-view></div>"
  );


  $templateCache.put('/app/pages/home.html',
    "<ball-animation></ball-animation><button type=button ng-click=startThisThread()>Start on current thread</button> <button type=button ng-click=startNewThread()>Start on new thread</button><h3>{{threadNumbers.currentNumber}}</h3>"
  );


  $templateCache.put('/app/templates/animationdemo.html',
    "<svg id=ball-animation width=300px height=300px></svg>"
  );

}]);
