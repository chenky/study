let arr = [1,2,3,4,5];
// arr.map((value,index,arr)=>{
//   console.log(value, index, arr);
// })
function mapFn(f, arr){
  for (const [key, value] of arr.entries()) {
    f(value, key, arr);
  }
}
mapFn((value,key, arr)=>{
  console.log(value, key, arr);
}, arr)

var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

var g = gen();

g.next().value.then(function(data){
  g.next(data).value.then(function(data){
    g.next(data);
  });
})

function run(gen){
  var g = gen();

  function next(data){
    var res = g.next(data);
    if(res.done) return res.value;
    res.value.then(function(data){
      next(data)
    })
  }
  next()
}
run(gen);