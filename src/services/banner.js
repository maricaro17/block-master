import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const findAllBanner = async () => {
  const banners = await getDocs(collection(db, "Banner"));
  const list = []
  banners.forEach((doc) => {
      list.push({
          id: doc.id,
          ...doc.data()
      })
  });
  return list
};

export {findAllBanner}