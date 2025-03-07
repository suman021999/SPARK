import {Router} from 'express'
import { linkdelete, linkupdate, user } from '../controllers/user.controller'
import { User } from '../models/user.models';

import { uploadProfileImage } from "../controllers/user.controller.js";
import { upload } from "../middlewares/upload.middleware.js";
import { protect } from "../middlewares/auth.middleware.js"; // Assuming authentication middleware??

const router=Router()

router.get("/avatar/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json({ avatar: user.avatar });
    } catch (err) {
      res.status(404).json({ error: "User not found" });
    }
  });
  router.post("/upload-avatar", protect, upload.single("avatar"), uploadProfileImage);
router.route('/delete').delete(linkdelete)
router.route('/update').put(linkupdate)



export default router