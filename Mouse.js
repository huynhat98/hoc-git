function Mouse(name) {
  this.name = name;
}

Mouse.prototype.sleep = function () {
  console.log("sleeping");
}

module.exports = Mouse;
