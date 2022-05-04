const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}


Park.prototype.addDino = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinoByName = function (dinosaur) {
    const indexOfDino = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDino, 1);
}
module.exports = Park