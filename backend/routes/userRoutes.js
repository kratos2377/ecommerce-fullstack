import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router();
import {
authUser,
getUser,
registerUser,
updateUserProfile,
getUsers,
deleteUser,
getUserById,
updateUser,
} from '../controllers/userController.js'
import { protect , admin } from '../middleware/authMiddleware.js'


//@desc Fetch all products
router.route('/').post(registerUser).get(protect , getUsers)
router.post('/login' , authUser)
router.route('/profile').get(protect , getUser).put(protect , updateUserProfile)
router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)




export default router;
