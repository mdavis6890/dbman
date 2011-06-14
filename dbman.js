Ext.regApplication({
  name: 'dbman',
  autoInitViewport: false,
  launch: function() {
    var sencha = Ext.create('Ext.draw.Component', {
        width: 300,
        height: 300,
        resizable: {
            dynamic: true,
            pinned: true,
            handles: 'all'
        },
        renderTo: Ext.getBody(),
        items: [{
            type: 'path',
            path: ['M0,109.718c0-43.13,24.815-80.463,60.955-98.499L82.914,0C68.122'].join(''),
            fill: '#C5D83E'
        }]
    });
	}
});