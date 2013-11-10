require.config({
    paths: {
        jquery: '/js/lib/jquery/jquery-2.0.3.min',
        jquerytouch: '/js/lib/jquery/plugins/jquery.touch',
        backbone : '/js/lib/backbone/backbone-1.1.0.min',
        underscore : '/js/lib/undersocre/undersocre-1.5.2.min',
        config : 'config',
        constants : 'constants',
        log : 'log',
        app : 'app',
        templates : '/templates',
        themes : '/themes'
    }
});
Config.init();
App.init();
