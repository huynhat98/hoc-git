function Mouse(name) {
  this.name = name;
}

Mouse.prototype.run = function() {
  console.log("Running");
};

module.exports = Mouse;
