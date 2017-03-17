// 下拉选择
var oPortName =  document.getElementById('portname');
var portnameIndex = oPortName.selectedIndex;
var oBaudrate =  document.getElementById('baudrate');
var aBroption =  oBaudrate.querySelectorAll('option');
var baudrateIndex = oBaudrate.selectedIndex;
var oDatabits =  document.getElementById('databits');
var databitsIndex = oDatabits.selectedIndex;
var oStopbits =  document.getElementById('stopbits');
var stopbitsIndex = oStopbits.selectedIndex;
var oParity =  document.getElementById('parity');
var parityIndex = oParity.selectedIndex;

// 控制区
var oDevId =  document.querySelector('#devId');
var oDevIdSet =  document.querySelector('#devIdSet');
var oDevIdSetIntro =  document.querySelector('#devIdSetIntro');
var oLoopTime =  document.querySelector('#loopTime');
var oLoopTimeSet =  document.querySelector('#loopTimeSet');
var oLoopTimeSetIntro =  document.querySelector('#loopTimeSetIntro');

var oOpen =  document.querySelector('#open');
var oClose =  document.querySelector('#close');

var oAssistant =  document.querySelectorAll('.assistant')[0];

// var oSetting =  document.querySelectorAll('.setting')[0];
// var aSelect =  oSetting.querySelectorAll('select');

// 通讯区域
var oPortBtn = document.querySelector('#portBtn');
var oPortWin = document.querySelector('#portWin');
var oSend = document.querySelector('#send');
var oSendtext = document.querySelector('#textSend');
var oClearSend = document.querySelector('#clearSend');
var oClearReceive = document.querySelector('#clearReceive');
var oPauseReceive = document.querySelector('#pauseReceive');
var oStartReceive = document.querySelector('#startReceive');
var oReceivetext = document.querySelector('#textReceive');
var oCurtextReceive = document.querySelector('#curtextReceive');
var oShowHex = document.querySelector('#showHex');
var oShowTime = document.querySelector('#showTime');
var oSendHex = document.querySelector('#sendHex');
var aSetColr = document.querySelectorAll('.setColr');

// 自定义发送
var oCmd = document.querySelector('#cmd');
var oMsgsrc = document.querySelector('#msgsrc');
var oPayload = document.querySelector('#payload');
var oIntroSend = document.querySelector('#introSend');

//中继
var oMac = document.querySelector('#mac');
var oMacSet = document.querySelector('#macSet');
var oMacSetIntro = document.querySelector('#macSetIntro');
var oCalibration = document.querySelector('#calibration');
var oCalibrationSet = document.querySelector('#calibrationSet');
var oCalibrationSetIntro = document.querySelector('#calibrationSetIntro');
var oServerip1 = document.querySelector('#serverip1');
var oServerip2 = document.querySelector('#serverip2');
var oServerip3 = document.querySelector('#serverip3');
var oServeripSet = document.querySelector('#serveripSet');
var oServeripSetIntro = document.querySelector('#serveripSetIntro');
var oPort = document.querySelector('#port');
var oPortSet = document.querySelector('#portSet');
var oPortSetIntro = document.querySelector('#portSetIntro');
var oNodeIp = document.querySelector('#nodeIp');
var oNodeNum = document.querySelector('#nodeNum');
var oNodeIpNumSet = document.querySelector('#nodeIpNumSet');
var oNodeIpNumSetIntro = document.querySelector('#nodeIpNumSetIntro');


// 功能窗口区域
var oShowBtn = document.querySelectorAll('.show-btn')[0];
var aLi = oShowBtn.getElementsByTagName('li');
var aFunwin = document.querySelectorAll('.fun-win');

for(var i=0;i<aLi.length;i++){
  aLi[i].index = i;
  aLi[i].onclick = function(){
    for(var i=0;i<aLi.length;i++){
      aLi[i].className = '';//每次点击按钮都清空按钮class
      aFunwin[i].style.display = 'none';
    }
    aLi[this.index].className = 'active';
    aFunwin[this.index].style.display = 'block';
  }
}

// 暂停数据接收
var curText = '';
oPauseReceive.onclick = function(){
  oPauseReceive.style.visibility = 'hidden';
  oStartReceive.style.visibility = 'visible';

  curText = oReceivetext.innerHTML;
  oCurtextReceive.innerHTML = curText;
  oReceivetext.style.visibility = 'hidden';
  oCurtextReceive.style.visibility = 'visible';
  oCurtextReceive.scrollTop = oCurtextReceive.scrollHeight;
  // clearInterval(timer);
}
// 开始数据接收
oStartReceive.onclick = function(){
  oPauseReceive.style.visibility = 'visible';
  oStartReceive.style.visibility = 'hidden';

  oReceivetext.innerHTML = curText;
  oReceivetext.style.visibility = 'visible';
  oCurtextReceive.style.visibility = 'hidden';
  // interval();
}

//清除接收区域
oClearReceive.onclick = function(){
  oReceivetext.innerHTML = '';
  oCurtextReceive.innerHTML = '';
  curText = ''
}
//清除发送区域
oClearSend.onclick = function(){
  oSendtext.value = '';
}

// 十六进制发送
oSendtext.onkeypress = function(ev){
  var oEvent = ev || event;   //处理兼容
  var regStr = /[0-9a-fA-F\n\s]/g;
  if(oSendHex.checked){
    var key = String.fromCharCode(oEvent.keyCode);
    if(!regStr.test(key)){
      alert('请输入十六进制字符!');
      return false;
    }
  }
}

// 指令只能输入十六进制
oCmd.onkeypress = function(ev){
  var oEvent = ev || event;   //处理兼容
  var regStr = /[0-9a-fA-F\n\s]/g;
  var key = String.fromCharCode(oEvent.keyCode);
  if(!regStr.test(key)){
    alert('请输入十六进制字符!');
    return false;
  }
}
// 数据源只能输入十六进制
oMsgsrc.onkeypress = function(ev){
  var oEvent = ev || event;   //处理兼容
  var regStr = /[0-9a-fA-F\n\s]/g;
  var key = String.fromCharCode(oEvent.keyCode);
  if(!regStr.test(key)){
    alert('请输入十六进制字符!');
    return false;
  }
}
// 上报时间间隔
oLoopTime.onkeypress = function(ev){
  var oEvent = ev || event;   //处理兼容
  var regStr = /[0-9]/g;
  var key = String.fromCharCode(oEvent.keyCode);
  if(!regStr.test(key)){
    alert('请输入整数!');
    return false;
  }
}
// 时间校准
oCalibration.onkeypress = function(ev){
  var oEvent = ev || event;   //处理兼容
  var regStr = /[0-9]/g;
  var key = String.fromCharCode(oEvent.keyCode);
  if(!regStr.test(key)){
    alert('请输入整数!');
    return false;
  }
}


// 长按右键快速清空
// var timeStart,timeEnd,time,that;//申明全局变量
//
// function getTimeNow(){//获取此刻时间
//   var now=new Date();
//   return now.getTime();
// }
// function holdDown(){//鼠标按下时触发
//   timeStart=getTimeNow();//获取鼠标按下时的时间
//   time=setInterval(function(){//setInterval会每100毫秒执行一次
//     timeEnd=getTimeNow();//也就是每100毫秒获取一次时间
//     if(timeEnd-timeStart>500){//如果此时检测到的时间与第一次获取的时间差有1000毫秒
//       clearInterval(time);//便不再继续重复此函数 （clearInterval取消周期性执行）
//       alert(that)
//     }
//   },100);
// }
// function holdUp(){
//   clearInterval(time);//如果按下时间不到1000毫秒便弹起，
// }
// oDevId.onmousedown = function(){
//   that = this;
//   holdDown();
// }
// oDevId.onmouseup = function(){
//   holdUp();
// }

// 单击右键清除
function rightClickClear(obj){
  obj.onmousedown = function(e){
    var e = e || window.event
    if(e.button == "2"){
      this.value = '';
    }
  }
}
rightClickClear(oDevId);
rightClickClear(oLoopTime);
rightClickClear(oCmd);
rightClickClear(oMsgsrc);
rightClickClear(oPayload);
rightClickClear(oMac);
rightClickClear(oCalibration);
rightClickClear(oServerip1);
rightClickClear(oServerip2);
rightClickClear(oServerip3);
rightClickClear(oPort);
rightClickClear(oNodeIp);
rightClickClear(oNodeNum);
rightClickClear(oNodeNum);
rightClickClear(oNodeNum);
