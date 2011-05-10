app.controllers.legends = new Ext.Controller({
    index: function(options) {
        console.log('legends#index');
        app.views.viewport = new app.views.Viewport();
    },
    show: function(options) {
        console.log('legends#show');
        console.log(options.index);
        app.views.viewport.layout.setActiveItem(options.index+1);
    },
    edit: function(options) {
    }
});
Ext.regController("legends", app.controllers.legends);
