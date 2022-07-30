require('../models/database');
const Category = require('../models/Category');




/**
 * GET /
 * HomePage
 */

exports.homepage = async(req, res) => {

  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('index', { title: 'Recipe Blog - Homepage', categories });
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured"});
  }
}


/**
 * GET /
 * Categories
 */

 exports.exploreCategories = async(req, res) => {

  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Recipe Blog - Categories', categories });
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured"});
  }
}










//  Don't want to insert anymore data, COMMENT OUT
// async function insertDymmyCategoryData(){
//     try {
//         await Category.insertMany([
//           {
//             "name": "Thai",
//             "image": "thai-food.jpg"
//             },
//             {
//             "name": "American",
//             "image": "american-food.jpg"
//             }, 
//             {
//             "name": "Chinese",
//             "image": "chinese-food.jpg"
//             },
//             {
//             "name": "Mexican",
//             "image": "mexican-food.jpg"
//             }, 
//             {
//             "name": "Indian",
//             "image": "indian-food.jpg"
//             },
//             {
//             "name": "Spanish",
//             "image": "spanish-food.jpg"
//            }                
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDymmyCategoryData();