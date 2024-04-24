import { getData } from '@/app/services'
import Button from '@/components/PureComponents/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './products.module.css'
import Link from 'next/link'

const products = async () => {
  const productsData = await getData('https://dummyjson.com/products');
  console.log(productsData);
  return (
    <div className={styles.products}>
      <h2 className={styles.products__header}>
        {"Our Products"}
        <small>
          {"Here you can check our products, and read more about what we sell and how to acquire it through a smooth and very easy way."}
        </small>
      </h2>
      <div className={styles.products__list}>
        {productsData.products.map(product => {
          return (
            <Link href={`products/${product.id}`} className={styles.products__box}>
              <Image className={styles.products__image} src={product.thumbnail} width={200} height={200} alt='image here'/>
              <div className={styles.products_info}>
                <h3>
                  {product.title}
                </h3>
                <p>{product.description}</p>
                <p>
                  {product.category}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
      
    </div>
  )
}

export default products