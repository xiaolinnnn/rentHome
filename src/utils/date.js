// 数据转化
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function formatTime(number, format) {
  var formateArr = ['Y', 'M', 'D']
  var returnArr = []
  var date = new Date(number * 1000)
  returnArr.push(date.getFullYear())
  returnArr.push(formatNumber(date.getMonth() + 1))
  returnArr.push(formatNumber(date.getDate()))

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i])
  }
  return format
}

module.exports = {
  formatTime: formatTime
}
