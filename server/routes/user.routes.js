import {Router} from 'express'
import {uploadProfileImage,removeProfileImage, createLink, getUserLinks, getLinkById, updateLink} from '../controllers/user.controller.js'
import { upload } from "../middlewares/upload.middleware.js";
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router=Router()


  
router.route("/upload-profile").post(authMiddleware, upload.single("avatar"), uploadProfileImage);

router.route("/remove-profile").put( authMiddleware, removeProfileImage);
// router.route("/update-profile/:userId").put( uploadProfiletext);

// router.route("/create").post( createLink); // Create a new link
router.route("/create").post(authMiddleware, createLink)
router.route("/").get( getUserLinks); // Get all links for a user
router.route("/:linkId").get( getLinkById); // Get a single link by ID
router.route("/update/:linkId").put( updateLink); // Update a link
// router.route("/delete/:linkId").delete( deleteLink); // Delete a link



export default router