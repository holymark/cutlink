import { Router } from "express";
import Shortner from "../lib/shortner";
import URLObj from "./model";
const router = Router();
const s = new Shortner();

router.post("/", async (req, res) => {
  const { path } = req.body;
  const pureId = s.generateUniqueRandomId();
  const encodedId = s.encodeId(pureId);

  const url = new URLObj({ path, pureId, encodedId });
  try {
    var savedData = await url.save();

    res.send(savedData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/:encodedId", async (req, res) => {
  try {
    const encodedId = await URLObj.findOne({ encodedId: req.params.encodedId });

    // res.send(encodedId.path);

    //// or redirect the user:
    res.redirect(encodedId.path);
  } catch (e) {
    res.send(e);
  }
});

export default router;
