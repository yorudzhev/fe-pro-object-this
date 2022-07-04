export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {},
  getLength() {
    return Object.keys(this.guests).length;
  },
  getActualFreePlace() {
    return this.quantityOfPlaces - Object.keys(this.guests).length;
  },
  paidPerPlace() {
    this.bankAccount = this.priceByPlace * Object.keys(this.guests).length;
  },
  checkInGuest(firstName, lastName, money) {
    function Guest(firstName, lastName, money) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.money = money - this.priceByPlace;
    }
    if (this.guests >= this.quantityOfPlaces)
      console.log("Sorry, we have not free spaces");
    else if (this.priceByPlace > money)
      console.log("Sorry, you have not enough money");
    else this.guests[this.getLength()] = new Guest(firstName, lastName, money);
  },
};





