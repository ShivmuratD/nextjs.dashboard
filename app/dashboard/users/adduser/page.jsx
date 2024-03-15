import styles from "../../../ui/dashboard/styles/adduser.module.css"
import { createUser } from "../../../lib/actions";



const AddUser = () => {
    return (
      <div className={styles.container}>
        <form action={createUser} className={styles.form}>
          <input type="text" placeholder="User name" name="user name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <input type="phone" placeholder="phone" name="name" required/>
            <select name="Is Admin" id="is Admin">
          <option value={false}  >Is Admin?</option>
          <option value={true} >Yes</option>
          <option value={false}>No</option>
          </select>
          <select name="Is Active" id="is Active">
          <option value={true}>Is Active?</option>
          <option value={true} >Yes</option>
          <option value={false}>No</option>
          </select>
          <textarea
            required
            name="address"
            id="address"
            rows="16"
            placeholder="Address"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default AddUser;
  