// 常用配置
function commonSet(){

  function config(obj,para){
    Payload = para+setValue+';';
    var len = Payload.length;
    // 未加crc16前的十六进制
    var dataHex = '555500'+utils.tenToHex(len+4)+'0103'+utils.stringToHex(Payload);
    var arrUnicode = utils.string2Bin(utils.hexToString(dataHex));
    // 求出crc16
    var crc16 = utils.calcCRC16(arrUnicode,4,len+2);
    var sendCmd = utils.hexToString(dataHex+crc16);

    port.write(utils.string2Bin(sendCmd), function(err) {
      if(err){
        alert('错误:' + err);
      }
    });
  }

  // 配置设备Id
  oDevIdSet.addEventListener('click',function(){
    setValue = oDevId.value;
    if(setValue){
      devIdSwt = true;
      config(oDevId,'setsysid=');
    }else{
      oDevIdSetIntro.innerHTML = '未知';
    }
  });
  // 配置上报时间间隔
  oLoopTimeSet.addEventListener('click',function(){
    setValue = oLoopTime.value;
    if(setValue){
      loopTimeSwt = true;
      config(oLoopTime,'setuptime=');
    }else{
      oLoopTimeSetIntro.innerHTML = '未知';
    }
  });
  // 配置MAC地址
  oMacSet.addEventListener('click',function(){
    setValue = oMac.value;
    if(setValue){
      macSwt = true;
      config(oMac,'setmac=');
    }else{
      oMacSetIntro.innerHTML = '未知';
    }
  });
  // 配置时间校准
  oCalibrationSet.addEventListener('click',function(){
    setValue = oCalibration.value;
    if(setValue){
      calibrationSwt = true;
      config(oCalibration,'settime=');
    }else{
      oCalibrationSetIntro.innerHTML = '未知';
    }
  });
  // 配置服务器IP
  oServeripSet.addEventListener('click',function(){
    var setValue1 = oServerip1.value;
    var setValue2 = oServerip2.value;
    var setValue3 = oServerip3.value;
    setValue = setValue1+setValue2+setValue3;
    if(setValue){
      serveripSwt = true;
      Payload = 'setserip='+setValue1+';'+setValue2+';'+setValue3+';';
      var len = Payload.length;
      // 未加crc16前的十六进制
      var dataHex = '555500'+utils.tenToHex(len+4)+'0103'+utils.stringToHex(Payload);
      var arrUnicode = utils.string2Bin(utils.hexToString(dataHex));
      // 求出crc16
      var crc16 = utils.calcCRC16(arrUnicode,4,len+2);
      var sendCmd = utils.hexToString(dataHex+crc16);

      port.write(utils.string2Bin(sendCmd), function(err) {
        if(err){
          alert('错误:' + err);
        }
      });
    }else{
      oServeripSetIntro.innerHTML = '未知';
    }
  });
  // 配置端口
  oPortSet.addEventListener('click',function(){
    setValue = oPort.value;
    if(setValue){
      portSwt = true;
      config(oPort,'setport=');
    }else{
      oPortSetIntro.innerHTML = '未知';
    }
  });
  // 配置节点ID序号
  oNodeIpNumSet.addEventListener('click',function(){
    var setValue1 = oNodeIp.value;
    var setValue2 = oNodeNum.value;
    setValue = setValue1+setValue2;
    if(setValue){
      nodeIpNumSwt = true;
      Payload = 'setDevID='+setValue1+';'+setValue2+';';
      var len = Payload.length;
      // 未加crc16前的十六进制
      var dataHex = '555500'+utils.tenToHex(len+4)+'0103'+utils.stringToHex(Payload);
      var arrUnicode = utils.string2Bin(utils.hexToString(dataHex));
      // 求出crc16
      var crc16 = utils.calcCRC16(arrUnicode,4,len+2);
      var sendCmd = utils.hexToString(dataHex+crc16);

      port.write(utils.string2Bin(sendCmd), function(err) {
        if(err){
          alert('错误:' + err);
        }
      });
    }else{
      oNodeIpNumSetIntro.innerHTML = '未知';
    }
  });

}
//打开串口事件
function oPen(){
  oOpen.addEventListener('click',function(){
    port = new serialport(portnameTxt, {
      autoOpen: false,//是否自动打开,默认true
      // highWaterMark: 1024,//读写缓存区大小，默认是 16k,16384
      baudRate: parseInt(baudrateTxt),
      dataBits: parseInt(databitsTxt),
      stopBits: parseInt(stopbitsTxt),
      parity: parityTxt.toLowerCase()
    });

    openPort();
  });

  function openPort(){
    port.open(function (error) {
      if ( error ) {
        alert("打开端口"+portnameTxt+"错误："+error.message);
        oOpen.style.display = 'block';
        oClose.style.display = 'none';
      } else {
        console.log('打开了'+portnameTxt+'!');

        // 判断界面是否在当前页面上,不在返回
        // if(oPortBtn.className==''){
        //   for(var i=0;i<aLi.length;i++){
        //     aLi[i].className = '';//每次点击按钮都清空按钮class
        //     aFunwin[i].style.display = 'none';
        //   }
        //   oPortBtn.className = 'active';
        //   oPortWin.style.display = 'block';
        // }
        for(var i=0;i<aSetColr.length;i++){
          aSetColr[i].style.color = '#2b2b2b';
        }

        oDevId.disabled = false;
        oDevIdSet.disabled = false;
        oLoopTime.disabled = false;
        oLoopTimeSet.disabled = false;
        oOpen.style.display = 'none';
        oClose.style.display = 'block';
        oPortName.disabled = true;
        oBaudrate.disabled = true;
        oDatabits.disabled = true;
        oStopbits.disabled = true;
        oParity.disabled = true;
        oSend.disabled = false;
        oReceivetext.style.backgroundColor = '#fff';
        // oClearSend.disabled = false;
        // oClearReceive.disabled = false;
        oPauseReceive.disabled = false;
        oStartReceive.disabled = false;
        oSendtext.disabled = false;
        // 打开窗口获得焦点
        oSendtext.focus();

        oShowHex.disabled = false;
        oShowTime.disabled = false;
        oSendHex.disabled = false;

        oCmd.disabled = false;
        oMsgsrc.disabled = false;
        oPayload.disabled = false;
        oIntroSend.disabled = false;

        // 中继
        oMac.disabled = false;
        oMacSet.disabled = false;
        oCalibration.disabled = false;
        oCalibrationSet.disabled = false;
        oServerip1.disabled = false;
        oServerip2.disabled = false;
        oServerip3.disabled = false;
        oServeripSet.disabled = false;
        oPort.disabled = false;
        oPortSet.disabled = false;
        oNodeIp.disabled = false;
        oNodeNum.disabled = false;
        oNodeIpNumSet.disabled = false;

        //自动发送数据
        // interval();
      }
    });
  }
}


//关闭串口事件
function cLose(){
  oClose.addEventListener('click',function(){
    clearInterval(timer);//关闭定时器
    // 关闭清空输入框
    // oReceivetext.innerHTML = '';
    oSendtext.value = '';
    strReceive = '';
    // check默认未选中
    oShowHex.checked = false;
    oShowTime.checked = false;
    oSendHex.checked = false;
    port.close();
    port = null;

    // 判断界面是否在当前页面上,不在返回
    // if(oPortBtn.className==''){
    //   for(var i=0;i<aLi.length;i++){
    //     aLi[i].className = '';//每次点击按钮都清空按钮class
    //     aFunwin[i].style.display = 'none';
    //   }
    //   oPortBtn.className = 'active';
    //   oPortWin.style.display = 'block';
    // }
    for(var i=0;i<aSetColr.length;i++){
      aSetColr[i].style.color = 'graytext';
    }

    oDevId.disabled = true;
    oDevIdSet.disabled = true;
    oLoopTime.disabled = true;
    oLoopTimeSet.disabled = true;
    oClose.style.display = 'none';
    oOpen.style.display = 'block';
    oPortName.disabled = false;
    oBaudrate.disabled = false;
    oDatabits.disabled = false;
    oStopbits.disabled = false;
    oParity.disabled = false;
    oSend.disabled = true;
    oReceivetext.style.backgroundColor = '#ebebe4';
    // oClearSend.disabled = true;
    // oClearReceive.disabled = true;
    oPauseReceive.disabled = true;
    oStartReceive.disabled = true;
    oSendtext.disabled = true;

    oShowHex.disabled = true;
    oShowTime.disabled = true;
    oSendHex.disabled = true;
    oCmd.disabled = true;
    oMsgsrc.disabled = true;
    oPayload.disabled = true;
    oIntroSend.disabled = true;

    oPauseReceive.style.visibility = 'visible';
    oStartReceive.style.visibility = 'hidden';
    oCurtextReceive.innerHTML = '';
    oReceivetext.style.visibility = 'visible';
    oCurtextReceive.style.visibility = 'hidden';

    // 中继
    oMac.disabled = true;
    oMacSet.disabled = true;
    oCalibration.disabled = true;
    oCalibrationSet.disabled = true;
    oServerip1.disabled = true;
    oServerip2.disabled = true;
    oServerip3.disabled = true;
    oServeripSet.disabled = true;
    oPort.disabled = true;
    oPortSet.disabled = true;
    oNodeIp.disabled = true;
    oNodeNum.disabled = true;
    oNodeIpNumSet.disabled = true;
  });
}


exports.commonSet = commonSet;
exports.oPen = oPen;
exports.cLose = cLose;
