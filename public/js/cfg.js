require.config({
    urlArgs : "ts="+new Date().getTime(),
    paths : {
        jquery      : 'libs/vendor/jquery-1.11.3.min',
        underscore  : 'libs/vendor/underscore-min',
        backbone    : 'libs/vendor/backbone-min',
        marionette  : 'libs/vendor/backbone.marionette.min',
        templates   : 'app/templates',
        consts      : 'app/constants/constant',
        AppRouter   : "app/routers/AppRouter"
    },

    deps: ["main"],

    'shim': {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ["backbone"],
            exports: "marionette"
        },
        'App': {
            deps: ['marionette'],
            exports: "App"
        },
        'AppRouter': {
            deps: ['underscore', 'jquery', "marionette", 'App'],
            exports: "AppRouter"
        }
    }
});