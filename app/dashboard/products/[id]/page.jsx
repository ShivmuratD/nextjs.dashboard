import Image from 'next/image'
import React from 'react'
import styles from '../../../ui/dashboard/styles/idusers.module.css'


const ProductPage= async () => {
  

 

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
      phone
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="hidden" name="id" value='id'/>
          <label>Title</label>
          <input type="text" name="title" placeholder='title' />
          <label>price</label>
          <input type="number" name="price" placeholder='price' />
          <label>stocke</label>
          <input type="number" name="23" />
          <label>color</label>
          <input type="text" name="color" placeholder='red' />
          <label>Description</label>
          <textarea type="text" name="description" rows={10} placeholder='description' />
          <label>Category</label>
          <select name="category" id="category">
            <option value="tele" >Telecom</option>
            <option value="techno" >Techomnpology</option>
          </select>
          <button className={styles.button}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;