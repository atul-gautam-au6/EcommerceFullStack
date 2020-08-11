import express from 'express'
import {allProduct, getProductsByID} from '../controller/productController'

const router = express.Router()

router.get('/api/products',allProduct)

router.get('/api/products/:id', getProductsByID)






export default router;


