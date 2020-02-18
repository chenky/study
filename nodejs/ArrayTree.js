class ArrayTree{
  constructor() {
    this.arr = [];
  }
  
  insert = (num) => {
    if(this.search(num)!==-1){
      return;
    }

    if(this.arr.length===0){
      this.arr[0] = num;
    } else {
      this._insert(0,num);
    }    
  }

  _insert = (index, num) => {

    if(this.arr.length < (2*index+2)){
      this.arr = new Array(2*index+2).fill(100);
    }

    const elem = this.getElem(index);
    if(elem===100){
      this.arr[index] = num;
      return;
    }
    
    if(elem<num){
      this._insert(2*index+2, num);
    } else {
      this._insert(2*index+1, num);
    }
  }

  search = (num) => {
    return this._search(0,num);
  }

  _search = (index, num) => {
    const elem = this.getElem(index);

    if(this.arr.length<=index){
      return -1;
    }

    if(elem === num){
      return index;
    }
    if(elem<num){
      return this._search(2*index+2, num);
    } else {
      return this._search(2*index+1, num);
    }
  }

  getElem = (index) => {
    return this.arr[index];
  }

}


const insArrayTree = new ArrayTree();
insArrayTree.insert(7);
insArrayTree.insert(1);
insArrayTree.insert(5);
insArrayTree.insert(3);
insArrayTree.insert(0);
insArrayTree.insert(2);
insArrayTree.insert(6);
insArrayTree.insert(4);
console.log(insArrayTree.getElem(5));
console.log(insArrayTree.search(7));
console.log(insArrayTree.arr);