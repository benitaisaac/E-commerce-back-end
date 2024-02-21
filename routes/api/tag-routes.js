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
    const tagId = req.params.id;
    const tagData = await Tag.findByPk(tagId, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tagData) {
      res.status(404).json({ message: "no category found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const tagId = req.params.id;
    const updateTag = await Tag.update(req.body, {
      where: { id: tagId },
    });
    //Check if rows were affected by request
    if (updateTag[0] === 1) {
      res.status(200).json({ message: "Tag updated sucessfully" });
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch {
    res.status(400).json({ error: err.message });
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tagId = req.params.id;
    const deleteTag = await Tag.destroy({
      where: { id: tagId },
    });

    if (!deleteTag) {
      res.status(404).json({ message: "no tag with this id!" });
      return;
    }
    res
      .status(200)
      .json({
        message: `you have successfully deleted tag with an id of ${tagId}`,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
