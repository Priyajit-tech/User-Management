const bcrypt = require('bcryptjs');

const usersData = [
    {
    "authID": "1156229286",
    "name": "Bob Smith",
    "email": "some.address@email.com",
    "phoneNumber": "+1 234567869",
    "address": {
        "streetNameAndHouseNumber": "2500 Garcia Ave",
        "city": "SomeCity",
        "region": "CA",
        "postalCode": "12345",
        "country": "CN"
    }
    },
    {
    "authID": "766530989",
    "name": "Bernice Mcclure",
    "email": "bernicemcclure@norsup.com",
    "phone": "+1 (974) 583-3836",
    "address": {
        "streetNameAndHouseNumber": "882 Lloyd Court",
        "city": "Dola",
        "region": "Massachusetts",
        "postalCode": "1640",
        "country": "Solomon Islands"
    }
    },
    {
    "authID": "186472582",
    "name": "Alexis Bridges",
    "email": "alexisbridges@norsup.com",
    "phone": "+1 (878) 577-3444",
    "address": {
        "streetNameAndHouseNumber": "781 Llama Court",
        "city": "Faywood",
        "region": "Oklahoma",
        "postalCode": "1085",
        "country": "Argentina"
    }
    },
    {
    "authID": "532321843",
    "name": "Mclaughlin Foley",
    "email": "mclaughlinfoley@norsup.com",
    "phone": "+1 (905) 493-2964",
    "address": {
        "streetNameAndHouseNumber": "574 Elmwood Avenue",
        "city": "Tecolotito",
        "region": "New Mexico",
        "postalCode": "1204",
        "country": "Netherlands"
    }
    },
    {
    "authID": "665176976",
    "name": "Hebert Porter",
    "email": "hebertporter@norsup.com",
    "phone": "+1 (991) 514-2955",
    "address": {
        "streetNameAndHouseNumber": "708 Broome Street",
        "city": "Riner",
        "region": "Texas",
        "postalCode": "3569",
        "country": "Costa Rica"
    }
    },
    {
    "authID": "986575011",
    "name": "Mayer Preston",
    "email": "mayerpreston@norsup.com",
    "phone": "+1 (829) 445-3935",
    "address": {
        "streetNameAndHouseNumber": "117 Irving Avenue",
        "city": "Alfarata",
        "region": "Pennsylvania",
        "postalCode": "8706",
        "country": "Western Sahara"
    }
    }
];

module.exports = usersData;