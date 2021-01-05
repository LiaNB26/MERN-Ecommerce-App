const products = [
  {
    name: "Nespresso Coffee and Espresso Machine Bundle",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_3de079fa-60e6-4464-a126-8d5c5317a814?wid=488&hei=488&fmt=pjpeg",
    description:
      "An amazing way to start your morning with a delicious cup of coffee.",
    brand: "De'Longhi",
    category: "Kitchen",
    price: 209.9,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Merax Travelhouse Luggage Set 3 Piece",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71T-Yqw1egL._AC_SL1500_.jpg",
    description:
      "Three piece set including the following luggage sizes: 20 inches, 24 inches and 28 inches.",
    brand: "Merax",
    category: "Luggage & Travel Gear",
    price: 129.99,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Canon EOS 80D DSLR Camera",
    image:
      "https://i.expansys.net/img/b/315399/canon-eos-80d-dslr-camera-with-18-55mm-lens.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Canon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony Playstation 4 Pro White Version",
    image:
      "https://media.gamestop.com/i/gamestop/10154139/PlayStation-4-Pro-Glacier-White-1TB",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Airpods Wireless Bluetooth Headphones",
    image: "https://dam.which.co.uk/f939fc01-1d6f-4450-8c2c-6cddb664676a.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Premium Travel Pillow",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/6132PtVjCkL._AC_SL1200_.jpg",
    description:
      "The SANDINI travelfix premium travel pillow is the perfect solution for a comfortable sleep on the way.",
    brand: "SANDINI ",
    category: "Luggage & Travel Gear",
    price: 39.99,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Logitech G-Series Gaming Mouse",
    image:
      "https://static.bhphoto.com/images/images2500x2500/1594386347_1574403.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Amazon Echo Dot 3rd Generation",
    image: "https://cdn.mos.cms.futurecdn.net/cfEEcVzhmDwoULoiHbLZsN.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "KitchenAid - Artisan Stand Mixer 5KSM180PS",
    image:
      "https://www.culinaris.eu/WebRoot/Store17/Shops/61562434/5D2D/A390/A51C/3A9A/5D83/0A0C/6D05/489C/5ksm180hesd.jpg",
    description:
      "This limited edition of our classic food processor is decorated with a trim ribbon with hundreds of miniature hearts and captivates with the color Passion Red, which stands for energy, strength and shared passion.",
    brand: "KitchenAid",
    category: "Kitchen",
    price: 980.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPhone 11 Pro 256GB Memory",
    image:
      "https://www.costco.co.uk/medias/sys_master/images/h1f/h4f/15600594288670.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bosch Stainless Steel Black Toaster",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61yjfVWLWsL._AC_SY450_.jpg",
    description:
      "Electronic sensor for even toasting results and High lift for easy removal of small slices.",
    brand: "Bosch",
    category: "Kitchen",
    price: 79.9,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "KENNETH BERNARD Pro Hair Dryer",
    image:
      "https://cdn.shopify.com/s/files/1/1533/3199/products/chatters-kb2_1024x.jpg?v=1560518754",
    description:
      "This Professional stylist designed and recommended hair dryer has a powerful AC motor generating 1875 watts of power.",
    brand: "Kenneth Bernard",
    category: "Hair Care",
    price: 74.95,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Matein Travel Grey Laptop Backpack",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81ml5KuQpHL._AC_SL1500_.jpg",
    description:
      "Laptop Backpack: Anti Theft, Slim, Durable, USB Charging Port, Water Resistant, Fits 15.6 Inch Notebook",
    brand: "Matein",
    category: "Luggage & Travel Gear",
    price: 29.99,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Elegant Digital Photo Frame 1593, 15 inch, 4GB",
    image:
      "https://www.techinn.com/f/13787/137877895/braun-digiframe-1593-15-4gb.jpg",
    description:
      "Digital Photo Frame with Motion Sensor and Remote Control, Video Player, Stereo, MP3, Time and Support USB SD Slot.",
    brand: "Braun",
    category: "Electronics",
    price: 62.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
