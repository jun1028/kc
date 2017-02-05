/*!
 * 产品管理
 */
Ext.onReady(function(){
	
	Ext.QuickTips.init();
	var v_start=0, v_limit=20;
	
	var SpxxObj = [
		{ name:'spid', type:'string'},
		{ name:'spname', type:'string'},
		{ name:'xinghao', type:'string'},
		{ name:'tuhao', type:'string'},
		{ name:'dw', type:'string'},
		{ name:'jhprice', type:'string'},
		{ name:'chprice', type:'string'},
		{ name:'kcsl', type:'int'},
		{ name:'minnum', type:'string'},
		{ name:'csname', type:'string'},
		{ name:'cktype', type:'string'},
		{ name:'bz', type:'string'},
		{ name:'lbid', type:'int'},
		{ name:'lbname', type:'string'}
	];
	
	//产品数据
	var bjStore = new Ext.data.JsonStore({
	    url: 'search_findBaoJingSpxx.do',
	    root: 'root',
	    totalProperty: 'total',
	    fields: SpxxObj
	});
	
	//产品列表
    var bjGrid = new Ext.grid.GridPanel({
        store: bjStore,
        cm: new Ext.grid.ColumnModel({
			defaults: {	menuDisabled : true},//禁止表头菜单
			columns:[new Ext.grid.RowNumberer(),
				{header: '产品编号', width: 100, sortable:true, dataIndex: 'spid'},
	            {header: '产品名称', width: 130, sortable:true, dataIndex: 'spname'},
	            {header: '产品型号', width: 80, sortable:true, dataIndex: 'xinghao'},
	            {header: '图号', width: 80, sortable:true, dataIndex: 'tuhao'},
	            {header: '类别', width: 60, sortable:true, dataIndex: 'lbname'},
	            {header: '单位', width: 60, sortable:true, dataIndex: 'dw'},
	            {header: '采购价', width: 60, sortable:true, align:'right', renderer:zhMoney, dataIndex: 'jhprice'},
	            {header: '销售价', width: 60, sortable:true, align:'right', renderer:zhMoney, dataIndex: 'chprice'},
	            {header: '当前', width: 60, sortable:true, align:'right', dataIndex: 'kcsl'},
	            {header: '库存下限', width: 60, sortable:true, align:'right', dataIndex: 'minnum'},
	            {header: '生产厂商', width: 100, sortable:true, dataIndex: 'csname'},
	            {header: '仓库类型', width: 100, sortable:true, dataIndex: 'cktype'},
	            {header: '备注', width: 200, sortable:true, dataIndex: 'bz'}]
        }),
        stripeRows: true, 	//行分隔符
        columnLines : true, //列分隔符
        margins:'20',
        style:'border:1px solid',
		region:'center',
        iconCls:''
    });
    
    if (username && username.indexOf('管理员') < 0){
		kcspGrid.getColumnModel().setHidden(6,true);
		kcspGrid.getColumnModel().setHidden(7,true);
		kcspGrid.getColumnModel().setHidden(8,true);
		kcspGrid.getColumnModel().setHidden(9,true);
	}
	//布局
    new Ext.Viewport({
		layout:'fit',
		items:[{
			frame:true,
			title:'库存报警',
			iconCls:'menu-33',
			layout:'border',
			items:[bjGrid]
		}],
		listeners:{
			render:function(){
				bjStore.load();
			}
		}
	});

});