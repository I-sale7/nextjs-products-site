import { getData } from '@/app/services'
import Image from 'next/image'
import React from 'react'
import styles from './product.module.css'

const Product = async ({params}) => {
  const productData = await getData(`https://dummyjson.com/products/${params.product}`);
  const images = productData.images;
  return (
    <div className={styles['product-page']}>
      <h3 className={styles.product__title}>
        {productData.title}
      </h3>
      <Image className={styles.prodcut__thumbnil} src={productData.thumbnail} width={1130} height={300} alt={productData.title} />
      <p className={styles.product__description}>
        {productData.description}
      </p>

      <div className={styles.product__images}>
        { images.map(image => {
          return  <Image src={image} width={300} height={200} alt={productData.title} />
        })
        }
      </div>
    </div>
  )
}

export default Product