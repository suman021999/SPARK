import {Router} from 'express'

import { getUserProfile, loginUser, logout, registerUser, updateUserProfile } from "../controllers/auth.controller.js";


const router=Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/update-profile/:userId').put( updateUserProfile);
router.route("/logout").post(logout);
router.route("/user/:userId").get(getUserProfile);

export default router