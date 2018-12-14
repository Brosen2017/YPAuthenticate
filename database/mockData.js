const db = require("./model.js");

let mockData = [
  {
    // userId:1,
    firstname: "Malinde",
    lastname: "Rubertelli",
    email: "mrubertelli0@mozilla.com",
    password: "emulation",
    zipcode: 90456
  },
  {
    // userId:2,
    firstname: "Tomlin",
    lastname: "Mara",
    email: "tmara1@soundcloud.com",
    password: "content-based",
    zipcode: 90551
  },
  {
    // userId:3,
    firstname: "Inga",
    lastname: "McGerraghty",
    email: "imcgerraghty2@mashable.com",
    password: "open architecture",
    zipcode: 91091
  },
  {
    // userId:4,
    firstname: "Esmeralda",
    lastname: "Fellnee",
    email: "efellnee3@reverbnation.com",
    password: "matrices",
    zipcode: 90595
  },
  {
    // userId:5,
    firstname: "Rosaline",
    lastname: "Bradman",
    email: "rbradman4@mapquest.com",
    password: "Re-engineered",
    zipcode: 90314
  },
  {
    // userId:6,
    firstname: "Hyacinthie",
    lastname: "Nangle",
    email: "hnangle5@free.fr",
    password: "multi-tasking",
    zipcode: 90150
  },
  {
    // userId:7,
    firstname: "Lois",
    lastname: "Edgcombe",
    email: "ledgcombe6@noaa.gov",
    password: "Extended",
    zipcode: 90196
  },
  {
    // userId:8,
    firstname: "Maggee",
    lastname: "Gai",
    email: "mgai7@histats.com",
    password: "open architecture",
    zipcode: 90995
  },
  {
    // userId:9,
    firstname: "Osborn",
    lastname: "Playden",
    email: "oplayden8@1und1.de",
    password: "eco-centric",
    zipcode: 90310
  },
  {
    // userId:10,
    firstname: "Moe",
    lastname: "Parkman",
    email: "mparkman9@ucsd.edu",
    password: "Multi-tiered",
    zipcode: 90625
  }
];

db.sync({ force: false }).then(() => {
  db.bulkCreate(mockData).then(() => console.log("UserDB seeded!"));
});
