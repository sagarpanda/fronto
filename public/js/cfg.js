require.config({
    urlArgs : "ts="+new Date().getTime(),
    paths : {
        jquery      : 'libs/vendor/jquery-1.11.3.min',
        bootstrap   : 'libs/vendor/bootstrap.min',
        underscore  : 'libs/vendor/underscore-min',
        backbone    : 'libs/vendor/backbone-min',
        marionette  : 'libs/vendor/backbone.marionette.min',
        templates   : 'app/templates',
        consts      : 'app/constants/constant',
        router      : "app/routers/Router"
    },

    deps: ["main"],

    'shim': {
        'bootstrap' : { 
            deps :['jquery'] 
        },
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
        'router': {
            deps: ['underscore', 'jquery', 'bootstrap', "marionette", 'App'],
            exports: "router"
        }
    }
});