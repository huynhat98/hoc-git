function Dog() {
  this.stomach = []
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
}
// module.exports = Dog;
