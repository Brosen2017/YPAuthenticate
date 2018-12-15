const db = require("./model.js");

// let mockData = [
//   {
//     // userId:1,
//     firstname: "Malinde",
//     lastname: "Rubertelli",
//     email: "mrubertelli0@mozilla.com",
//     password: "emulation",
//     zipcode: 90456
//   },
//   {
//     // userId:2,
//     firstname: "Tomlin",
//     lastname: "Mara",
//     email: "tmara1@soundcloud.com",
//     password: "content-based",
//     zipcode: 90551
//   },
//   {
//     // userId:3,
//     firstname: "Inga",
//     lastname: "McGerraghty",
//     email: "imcgerraghty2@mashable.com",
//     password: "open architecture",
//     zipcode: 91091
//   },
//   {
//     // userId:4,
//     firstname: "Esmeralda",
//     lastname: "Fellnee",
//     email: "efellnee3@reverbnation.com",
//     password: "matrices",
//     zipcode: 90595
//   },
//   {
//     // userId:5,
//     firstname: "Rosaline",
//     lastname: "Bradman",
//     email: "rbradman4@mapquest.com",
//     password: "Re-engineered",
//     zipcode: 90314
//   },
//   {
//     // userId:6,
//     firstname: "Hyacinthie",
//     lastname: "Nangle",
//     email: "hnangle5@free.fr",
//     password: "multi-tasking",
//     zipcode: 90150
//   },
//   {
//     // userId:7,
//     firstname: "Lois",
//     lastname: "Edgcombe",
//     email: "ledgcombe6@noaa.gov",
//     password: "Extended",
//     zipcode: 90196
//   },
//   {
//     // userId:8,
//     firstname: "Maggee",
//     lastname: "Gai",
//     email: "mgai7@histats.com",
//     password: "open architecture",
//     zipcode: 90995
//   },
//   {
//     // userId:9,
//     firstname: "Osborn",
//     lastname: "Playden",
//     email: "oplayden8@1und1.de",
//     password: "eco-centric",
//     zipcode: 90310
//   },
//   {
//     // userId:10,
//     firstname: "Moe",
//     lastname: "Parkman",
//     email: "mparkman9@ucsd.edu",
//     password: "Multi-tiered",
//     zipcode: 90625
//   }
// ];

let mockData = [{
  firstname: "Aubree",
  lastname: "Hollyard",
  email: "ahollyard0@etsy.com",
  password: "analyzer",
  zipcode: 90227,
  address: "9 Brentwood Lane",
  city: "Savannah",
  state: "Georgia",
  company: "Skajo",
  website: "https://smugmug.com",
  photo: "http://dummyimage.com/158x239.bmp/dddddd/000000"
}, {
  firstname: "Giacopo",
  lastname: "Fernandes",
  email: "gfernandes1@wiley.com",
  password: "disintermediate",
  zipcode: 90465,
  address: "665 Moland Terrace",
  city: "Chicago",
  state: "Illinois",
  company: "Geba",
  website: "http://admin.ch",
  photo: "http://dummyimage.com/132x189.bmp/5fa2dd/ffffff"
}, {
  firstname: "Wiley",
  lastname: "Stoll",
  email: "wstoll2@dmoz.org",
  password: "product",
  zipcode: 91005,
  address: "5 Havey Place",
  city: "Jacksonville",
  state: "Florida",
  company: "Gabtune",
  website: "https://ucoz.ru",
  photo: "http://dummyimage.com/152x189.jpg/cc0000/ffffff"
}, {
  firstname: "Winnie",
  lastname: "Auten",
  email: "wauten3@msu.edu",
  password: "workforce",
  zipcode: 90786,
  address: "68 Little Fleur Lane",
  city: "Miami",
  state: "Florida",
  company: "Babbleopia",
  website: "https://sciencedaily.com",
  photo: "http://dummyimage.com/196x166.png/5fa2dd/ffffff"
}, {
  firstname: "Ginnifer",
  lastname: "Comford",
  email: "gcomford4@list-manage.com",
  password: "Multi-layered",
  zipcode: 90395,
  address: "192 Forster Plaza",
  city: "Evansville",
  state: "Indiana",
  company: "Yoveo",
  website: "http://arstechnica.com",
  photo: "http://dummyimage.com/104x104.jpg/cc0000/ffffff"
}, {
  firstname: "Jenica",
  lastname: "Deery",
  email: "jdeery5@cmu.edu",
  password: "impactful",
  zipcode: 90883,
  address: "9499 Oneill Street",
  city: "Boulder",
  state: "Colorado",
  company: "Thoughtbeat",
  website: "http://tmall.com",
  photo: "http://dummyimage.com/152x143.png/5fa2dd/ffffff"
}, {
  firstname: "Kat",
  lastname: "Quogan",
  email: "kquogan6@hostgator.com",
  password: "Optimized",
  zipcode: 90157,
  address: "27 Manley Point",
  city: "Arlington",
  state: "Virginia",
  company: "Bubblemix",
  website: "http://hud.gov",
  photo: "http://dummyimage.com/178x193.png/5fa2dd/ffffff"
}, {
  firstname: "Cordelie",
  lastname: "Keilloh",
  email: "ckeilloh7@npr.org",
  password: "bottom-line",
  zipcode: 90952,
  address: "1800 Mcbride Lane",
  city: "Tulsa",
  state: "Oklahoma",
  company: "Twitterworks",
  website: "https://hc360.com",
  photo: "http://dummyimage.com/184x247.png/dddddd/000000"
}, {
  firstname: "Whitby",
  lastname: "Turmall",
  email: "wturmall8@over-blog.com",
  password: "Enterprise-wide",
  zipcode: 90751,
  address: "34 Lindbergh Point",
  city: "Fort Lauderdale",
  state: "Florida",
  company: "Oyonder",
  website: "https://japanpost.jp",
  photo: "http://dummyimage.com/115x171.jpg/5fa2dd/ffffff"
}, {
  firstname: "Egor",
  lastname: "Langhor",
  email: "elanghor9@reference.com",
  password: "analyzer",
  zipcode: 90836,
  address: "444 Rowland Plaza",
  city: "Austin",
  state: "Texas",
  company: "Jabberstorm",
  website: "http://histats.com",
  photo: "http://dummyimage.com/136x181.bmp/cc0000/ffffff"
}]

db.sync({ force: false }).then(() => {
  db.bulkCreate(mockData).then(() => console.log("UserDB seeded!"));
});
