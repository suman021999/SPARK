import {Router} from 'express'

import { getUserProfile, handleSave, loginUser, logout, registerUser, updateUserProfile } from "../controllers/auth.controller.js";


const router=Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/update-profile/:userId').put( updateUserProfile);
router.route("/logout").post(logout);
router.route("/user/:userId").get(getUserProfile);
router.route("/saved").put(handleSave)

export default router