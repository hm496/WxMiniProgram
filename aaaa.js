Array.prototype.cutRepeat = function () {
  let cutArr = []
  let oringin = this

  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) !== i) {
      cutArr.push(this.splice(i, 1)[0])
      i--
    }
  }

  return cutArr
}

let a = [1, 1, 2, 3, 4,NaN, 5, 6, 6, 7,NaN]

a = a.filter(function (item,index) {
  return this.indexOf(item) === index
},a)
console.log(a)
// console.log(a.cutRepeat(),a)

let b = new Set([1, 1, 2, 3, 4,NaN, 5, 6, 6, 7,NaN])
console.log(b,Array.from(b))

