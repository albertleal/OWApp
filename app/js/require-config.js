/*
    Require the OWA Plugins by your own choice
*/
require.config({
    paths: {
        jquery: '/js/lib/jquery/jquery-2.0.3.min',
        jquerytouch: '/js/lib/jquery/plugins/jquery.touch-1.3.2',
        backbone : '/js/lib/backbone/backbone-1.1.0.min',
        underscore : '/js/lib/undersocre/undersocre-1.5.2.min',
        config : '/js/static/config',
        constants : '/js/static/constants',
        utils : '/js/static/utils',
        log : '/js/static/log',
        app : '/js/static/app',
        device : '/js/static/device',
        session : '/js/static/session',
        templates : '/templates',
        themes : '/themes',
        OWASession : '/js/plugins/default/OWASession',
        OWAStorage : '/js/plugins/default/OWAStorage',
    }
});
require(["app"], function(App) {
    App.init();
});