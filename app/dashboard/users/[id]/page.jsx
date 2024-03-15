import Image from 'next/image'
import React from 'react'
import styles from '../../../ui/dashboard/styles/idusers.module.css'
import { fetchUser, fetchUsers } from '../../../lib/data';


const User = async ({ params }) => {
  const { id } = params;
  const user = await fetchUsers(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {user.name}
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder="username" value={user.username}/>  
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" defaultValue={user.password} />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin === 'true'}>Yes</option>
            <option value="false" selected={user.isAdmin === 'false'}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value="true" selected={user.isActive === 'true'}>Yes</option>
            <option value="false" selected={user.isActive === 'false'}>No</option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default User;
