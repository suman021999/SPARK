import {Router} from 'express'
import {uploadProfileImage,removeProfileImage, createLink, getUserLinks, getLinkById, updateLink,  createShop, getUserShops, getShopById, updateShop} from '../controllers/user.controller.js'
import { upload } from "../middlewares/upload.middleware.js";
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router=Router()


  
router.route("/upload-profile").post(authMiddleware, upload.single("avatar"), uploadProfileImage);

router.route("/remove-profile").put( authMiddleware, removeProfileImage);

// links

router.route("/links/create").post(authMiddleware, createLink)
router.route("/links/:userId").get(authMiddleware, getUserLinks); // Get all links for a user
router.route("/links/:linkId").get(authMiddleware, getLinkById); // Get a single link by ID
router.route("/links/update/:linkId").put(authMiddleware, updateLink); // Update a link
// router.route("/delete/:linkId").delete( deleteLink); // Delete a link

// shop

router.route("/shop/create").post(authMiddleware, createShop)
router.route("/shop/:userId").get(authMiddleware, getUserShops); 
router.route("/shop/:linkId").get(authMiddleware, getShopById); 
router.route("/shop/update/:shopId").put(authMiddleware, updateShop); // Update a shop

export default router