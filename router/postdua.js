const router = require("express").Router();
const Categories = require("../model/categoryModel");
const SubCatLists = require("../model/SubCatList");
const Dua = require("../model/duaModel");

router.post("/category", async (req, res) => {
  try {
    const postData = new Categories({
      categoryName: req.body.categoryName,
      categoryImagePath: req.body.categoryImagePath,
    });
    const data = await postData.save();
    res.status(200).json({ message: "successful", data });
  } catch (error) {
    res.status(404).json(error);
  }
});

//get categories
router.get("/category", async (req, res) => {
  try {
    const duaCategories = await Categories.find();
    console.log(duaCategories);
    res.status(200).json({
      message: "successfully",
      data: duaCategories,
    });
  } catch (error) {
    res.json({ error: error });
  }
});

//post category
router.post("/subCatList/:id", async (req, res) => {
  try {
    const postData = new SubCatLists({
      duaListTitle: req.body.duaListTitle,
      totalDuaNo: req.body.totalDuaNo,
      categoryId: req.params.id,
      references: req.body.references,
    });
    const data = await postData.save();
    res.status(200).json({ message: "successful", data });
  } catch (error) {
    res.status(404).json(error);
  }
});

//Get category
router.get("/subCatList", async (req, res) => {
  try {
    const data = await SubCatLists.find();
    res.status(200).json({ message: "successful", data });
  } catch (error) {
    res.status(404).json(error);
  }
});

//creating dua list
router.post("/dua/:id", async (req, res) => {
  try {
    const postData = new Dua({
      duaListId: req.params.id,
      arabic: req.body.arabic,
      audioPath: req.body.audioPath,
      yoruba: req.body.yoruba,
      transliteration: req.body.transliteration,
    });
    const data = await postData.save();
    res.status(200).json({ message: "successful", data });
  } catch (error) {
    res.status(404).json(error);
  }
});

//Get the Dua
router.get("/dua/duaList", async (req, res) => {
  try {
    const data = await Dua.find();
    res.status(200).json({ message: "successful", data });
  } catch (error) {
    res.status(404).json(error);
  }
});
module.exports = router;
