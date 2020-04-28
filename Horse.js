function Horse(){
    // Giả sử sửa dòng 2 phù hợp với yêu cầu của leader!
}

Horse.prototype.jump = function() {
    console.log('jumped...');
}

Horse.prototype.run = function () {
    console.log("running");
}

module.exports = Horse;