import { hotel } from '../index';

describe('Hotel', () => {
  it('checks properties', () => {
    expect(hotel.quantityOfPlaces).toStrictEqual(30);
    expect(hotel.priceByPlace).toStrictEqual(20);
    expect(hotel.bankAccount).toStrictEqual(0);
    expect(hotel.guests).toStrictEqual({});
  });

  describe('checks methods', () => {
    it('getLength()', () => {
      expect(hotel.getLength()).toStrictEqual(0);
    });

    it('getActualFreePlace()', () => {
      expect(hotel.getActualFreePlace()).toStrictEqual(30);
    });

    it('checkInGuest()', () => {
      const guest = hotel.checkInGuest('Bohdan', 'Onatskyi', 40);
      expect(guest).toStrictEqual({
        firstName: 'Bohdan',
        lastName: 'Onatskyi',
        money: 20,
      });
      expect(hotel.getLength()).toStrictEqual(1);
      expect(hotel.bankAccount).toStrictEqual(20);

      const guestWithoutMoney = hotel.checkInGuest('John', 'Doe', 12);
      expect(guestWithoutMoney).toStrictEqual(
        'Sorry, you have not enough money'
      );
      expect(hotel.getLength()).toStrictEqual(1);
      expect(hotel.bankAccount).toStrictEqual(20);

      new Array(29)
        .fill({ firstName: 'test', lastName: 'test', money: 20 })
        .forEach((item) => {
          hotel.checkInGuest(item.firstName, item.lastName, item.money);
        });
      expect(hotel.getLength()).toStrictEqual(30);
      expect(hotel.bankAccount).toStrictEqual(20 * 30);
      expect(
        hotel.checkInGuest('Man', 'WithMillionDollar', 1000000)
      ).toStrictEqual('Sorry, we have not free spaces');
    });
  });
});
