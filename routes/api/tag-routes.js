const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get("/", async (req, res) => {
  try {
    const getTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagId = req.params.id
    const tagData = await Tag.findByPk(tagId, {
      include: [{model: Product, through: ProductTag }],
    });
    if(!tagData) {
      res.status(404).json({message: "no category found with this id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err)
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try{
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag)

  } catch {

  }
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
