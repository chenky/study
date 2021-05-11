// 祖传老代码
function getCityName(str) {
  let name = ''
  switch (str) {
    case 'china':
      name = 'china'
      break
    case 'hainan':
      name = '海南'
      break
    case 'xizang':
      name = '西藏'
      break
    case 'zhejiang':
      name = '浙江'
      break
    case 'yunnan':
      name = '云南'
      break
    case 'xinjiang':
      name = '新疆'
      break
  }
  return name
}
// 重构后，适合有限静态且无逻辑判断
function getRegionName(regionKey){
  if(typeof regionKey !== "string") return "";
  let regionMapData = {china: "china",hainan: "海南",xizang: "西藏",zhejiang: "浙江",yunnan: "云南",xinjiang: "新疆"};
  return regionMapData[regionKey];
}