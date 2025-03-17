import {Router} from 'express'

import { loginUser, registerUser, updateUserProfile } from "../controllers/auth.controller.js";


const router=Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/update-profile/:userId').put( updateUserProfile);


export default router