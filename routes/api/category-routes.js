const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryId }
    });
//Check if the rows were affected by put request
    if (updatedCategory[0] === 1) {
      res.status(200).json({ message: "Category updated successfully" });
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try{
    const categoryId = req.params.id;
    const deleteCategory = await Category.destroy({
      where: {id: categoryId}
    });
    //if deletion is successful, deleteCategory will contain information about the delete record
    //if no record is deleted, the id was not found in database
    if (!deleteCategory){
      res.status(404).json({message: "no trip with this id!"});
      return;
    }
    res.status(200).json({message: `you have successfully deleted category with an id of ${categoryId} `});
  } catch(err) {
    res.status(500).json(err);
  } 
});

module.exports = router;
