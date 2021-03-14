import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router();
import {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProductReview,
    getTopProducts,
    createProduct
} from '../controllers/productControllers.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//@desc Fetch all products
router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)



export default router;
