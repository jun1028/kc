/*!
 * 
 */
Ext.onReady(function(){
	
	Ext.QuickTips.init();
	
	var bfForm = new Ext.FormPanel({
		height: 110,
		border : false,
		layout : 'form',
		labelWidth:60,
		padding : 20,
		items:[{
			xtype:"fieldset",
			title:"产品图片",
			padding:'20',
			layout:"column",
			defaults:{
				xtype:"container",
				autoEl:"div",
				labelAlign:'right',
				layout:"form"
			},
			items:[{
				columnWidth:.6,
				items:[{
					id:'imagepath',
					xtype : 'textfield',
					inputType : 'textfield',
					fieldLabel : '文件路径',
					name : 'datapath',
					readOnly:true,
					value: '',
					anchor : '100%'
				}]
			},{
				columnWidth:.1,
				style:'padding-left:2px',
				html:'<input type="button" value="浏览..." onclick="browseFolder()" style="height:22px;width:60px;font-size:12px"></input>'
			},{
				items:[{
					width:75,
					xtype:"button",
					text:'上传',
					handler:function(){
						var f = bfForm.getForm();
						var datapath = f.findField("imagepath").getValue();
						if (datapath) {
							Ext.Ajax.request({
					   			url : "**.do",
					   			params:{ datapath : datapath },
					   			success : function(o) {
						   			if(o.responseText=="true"){
						   				Ext.Msg.alert("信息提示","上传完成");
					   				}else{
					   					Ext.Msg.alert("信息提示","上传失败");
					   				}
					   			}
					   		});
						}else{
							Ext.Msg.alert('信息提示','路径不能为空');
						}
					}
				}]
				
			}
		]
		}]
	});
	
	//布局
    new Ext.Viewport({
		layout:'fit',
		items:[{
			frame:true,
			title:'产品图片管理',
			iconCls:'menu-63',
			layout:'fit',
			items:[bfForm]
		}],
		listeners:{
			render:function(){
			}
		}
	});

});

var browseFolder = function () {
    try {
        var Message = "\u8bf7\u9009\u62e9\u6587\u4ef6\u5939";  //选择框提示信息
        var Shell = new ActiveXObject("Shell.Application");
        var Folder = Shell.BrowseForFolder(0, Message, 64, 17);//起始目录为：我的电脑
        if (Folder != null) {
             Folder = Folder.items();  // 返回 FolderItems 对象
             Folder = Folder.item();  // 返回 Folderitem 对象
             Folder = Folder.Path;   // 返回路径
             if (Folder.charAt(Folder.length - 1) != "\\") {
                 Folder = Folder + "\\";
             }
             document.getElementById("datapath").value = Folder;
            return Folder;
         }
     }
    catch (e) {
         alert(e.message);
     }
}