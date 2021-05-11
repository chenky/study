// const htmlStr = `// 某个固定域名
// let someDomain = /^https?:\/\/.+\.qtrade\.com\.cn\/.+$/

// // http://jqueryvalidation.org/ 常用的正则验证
// // contributed by Scott Gonzalez = http://projects.scottsplayground.com/email_address_validation/
// `

// const reg = /^\s*\/\/.*$/
// console.log(htmlStr.match(reg))

// const nbspWord = `htlle adfjdf adsfjdask &nbsp;&nbsp; adfa &nbsp;adfdasf&nbsp;
// adsf &nbsp;
// asdf&nbsp;&nbsp;adfasdf`
// console.log(nbspWord.match(/(&nbsp;){2,}/g))

// 回溯引用，在正则表达式中使用
// const matchStr = `<h1>abc</h1><h6>abc</h6><h2>bbbb</h1>`
// 会把不配对的<h2>bbbb</h1>也匹配进去
// console.log(matchStr.match(/<h[1-6]>.*?<\/h[1-6]>/g))
// 使用回溯引用则只会匹配配对的标签
// console.log(matchStr.match(/<h([1-6])>.*?<\/h\1>/g))

// 回溯引用在正则表达式之外使用
// const replaceStr = `123-456`
// const reg = /(\d{3})(-)(\d{3})/
// // console.log(replaceStr.match(reg))
// console.log(replaceStr.replace(reg, '($1),($3)'))


// 大小写转换，使用replace函数
// const lower2Upper = '<a>adbc</a>'
// console.log(lower2Upper.replace(/(<a>)(.*?)(<\/a>)/, function (all, m1, m2, m3) {
//   console.log('replace match', `${all},${m1},${m2},${m3}`)
//   // return m2.toUpperCase()
//   return m1 + m2.toUpperCase() + m3
// }))
