"use server"
import { connectToDB } from "./utils";
import { signIn } from "../auth";


// export const createUser = async (formData) => {
  
//     const  { username, email, password, isActive, isAdmin, phone} =
//     Object.fromEntries(formData);

//     try {
//         await connectToDB(); 
//         const newUser = new User({
//           username,
//           email,
//           password,
//           phone,
//           address,
//           isAdmin,
//           isActive,
//         });
      
//         await newUser.save();
//       } catch (err) {
//         console.log(err);
//         throw new Error("Failed to create user!");
//       }
      

// }

// export const NewProducts = async (formData) => {
  
//     const  { title, desc, price, stock, address} =
//     Object.fromEntries(formData);

//     try {
//         await connectToDB(); 
//         const newproduct = new Products({
//             title, desc, price, stock, address, color, size
//         });
      
//         await newproduct.save();
//       } catch (err) {
//         console.log(err);
//         throw new Error("Failed to create product!");
//       }
      

// }


// export const authenticate = async (prevState, formData) => {
//     const { username, password } = 
//      Object.fromEntries(formData);
  
//     try {
//       await signIn("credentials", { username, password });
//     } catch (err) {
//       if (err.message.includes("CredentialsSignin")) {
//         return "Wrong Credentials";
//       }
//       throw err;
//     }
//   };


export const createUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phone,
        address,
        isAdmin,
        isActive,
      });
  
      await newUser.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };
  
  export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };
  
  export const NewProducts = async (formData) => {
    const { title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  
  export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  
  export const deleteUser = async (formData) => {
  
  
    try {
      const { id } = Object.fromEntries(formData);
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete user!");
    }
  
    revalidatePath("/dashboard/users");
  };
  
  export const deleteProduct = async (formData) => {
  
    try {
      const { id } = Object.fromEntries(formData);
      connectToDB();
      await Product.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete product!");
    }
  
    revalidatePath("/dashboard/products");
  };
  
  // export const authenticate = async (prevState, formData) => {
  //   try {
  //   const { username, password } = Object.fromEntries(formData);    
  //     await signIn("credentials", { username, password });
  //   } catch (err) {
  //     console.log(err)
  //     return "Wrong Credentials!";
  //   }
  // };
  


  export const authenticate = async (formData) => {
    const { username, password } = formData;

    // Perform local authentication (e.g., validate username/password)
    if (username === 'example_user' && password === 'example_password') {
        // Authentication successful, return user data (optional)
        return { username: username, email: 'example@example.com' };
    } else {
        // Authentication failed, return error message
        return "Wrong Credentials";
    }
};
