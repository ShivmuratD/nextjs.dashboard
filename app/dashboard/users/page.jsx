import React from 'react'
import {  fetchUsers } from "../../lib/data"
import Search from "../../ui/dashboard/search/search";
import styles from "../../ui/dashboard/styles/users.module.css";
import Image from "next/image";
import Link from "next/link";
import Paginations from '../../ui/dashboard/paginations/paginations';
import { useSearchParams } from 'next/navigation';
import { deleteUser } from '../../lib/actions';

const UsersPage =  async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const usersData = await fetchUsers();
  console.log("Users Data:", usersData);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/adduser">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
         {usersData.map((user) => (
           <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src= "/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                    />
             {user.name}
                </div>
              </td>
            
              <td>{user.email}</td>
              <td>{user.createdAt ? new Date(user.createdAt).toString().slice(4, 16) : ""}</td>
              <td>{user.isAdmin ? "Admin" : "client"}</td>
              <td>{user.isActive ? "Active" : "passive"}</td>
              
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
    
                    <input type="hidden" name="id" value={(user.id)} />
                    <button onClick={deleteUser}  className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  
                </div>
              </td>
            </tr>
      ))}
        </tbody>
      </table>
      <Paginations/>
    </div>
  );
};

export default UsersPage;

