import { User, Product } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async () => {
    try {
        await connectToDB(); 
        const users = await User.find();
        return users;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user!");
    }
};


export const fetchUser = async (q, page) => {
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 2;
  
    try {
      connectToDB();
      const count = await User.find({ username: { $regex: regex } }).count();
      const users = await User.find({ username: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, users };
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };


export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
    try {
        await connectToDB(); 
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch product!");
    }
};