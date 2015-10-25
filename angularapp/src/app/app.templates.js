angular.module('rv.app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/app/app.html',
    "<div ui-view></div>"
  );


  $templateCache.put('/app/pages/home.html',
    "<h3>{{threadNumbers.currentNumber}}</h3><div id=left-side><img src=\"/assets/img/CompuHive Logo 2.png\" id=peeen><ball-animation id=ballAnimation></ball-animation></div><div id=right-side><button type=button ng-click=startThisThread() id=buttonSwag1>SINGLE THREAD</button> <button type=button ng-click=startNewThread() id=buttonSwag2>MULTI THREAD</button></div>"
  );


  $templateCache.put('/app/templates/animationdemo.html',
    "<svg id=ball-animation width=450px height=300px></svg>"
  );

}]);
