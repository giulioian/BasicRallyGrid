
Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {
        this._loadData();
        
    },
    _loadData: function () {
        var mystore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function (mystore, mydata, success) {
                    //console.log('got data', mystore, mydata, success);
                    this._loadGrid(mystore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },
    _loadGrid(myStoryStore) {
        //create the grid
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myStoryStore,
            columnCfgs: [
                'FormattedID', 'Name', 'ScheduleState'
            ]

        });
        this.add(myGrid);
    }
});
