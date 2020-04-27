function co(gen){
  var ctx = this;
  return new Promise((resovle, reject)=>{
    var g;
    if(typeof gen === "function") g = gen();
    // 普通函数则返回其值即可
    if(!g || typeof gen.next !== 'function') return resovle(g)

    function onRejected(err){
      reject(err);
    }

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }    

    function next(ret){
      if(ret.done) return resovle(ret.value)
      return ret.value.then(onFulfilled, onRejected)
    }

    onFulfilled()
  })
}