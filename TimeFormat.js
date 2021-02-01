//不足10 补0操作
var addZero = function(num) {
	return num < 10 ? '0' + num : num;
}
var timeFormat = function(timedata) {
	timedata = timedata.replace(/T/g, ' '); //去掉T
	timedata = timedata.replace(/-/g, '/');
	timedata = timedata.replace(/\.\d+/, ' '); //去掉毫秒
	var that = this
	var date = new Date(timedata.substr(0, 19));
	var Year = date.getFullYear();
	var Month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var Hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var Minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var Seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	var over_time = Year + "/" + Month + "/" + d + " " + Hours + ":" + Minutes + ":" + Seconds
	return over_time

	//***至此以上是将时间2020-03-18T01:57:23.000+0000转为正常时间格式，以下为将时间进行增加8小时解决时区差异的操作***
	// var time = new Date(Date.parse(over_time));
	// time.setTime(time.setHours(time.getHours() + 8));
	// var Y = time.getFullYear() + '/';
	// var M =addZero(time.getMonth() + 1) + '/';
	// var D =addZero(time.getDate()) + ' ';
	// var h = addZero(time.getHours()) + ':';
	// var m =addZero(time.getMinutes()) + ':';
	// var s =addZero(time.getSeconds());
	// return (Y + M + D + " " + h + m + s)
}

//2020-07-29T16:55:12.000+0800
//let time = timeFormat('2020-07-29T16:55:12.000+0800')
module.exports = {
	addZero: addZero,
	timeFormat: timeFormat,
}
