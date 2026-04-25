import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import ImageUpload from '@/components/ui/ImageUpload'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { setProducts } from '@/redux/productSlice'
import { Loader2 } from 'lucide-react'
import axios from 'axios'

const AddProduct = () => {
  const accessToken = localStorage.getItem('accessToken')
  const { products } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: 0,
    productDesc: '',
    productImg: [],
    brand: '',
    category: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData((prev) => ({
      ...prev,
      [name]: name === 'productPrice' ? Number(value) : value
    }))
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!productData.productName || !productData.brand || !productData.category) {
      toast.error('Please fill in all required fields')
      return
    }

    if (productData.productImg.length === 0) {
      toast.error('Please select at least one image')
      return
    }

    const formData = new FormData()
    formData.append('productName', productData.productName)
    formData.append('productPrice', productData.productPrice)
    formData.append('productDesc', productData.productDesc)
    formData.append('category', productData.category)
    formData.append('brand', productData.brand)
    productData.productImg.forEach((img) => formData.append('files', img))

    try {
      setLoading(true)
      const res = await axios.post('http://localhost:8000/api/v1/product/add', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      if (res.data.success) {
        dispatch(setProducts([...products, res.data.product]))
        toast.success(res.data.message)
        setProductData({
          productName: '',
          productPrice: 0,
          productDesc: '',
          productImg: [],
          brand: '',
          category: ''
        })
      }
    } catch (error) {
      console.error(error)
      toast.error('Unable to add product. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-slate-50 px-4 py-10'>
      <div className='mx-auto max-w-3xl'>
        <div className='mb-8 rounded-[28px] border border-slate-200 bg-white px-8 py-8 shadow-sm'>
          <div className='mb-4 inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700'>
            Admin • Add product
          </div>
          <h1 className='text-3xl font-semibold text-slate-900'>Add a new product</h1>
          <p className='mt-2 max-w-xl text-sm text-slate-600'>Create a clean listing by adding a product name, price, brand, category, description and images.</p>
        </div>

        <Card className='overflow-hidden rounded-[28px] border border-slate-200 shadow-sm'>
          <CardContent className='p-8'>
            <form className='grid gap-6' onSubmit={submitHandler}>
              <div className='grid gap-2'>
                <Label htmlFor='productName'>Product name</Label>
                <Input
                  id='productName'
                  name='productName'
                  value={productData.productName}
                  onChange={handleChange}
                  placeholder='Example: Elegant Sofa'
                  className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'
                  required
                />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='productPrice'>Price</Label>
                <Input
                  id='productPrice'
                  type='number'
                  name='productPrice'
                  value={productData.productPrice}
                  onChange={handleChange}
                  placeholder='0'
                  min='0'
                  className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'
                  required
                />
              </div>

              <div className='grid gap-4 md:grid-cols-2'>
                <div className='grid gap-2'>
                  <Label htmlFor='brand'>Brand</Label>
                  <Input
                    id='brand'
                    name='brand'
                    value={productData.brand}
                    onChange={handleChange}
                    placeholder='Example: IKEA'
                    className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'
                    required
                  />
                </div>
                <div className='grid gap-2'>
                  <Label htmlFor='category'>Category</Label>
                  <Input
                    id='category'
                    name='category'
                    value={productData.category}
                    onChange={handleChange}
                    placeholder='Example: Living Room'
                    className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'
                    required
                  />
                </div>
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='productDesc'>Description</Label>
                <Textarea
                  id='productDesc'
                  name='productDesc'
                  value={productData.productDesc}
                  onChange={handleChange}
                  placeholder='Add a short description to help customers understand the product.'
                  rows={4}
                  className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200'
                />
              </div>

              <div className='grid gap-2'>
                <Label>Product images</Label>
                <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4'>
                  <p className='mb-3 text-sm text-slate-600'>Upload one or more images for this product.</p>
                  <ImageUpload productData={productData} setProductData={setProductData} />
                </div>
              </div>

              <CardFooter className='pt-0 border-t-0 bg-transparent px-0'>
                <Button type='submit' disabled={loading} className='mx-auto w-fit rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus-visible:ring-blue-300'>
                  {loading ? (
                    <span className='flex items-center justify-center gap-2'>
                      <Loader2 className='h-4 w-4 animate-spin' />
                      Adding product...
                    </span>
                  ) : (
                    'Add product'
                  )}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AddProduct