import {Router} from 'express'
import {uploadProfileImage,removeProfileImage, createLink, getUserLinks, getLinkById, updateLink,  createShop, getUserShops, getShopById, updateShop, linkClick, shopClick, deleteLink, deleteShop} from '../controllers/user.controller.js'
import { upload } from "../middlewares/upload.middleware.js";
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router=Router()


  
router.route("/upload-profile").post(authMiddleware, upload.single("avatar"), uploadProfileImage);

router.route("/remove-profile").put( authMiddleware, removeProfileImage);

// links

router.route("/links/create").post(authMiddleware, createLink)
router.route("/links/:userId").get(authMiddleware, getUserLinks)
router.route("/links/:linkId").get(authMiddleware, getLinkById)
router.route("/links/update/:linkId").put(authMiddleware, updateLink)
router.route('/links/:id/click').put(linkClick)
router.route("/links/delete/:linkId").delete(authMiddleware, deleteLink);

// shop

router.route("/shop/create").post(authMiddleware, createShop)
router.route("/shop/:userId").get(authMiddleware, getUserShops); 
router.route("/shop/:linkId").get(authMiddleware, getShopById); 
router.route("/shop/update/:shopId").put(authMiddleware, updateShop)
router.route('/shop/:id/click').put(shopClick)
router.route("/shop/delete/:shopId").delete( authMiddleware, deleteShop)



export default router