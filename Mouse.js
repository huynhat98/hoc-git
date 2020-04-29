function Mouse(name) {
  this.name = name;
}

Mouse.prototype.run = function() {
  console.log("Running");
};

Mouse.prototype.sleep = function () {
  console.log("sleeping");
}

module.exports = Mouse;
