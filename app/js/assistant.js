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
    swal({title:'你没输入任何东西!',timer: 2000});
    oSendtext.focus();
  }
  else if(oSendHex.checked){
    port.write(utils.string2Bin(utils.hexToString(sendText)), function(err) {
      if(err){
        swal(err);
      }
    });
  }else{
    port.write(utils.string2Bin(sendText), function(err) {
      if(err){
        swal(err);
      }
    });
  }
}

var timeSwt = true;
var strInner1 = '';
var strInner2 = '';
var strInner3 = '';
var strInner4 = '';
var strInner5 = '';

function dataReceive(){
  oOpen.addEventListener('click',function(){
    port.on('data', function(data) {

      var dataString = data.toString();//data 是一个对象,要转换成字符串

      console.log(dataString.length+'---'+dataString);
      var findRs = dataString.toUpperCase().indexOf('set error'.toUpperCase());

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

      // 通用功能配置
      // function judge(obj,swt,text){
      //   console.log(obj+':'+swt)
      //   if(findRs==-1&&swt){
      //     obj.style.backgroundColor = '#29a729';
      //     obj.innerHTML = '成功';
      //     setTimeout(function(){
      //       obj.style.backgroundColor = '';
      //       obj.innerHTML = text;
      //     },1000);
      //     swt = false;
      //     console.log(obj+':'+swt)
      //   }else if(findRs!=-1&&swt){
      //     obj.style.backgroundColor = '#e80b0b';
      //     obj.innerHTML = '失败';
      //     setTimeout(function(){
      //       obj.style.backgroundColor = '';
      //       obj.innerHTML = text;
      //     },1000);
      //     swt = false;
      //     console.log(obj+':'+swt)
      //   }
      // }
      // judge(oFunction1,function1Swt,'功能一');
      // judge(oFunction2,function2Swt,'功能二');
      // judge(oFunction3,function3Swt,'功能三');
      // judge(oFunction4,function4Swt,'功能四');
      // judge(oFunction5,function5Swt,'功能五');
      // judge(oFunction6,function6Swt,'功能六');

      // 通用功能一
      if(findRs==-1&&function1Swt){
        oFunction1.style.backgroundColor = '#29a729';
        oFunction1.innerHTML = '成功';
        setTimeout(function(){
          oFunction1.style.backgroundColor = '';
          oFunction1.innerHTML = '功能一';
        },1000);
        function1Swt = false;
      }else if(findRs!=-1&&function1Swt){
        oFunction1.style.backgroundColor = '#e80b0b';
        oFunction1.innerHTML = '失败';
        setTimeout(function(){
          oFunction1.style.backgroundColor = '';
          oFunction1.innerHTML = '功能一';
        },1000);
        function1Swt = false;
      }

      // 通用功能二
      if(findRs==-1&&function2Swt){
        oFunction2.style.backgroundColor = '#29a729';
        oFunction2.innerHTML = '成功';
        setTimeout(function(){
          oFunction2.style.backgroundColor = '';
          oFunction2.innerHTML = '功能二';
        },1000);
        function2Swt = false;
      }else if(findRs!=-1&&function2Swt){
        oFunction2.style.backgroundColor = '#e80b0b';
        oFunction2.innerHTML = '失败';
        setTimeout(function(){
          oFunction2.style.backgroundColor = '';
          oFunction2.innerHTML = '功能二';
        },1000);
        function2Swt = false;
      }

      // 通用功能三
      if(findRs==-1&&function3Swt){
        oFunction3.style.backgroundColor = '#29a729';
        oFunction3.innerHTML = '成功';
        setTimeout(function(){
          oFunction3.style.backgroundColor = '';
          oFunction3.innerHTML = '功能三';
        },1000);
        function3Swt = false;
      }else if(findRs!=-1&&function3Swt){
        oFunction3.style.backgroundColor = '#e80b0b';
        oFunction3.innerHTML = '失败';
        setTimeout(function(){
          oFunction3.style.backgroundColor = '';
          oFunction3.innerHTML = '功能三';
        },1000);
        function3Swt = false;
      }

      // 通用功能四
      if(findRs==-1&&function4Swt){
        oFunction4.style.backgroundColor = '#29a729';
        oFunction4.innerHTML = '成功';
        setTimeout(function(){
          oFunction4.style.backgroundColor = '';
          oFunction4.innerHTML = '功能四';
        },1000);
        function4Swt = false;
      }else if(findRs!=-1&&function4Swt){
        oFunction4.style.backgroundColor = '#e80b0b';
        oFunction4.innerHTML = '失败';
        setTimeout(function(){
          oFunction4.style.backgroundColor = '';
          oFunction4.innerHTML = '功能四';
        },1000);
        function4Swt = false;
      }

      // 通用功能五
      if(findRs==-1&&function5Swt){
        oFunction5.style.backgroundColor = '#29a729';
        oFunction5.innerHTML = '成功';
        setTimeout(function(){
          oFunction5.style.backgroundColor = '';
          oFunction5.innerHTML = '功能五';
        },1000);
        function5Swt = false;
      }else if(findRs!=-1&&function5Swt){
        oFunction5.style.backgroundColor = '#e80b0b';
        oFunction5.innerHTML = '失败';
        setTimeout(function(){
          oFunction5.style.backgroundColor = '';
          oFunction5.innerHTML = '功能五';
        },1000);
        function5Swt = false;
      }

      // 通用功能六
      if(findRs==-1&&function6Swt){
        oFunction6.style.backgroundColor = '#29a729';
        oFunction6.innerHTML = '成功';
        setTimeout(function(){
          oFunction6.style.backgroundColor = '';
          oFunction6.innerHTML = '功能六';
        },1000);
        function6Swt = false;
      }else if(findRs!=-1&&function6Swt){
        oFunction6.style.backgroundColor = '#e80b0b';
        oFunction6.innerHTML = '失败';
        setTimeout(function(){
          oFunction6.style.backgroundColor = '';
          oFunction6.innerHTML = '功能六';
        },1000);
        function6Swt = false;
      }

      // 通用发送部分
      if(findRs==-1&&commanSwt&&cmd!=''&&msgsrc!=''&&payload!=''){
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
        // if(timeSwt){
        //   strReceive = strcurRecieveTime + strReceive;
        //   timeSwt = false;
        // }

        strInner1 += strReceive;
        if(dataString.length<32){
          oReceivetext.innerHTML += '\n'+strcurRecieveTime+strInner1;
          strInner1 = '';
        }
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else if(oShowHex.checked&&oShowTime.checked==false){//十六进制接收
        strReceive = utils.stringToHex(dataString);
        strInner2 += strReceive;
        if(dataString.length<32){
          oReceivetext.innerHTML += '\n'+strInner2;
          strInner2 = '';
        }
        // oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else if(oShowHex.checked&&oShowTime.checked){//显示时间,十六进制

        strReceive = utils.stringToHex(dataString);
        // if(timeSwt){
        //   strReceive = strcurRecieveTime + strReceive;
        //   timeSwt = false;
        // }
        strInner3 += strReceive;
        if(dataString.length<32){
          oReceivetext.innerHTML += '\n'+strcurRecieveTime+strInner3;
          strInner3 = '';
        }
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }else if(devIdTxtSwt){//显示设备Id与清除设备设备Id

        strReceive = dataString;
        strInner4 += strReceive;
        if(dataString.length<32){
          oDevIdIpt.innerHTML += '\n'+strInner4;
          strInner4 = '';
        }
        oDevIdIpt.scrollTop = oDevIdIpt.scrollHeight;
        devIdTxtSwt = false;

      }else{

        strReceive = dataString;
        strInner5 += strReceive;
        if(dataString.length<32){
          oReceivetext.innerHTML += '\n'+strInner5;
          strInner5 = '';
        }
        // oReceivetext.innerHTML += strReceive;
        oReceivetext.scrollTop = oReceivetext.scrollHeight;

      }
    });
  })
}



exports.dataReceive = dataReceive;
exports.sendInfo = sendInfo;
