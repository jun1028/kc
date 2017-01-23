HTMLEditor = Ext.extend(Ext.form.HtmlEditor, {
	addImage : function() {
	var nameid = document.getElementById("jilu").nextSibling.contentWindow;
	zlkFileUpWin =new YlsFileUpWin();
		zlkFileUpWin.show();
		zlkFileUpWin.on( 'uploadsuccess',this.onUploadSuccess); //定义上传成功回调函数  
	},
	createToolbar : function(editor) {
		HTMLEditor.superclass.createToolbar.call(this, editor);
		this.tb.insertButton(16, {
					cls : "x-btn-icon",
					icon : "images/picture.png",
					handler : this.addImage,
					scope : this
				});
	},
	//文件上传成功后的回调函数  
 	onUploadSuccess : function(dialog, filename, resp_data, record){ 
		zlkFileUpWin.hide();
		var nameid = document.getElementById("jilu").nextSibling.contentWindow;
		var img =  document.createElement("img");
		img.src     = url+"/"+resp_data.newfileName;
		
		var element = null;
		element = nameid.document.getElementById("returnedVML");
		var returnImage ;
		if(element == null)
		{
			returnImage = document.createElement("div");
			returnImage.id   = "returnedVML";
			returnImage.className = "returnedVML";
		}
		else
		{
			returnImage = element ;
		}
		returnImage.appendChild(img);
		nameid.document.body.appendChild(returnImage);
		nameid.focus();

 	}
});
Ext.reg('StarHtmleditor', HTMLEditor);

YlsFileUpWin = Ext.extend(Ext.ux.UploadDialog.Dialog,{
	constructor : function(){
	    YlsFileUpWin.superclass.constructor.call(this,{
			url:'sys/doUpFile/save.action' , //action地址
			post_var_name:'uploadFiles',//这里是自己定义的，默认的名字叫file  
            width : 450,
            height : 300,   
            minWidth : 450,   
            minHeight : 300,   
            draggable : true ,   
            resizable : true ,
            permitted_extensions:[ 'JPG' , 'jpg' , 'jpeg' , 'JPEG' , 'GIF' , 'gif' , 'png' , 'PNG' ],
            constraintoviewport: true ,    
            modal: true ,
            reset_on_hide: false ,
            allow_close_on_upload: false ,//关闭上传窗口是否仍然上传文件   
            upload_autostart: false  //是否自动上传文件
		}),
        this.on( 'uploadfailed' , this.onUploadFailed); //定义上传失败回调函数  
        this.on( 'uploaderror' , this.onUploadFailed); //定义上传出错回调函数  
	},
	//文件上传失败后的回调函数  
 	onUploadFailed : function(dialog, filename, resp_data, record){  
 	}
});