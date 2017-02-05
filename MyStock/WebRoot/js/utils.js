var timestamp = Date.parse(new Date());
//timestamp = timestamp / 1000;
	
var zhMoney = function(v) {
	var result;
    v = (Math.round((v-0)*100))/100;
    v = (v == Math.floor(v)) ? v + ".00" : ((v*10 == Math.floor(v*10)) ? v + "0" : v);
    v = String(v);
    var ps = v.split('.'),
        whole = ps[0],
        sub = ps[1] ? '.'+ ps[1] : '.00',
        r = /(\d+)(\d{3})/;
    while (r.test(whole)) {
        whole = whole.replace(r, '$1' + ',' + '$2');
    }
    v = whole + sub;
    if (v.charAt(0) == '-') {
        result = '-￥' + v.substr(1);
    }
    else{
    	result = "￥" +  v;
    }
    return result;
};

//var transtion = function(v) {
//	var result;
//	Ext.MessageBox.prompt('提示', '输入需要多少千克可可以生产xx成品：', callback, this, true, data);
//    return result;
//};


var showNotification = function(config){
	var win = new Ext.ux.Notification(Ext.apply({
		animateTarget: 'xxx'
		, autoDestroy: true
		, hideDelay: 5000
		, html: ''
		, iconCls: 'x-icon-waiting'
		, title: ''
	}, config));
	win.show();
	return win;
};

var hideNotification = function(win, delay){
	if(win){
		(function(){ win.hide(); }).defer(delay || 3000);
	}
};