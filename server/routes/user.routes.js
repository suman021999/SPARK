import {Router} from 'express'
import { linkdelete, linkupdate, user } from '../controllers/user.controller'

const router=Router()

router.route('/user').get(user)
router.route('/delete').delete(linkdelete)
router.route('/update').put(linkupdate)



export default router