Ext.regApplication({
    name: 'app',
    launch: function() {
        console.log('launch');
        Ext.dispatch({
            controller: app.controllers.legends,
            action: 'index'
        });
    }
});

Ext.Router.draw(function(map) {
    map.connect("legends", {controller: 'legends', action: 'index'});
});
