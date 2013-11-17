/*
    Require the OWA Plugins by your own choice
*/
require.config({
    paths: {
        jquery: '/js/lib/jquery/jquery-2.0.3.min',
        jquerytouch: '/js/lib/jquery/plugins/jquery.touch-1.3.2',
        backbone : '/js/lib/backbone/backbone-1.1.0.min',
        underscore : '/js/lib/undersocre/undersocre-1.5.2.min',
        config : '/js/core/config',
        constants : '/js/core/constants',
        utils : '/js/core/utils',
        eventHandler : 'js/core/eventHandler',
        eventBus : 'js/core/eventBus',
        navigation: 'core/navigation',
        animation: 'core/animation',
        log : '/js/core/log',
        app : '/js/core/app',
        device : '/js/core/device',
        session : '/js/core/session',
        templates : '/templates',
        themes : '/themes',
        core : 'core-init',
        OWASession : '/js/plugins/default/OWASession',
        OWAStorage : '/js/plugins/default/OWAStorage',
    }
});

var OWACore;
require(["core"], function(Core) {
    OWACore = Core;
});