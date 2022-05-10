const db = require('../config/connection');
const { User, Toys, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const toySeeds = require('./toySeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Toys.deleteMany({});
    await Category.deleteMany({});

    await User.create(userSeeds);
    console.log('users seeded!');
    await Category.create(categorySeeds);
    console.log('categories seeded!');

    const categories = await Category.find();

    toySeeds.forEach((toy) => {
      const category = categories.find((cat) => {
          return cat.name === toy.category
      })

      toy.category = category._id
    });

    await Toys.create(toySeeds);

    console.log('toys seeded!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeding done!');
  process.exit(0);
});
