import {Router} from 'express'
import { loginUser, registerUser } from "../controllers/auth.controller";

const router=Router()

router.route('/register').post(registerUser)
router.route('/register').post(loginUser)