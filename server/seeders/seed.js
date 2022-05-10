const db = require('../config/connection');
const { User, Toys, Categories } = require('../models');
const userSeeds = require('./userSeeds.json');
const toySeeds = require('./toySeeds.json');
const categorySeeds = require('./categorySeeds.json');
const { Category } = require('../models');
const { json } = require('express');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Toys.deleteMany({});
    await Category.deleteMany({});

    await User.create(userSeeds);
    console.log('users seeded!');
    const categories = await Category.insertMany(categorySeeds);
    console.log('categories seeded!');

    for (let i = 0; i < toySeeds.length; i++) {
      const toys = toySeeds;

      stringifyCategory = await JSON.stringify(toys[i].category);

      console.log(stringifyCategory);
    }

    console.log('toys seeded!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeding done!');
  process.exit(0);
});
