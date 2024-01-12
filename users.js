const bcrypt = require('bcryptjs');

const usersData = [
  {
    authID: "1156229286",
    name: "Bob Smith",
    email: "some.address@email.com",
    phoneNumber: "+1 234567869",
    address: {
        streetNameAndHouseNumber: "2500 Garcia Ave",
        city: "SomeCity",
        region: "CA",
        postalCode: "12345",
        country: "CN"
    }
  }
];

module.exports = usersData;