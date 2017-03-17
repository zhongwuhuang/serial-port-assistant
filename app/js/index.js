const serialport = require('serialport');
const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;

var utils = require('./js/utils');
var control = require('./js/control');
var assistant = require('./js/assistant');

// 配置需要的全局变量
var Payload = '';
var setValue = '';
var commanSwt = false;
var devIdSwt = false;
var loopTimeSwt = false;
var macSwt = false;
var calibrationSwt = false;
var serveripSwt = false;
var portSwt = false;
var nodeIpNumSwt = false;

// var b = new Buffer(11);
// b.write("hello");
// alert(b.length+'~~~'+b)


// 定时器
var timer = null;//定时器
function interval(){
  clearInterval(timer);
  timer = setInterval(function(){
    oSendtext.value = utils.getRand();
    assistant.sendInfo();
  },2000);
}

/*****************************************遍历端口**************************************************/
serialport.list(function (err, ports) {
  var html = oPortName.innerHTML;
  ports.forEach(function(port) {
    html += '<option>'+port.comName+'</option>';
    // console.log(port.comName);
    // console.log(port.pnpId);
    // console.log(port.manufacturer);
  });
  oPortName.innerHTML = html;
});
/*****************************************遍历端口**************************************************/

/*****************************************初始化**************************************************/
var port = null;
var portnameTxt = oPortName.options[portnameIndex].text;
var baudrateTxt = oBaudrate.options[baudrateIndex].text;
var databitsTxt = oDatabits.options[databitsIndex].text;
var stopbitsTxt = oStopbits.options[stopbitsIndex].text;
var parityTxt = oParity.options[parityIndex].text;

oPortName.addEventListener('change',function(){
  portnameTxt = this.value;
});
oBaudrate.addEventListener('change',function(){
  baudrateTxt = this.value;
});
oDatabits.addEventListener('change',function(){
  databitsTxt = this.value;
});
oStopbits.addEventListener('change',function(){
  stopbitsTxt = this.value;
});
oParity.addEventListener('change',function(){
  parityTxt = this.value;
});


/*****************************************初始化**************************************************/

/*****************************************打开串口事件**************************************************/
control.oPen();
/*****************************************打开串口事件**************************************************/

/*****************************************关闭串口事件**************************************************/
control.cLose();
/*****************************************关闭串口事件**************************************************/

/*****************************************控制区**************************************************/
control.commonSet();
/*****************************************控制区**************************************************/


var oCloseTimer = document.querySelector('#closeTimer');
var s = true;
oCloseTimer.onclick = function(){
  if(s){
    interval();
    oCloseTimer.innerHTML = '关定时器';
    s = false;
  }else{
    clearInterval(timer);
    oCloseTimer.innerHTML = '开定时器';
    s = true;
  }
}


/*****************************************信息发送部分**************************************************/
// 点击发送
oSend.addEventListener('click',function(){
  assistant.sendInfo();
});
// 全局发送快捷键
document.onkeydown = function(ev){
	var ev = ev||event;
	if(ev.keyCode==13&&ev.ctrlKey){//同时按住enter和ctrl
    ev.preventDefault();//取消默认事件,禁止换行
    assistant.sendInfo();
	}
};
/*****************************************信息发送部分**************************************************/

/*****************************************数据接收部分**************************************************/
assistant.dataReceive();
/*****************************************数据接收部分**************************************************/

/*****************************************协议发送部分**************************************************/
assistant.protocolSend();
/*****************************************协议发送部分**************************************************/

// // 十六进制发送
// oSendtext.onkeypress = function(ev){
//   var oEvent = ev || event;   //处理兼容
//   var oldValue;
//   var regStr = /[0-9a-fA-F\n\s]/g;
//   if(oSendHex.checked){
//     var key = String.fromCharCode(oEvent.keyCode);
//     if(!regStr.test(key)){
//       alert('请输入十六进制字符!');
//       return false;
//     }
//   }
// }

// 点击时候十六进制发送更换状态码
oSendHex.onclick = function(){
  if(oSendHex.checked&&oSendtext.value!=''){
    oSendtext.value = utils.stringToHex(oSendtext.value);
  }else if(!oSendHex.checked&&oSendtext.value!=''){
    oSendtext.value = utils.hexToString(oSendtext.value);
  }
}
