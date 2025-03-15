import {Router} from 'express'
import {uploadProfileImage,removeProfileImage, createLink, getUserLinks, getLinkById, updateLink, uploadProfiletext} from '../controllers/user.controller.js'
import { upload } from "../middlewares/upload.middleware.js";
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router=Router()


  
router.route("/upload-profile").post(authMiddleware, upload.single("avatar"), uploadProfileImage);

router.route("/remove-profile").put( authMiddleware, removeProfileImage);
router.route("/update-profile/:userId").put( uploadProfiletext);

router.route("/create").post(authMiddleware, createLink)
router.route("/:userId").get(authMiddleware, getUserLinks); // Get all links for a user
router.route("/:linkId").get(authMiddleware, getLinkById); // Get a single link by ID
router.route("/update/:linkId").put(authMiddleware, updateLink); // Update a link
// router.route("/delete/:linkId").delete( deleteLink); // Delete a link



export default router