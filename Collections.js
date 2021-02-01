
import dateFormat from "dateformat"
import TimeFormat from './TimeFormat'//兼容ios封装的时间格式
const collections = function () {
};
//new Date()==> 兼容ios
const compatibilityDate = function(date){
  if(date && date.toString().includes('-')){
    return new Date(TimeFormat.timeFormat(date))
  }else{
    return new Date(date);
  }
}
collections.ts2String = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy-mm-dd HH:MM:ss");
};
collections.ts3String = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy.mm.dd HH:MM:ss");
};
collections.ts4String = function (ts){
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy.mm.dd HH:MM");
};
collections.ts5String = function (ts){
  let date = compatibilityDate(ts)
  return dateFormat(date, "mm.dd HH:MM");
};
collections.ts2CnYMString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy-mm");
};
collections.ts2CnYMString2 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"yyyy年mm月")
};
collections.ts2CnMDString2 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"mm.dd")
};
collections.ts2CnMDString3 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"yyyy.mm.dd")
};

collections.ts2CnYMDString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy-mm-dd");
};
collections.ts2CnYMDString2 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy/mm/dd");
};
collections.ts2CnYMDString3 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy/mm dd");
};
collections.ts2CnYMDString4 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy/mm/dd HH:MM:ss");
};

collections.ts2CnFullString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "yyyy年mm月dd日 HH:MM:ss");
};

collections.ts2CnYMDString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"yyyy年mm月dd日")
};

collections.ts2CnMDString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"mm月dd日")
};
collections.ts2CnMDString2 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"mm.dd")
};

collections.ts2CnYMString2 = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date,"yyyy年mm月")
};
collections.ts2CnMDHmString = function (ts) { //04月08日 14:28
  let date = compatibilityDate(ts)
  return dateFormat(date,"mm月dd日 HH:MM");
};

collections.ts2CnHMSString = function (ts) {
  let date = compatibilityDate(ts)
  return dateFormat(date, "HH:MM:ss");
};

//隐藏部分电话号码
collections.hideSomeNums = function (nums) {
  if(Number(nums)){
    return nums.replace(/(\d{3})(\d{4})(\d{3})/,"$1****$3")
  }else{
    return nums
  }
}
//隐藏部分银行卡号
collections.fascinatingCardNumber= function (str){
  return str.replace(/(\d{4})(\d+)(\d{4})/, () => {
    const matches = [RegExp.$1, RegExp.$2, RegExp.$3];
    const [startNum, middleNum, endNum] = matches;
    const group = [];
    const GAP = 4
    for (var i = 0; i < middleNum.length; i += GAP) {
      group.push(middleNum.substring(i, i + GAP));
    }
    return startNum + group.join('').replace(/\d/g, '*') + endNum;
  });
}
export default collections;
