import Paginations from "../../ui/dashboard/paginations/paginations"
import Search from "../../ui/dashboard/search/search"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../../ui/dashboard/styles/users.module.css"
import { fetchProduct } from "../../lib/data"
import { searchParams} from "next/navigation"
import { deleteProduct } from "../../lib/actions"


const ProductsPage = async () => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const products = await fetchProduct();

  if (products === null) {
 
    return <div>No products available</div>;
  }
  
  console.log("products", products);


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt ? new Date(product.createdAt).toString().slice(4, 16) : ""}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginations  />
    </div>
  );
};

export default ProductsPage;