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

    for (let i = 0; i < toySeeds.length; i++) {
      const categoryName = toySeeds[i].category;
      var id = await Category.findOne({ category: categoryName });
    }

    const categoryId = id._id;
    const categoryName = id.name;

    const toyArray = toySeeds;

    updatedToySeeds = await toyArray.map((category) => {
      let temp = Object.assign({}, category);
      if (temp.category === categoryName) {
        temp.category = categoryId;
      }
      return temp;
    });

    Toys.create(updatedToySeeds);

    console.log('toys seeded!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeding done!');
  process.exit(0);
});
