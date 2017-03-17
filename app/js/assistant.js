// 发送信息
function sendInfo(){
  if(oSendHex.checked&&oSendtext.value!=''){
    oSendtext.value = utils.hexToString(oSendtext.value);
    oSendtext.value = utils.stringToHex(oSendtext.value);
  }
  timeSwt = true;
  var sendText = oSendtext.value;

  // 如果接收窗口不为空就加个换行
  // if(oReceivetext.innerHTML!=''){
  //   oReceivetext.innerHTML+='\n';
  // }

  if(oSendtext.value == ''){
    alert('你没输入任何东西!');
    oSendtext.focus();
  }
  else if(oSendHex.checked){
    port.write(utils.string2Bin(utils.hexToString(sendText)), function(err) {
      if(err){
        alert('err ' + err);
      }
    });
  }else{
    port.write(utils.string2Bin(sendText), function(err) {
      if(err){
        alert('err ' + err);
      }
    });
  }
}

// var dgram = require('dgram');
// var serverSocket = dgram.createSocket('udp4');
// serverSocket.bind(9901);
//
// serverSocket.on('message', function(data, rinfo){
//   console.log(data);
//   var strReceive = '';
//   var date = new Date();
//   var curRecieveTime = utils.toTwo(date.getHours())+':'+utils.toTwo(date.getMinutes())+':'+utils.toTwo(date.getSeconds());
//   // 将时间字体加粗
//   var strcurRecieveTime = '['+curRecieveTime+']';
//   strcurRecieveTime = strcurRecieveTime.bold();
//   var dataString = data.toString();//data 是一个对象,要转换成字符串
//   console.log(dataString);
//
//   if(oShowTime.checked&&oShowHex.checked==false){//显示时间
//     strReceive =  dataString;
//     // 仅第一次执行加时间,防止重复
//     if(timeSwt){
//       strReceive = strcurRecieveTime + strReceive;
//       timeSwt = false;
//     }
//     oReceivetext.innerHTML += strReceive;
//     oReceivetext.scrollTop = oReceivetext.scrollHeight;
//
//   }else if(oShowHex.checked&&oShowTime.checked==false){//十六进制接收
//
//     // strReceive = utils.stringToHex(dataString);
//     strReceive = utils.Bytes2Str(data);
//     oReceivetext.innerHTML += strReceive;
//     oReceivetext.scrollTop = oReceivetext.scrollHeight;
//
//   }else if(oShowHex.checked&&oShowTime.checked){//显示时间,十六进制
//
//     strReceive = utils.stringToHex(dataString);
//     if(timeSwt){
//       strReceive = strcurRecieveTime + strReceive;
//       timeSwt = false;
//     }
//     oReceivetext.innerHTML += strReceive;
//     oReceivetext.scrollTop = oReceivetext.scrollHeight;
//
//   }else{
//
//     strReceive = dataString;
//     oReceivetext.innerHTML += strReceive;
//     oReceivetext.scrollTop = oReceivetext.scrollHeight;
//
//   }
// });
// 接收信息
var timeSwt = true;

function dataReceive(){
  oOpen.addEventListener('click',function(){
    port.on('data', function(data) {

      var dataString = data.toString();//data 是一个对象,要转换成字符串

      console.log(dataString.length+'---'+dataString);
      var findRs = dataString.toUpperCase().indexOf('set error'.toUpperCase());

      // 通用发送部分
      if(findRs==-1&&commanSwt){
        oIntroSend.style.backgroundColor = '#29a729';
        oIntroSend.innerHTML = '发送成功';
        setTimeout(function(){
          oIntroSend.style.backgroundColor = '';
          oIntroSend.innerHTML = '发&nbsp;&nbsp;&nbsp;&nbsp;送';
        },1000);
        commanSwt = false;
      }else if(findRs!=-1&&commanSwt){
        oIntroSend.style.backgroundColor = '#e80b0b';
        oIntroSend.innerHTML = '发送失败';
        setTimeout(function(){
          oIntroSend.style.backgroundColor = '';
          oIntroSend.innerHTML = '发&nbsp;&nbsp;&nbsp;&nbsp;送';
        },1000);
        commanSwt = false;
      }

      // 设备id
      if(findRs==-1&&setValue!=''&&devIdSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oDevIdSetIntro.innerHTML = successTip;
        devIdSwt = false;
      }else if(findRs!=-1&&devIdSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oDevIdSetIntro.innerHTML = failTip;
        devIdSwt = false;
      }
      // 上报时间间隔
      if(findRs==-1&&setValue!=''&&loopTimeSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oLoopTimeSetIntro.innerHTML = successTip;
        loopTimeSwt = false;
      }else if(findRs!=-1&&loopTimeSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oLoopTimeSetIntro.innerHTML = failTip;
        loopTimeSwt = false;
      }
      // mac配置
      if(findRs==-1&&setValue!=''&&macSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oMacSetIntro.innerHTML = successTip;
        macSwt = false;
      }else if(findRs!=-1&&macSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oMacSetIntro.innerHTML = failTip;
        macSwt = false;
      }
      // 时间校准
      if(findRs==-1&&setValue!=''&&calibrationSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oCalibrationSetIntro.innerHTML = successTip;
        calibrationSwt = false;
      }else if(findRs!=-1&&calibrationSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oCalibrationSetIntro.innerHTML = failTip;
        calibrationSwt = false;
      }
      // 服务器ip
      if(findRs==-1&&serveripSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oServeripSetIntro.innerHTML = successTip;
        serveripSwt = false;
      }else if(findRs!=-1&&serveripSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oServeripSetIntro.innerHTML = failTip;
        serveripSwt = false;
      }
      // 端口
      if(findRs==-1&&setValue!=''&&portSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oPortSetIntro.innerHTML = successTip;
        portSwt = false;
      }else if(portSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oPortSetIntro.innerHTML = failTip;
        portSwt = false;
      }
      // 节点ID序号
      if(findRs==-1&&setValue!=''&&nodeIpNumSwt){
        var successTip = '<font style="color:#29a729">成功</font>';
        oNodeIpNumSetIntro.innerHTML = successTip;
        nodeIpNumSwt = false;
      }else if(nodeIpNumSwt){
        var failTip = '<font style="color:#e80b0b">失败</font>';
        oNodeIpNumSetIntro.innerHTML = failTip;
        nodeIpNumSwt = false;
      }


      var date = new Date();
      var curRecieveTime = utils.toTwo(date.getHours())+':'+utils.toTwo(date.getMinutes())+':'+utils.toTwo(date.getSeconds());
      var strcurRecieveTime = '['+curRecieveTime+']';

      var strReceive = '';
      if(oShowTime.checked&&oShowHex.checked==false){//显示时间
        // 仅第一次执行加时间,防止重复
        strReceive = dataString;
        if(timeSwt){
          strReceive = strcurRecieveTime + strReceive;
          timeSwt = false;
        }
        // oReceivetext.innerHTML += strReceive+ '<br>';
        oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else if(oShowHex.checked&&oShowTime.checked==false){//十六进制接收

        strReceive = utils.stringToHex(dataString);
        // oReceivetext.innerHTML += strReceive+ '<br>';
        oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else if(oShowHex.checked&&oShowTime.checked){//显示时间,十六进制

        strReceive = utils.stringToHex(dataString);
        if(timeSwt){
          strReceive = strcurRecieveTime + strReceive;
          timeSwt = false;
        }
        // oReceivetext.innerHTML += strReceive+ '<br>';
        oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else{

        strReceive = dataString;
        // console.log(data.length);
        // oReceivetext.innerHTML += strReceive+ '<br>';
        oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }
    });
  })
}

// 协议发送
function protocolSend(){
  oIntroSend.addEventListener('click',function(){
    commanSwt = true;
    var cmd = oCmd.value;
    var msgsrc = oMsgsrc.value;
    var payload = oPayload.value;
    var len = payload.length;
    // 未加crc16前的十六进制
    if(len){
      var dataHex = '555500'+utils.tenToHex(len+4)+cmd+msgsrc+utils.stringToHex(payload);
      var arrUnicode = utils.string2Bin(utils.hexToString(dataHex));
      // 求出crc16
      var crc16 = utils.calcCRC16(arrUnicode,4,len+2);
      var sendCmd = utils.hexToString(dataHex+crc16);

      port.write(utils.string2Bin(sendCmd), function(err) {
        if(err){
          alert('err ' + err);
        }
      });
    }
  });
}



exports.dataReceive = dataReceive;
exports.sendInfo = sendInfo;
exports.protocolSend = protocolSend;
