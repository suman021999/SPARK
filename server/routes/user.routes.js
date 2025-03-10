import {Router} from 'express'
import {uploadProfileImage,removeProfileImage} from '../controllers/user.controller.js'
import { upload } from "../middlewares/upload.middleware.js";
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router=Router()


  
router.route("/upload-profile").post(authMiddleware, upload.single("avatar"), uploadProfileImage);

router.route("/remove-profile").put( authMiddleware, removeProfileImage);
// router.route('/delete').delete(linkdelete)
// router.route('/update').put(linkupdate)



export default router