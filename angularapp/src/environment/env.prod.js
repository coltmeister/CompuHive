/**
 * Created with JetBrains WebStorm.
 * User: apledger
 * Date: 4/24/13
 * Time: 8:32 PM
 * File: /core/config/prod.js
 */

'use strict';

angular.module('rv.config', [])
    .config(function ($logProvider, $compileProvider) {
        $logProvider.debugEnabled(false);
    })
    .factory('Environment', function () {
        var url = {
            dev: '',
            remote: '',
            test: ''
        };

        return {
            name: 'prod',
            path: url.test,
            config: {}
        };
    });