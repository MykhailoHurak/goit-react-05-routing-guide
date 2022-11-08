// export const Products = () => {
//     return (
//         <div>
//             <h1>Products</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat quidem! Quos animi cumque sit similique ipsam officiis quibusdam cum ullam a neque voluptas magnam ea quidem dignissimos inventore sunt dolorem excepturi voluptate repudiandae deserunt perspiciatis, sed voluptatum aspernatur temporibus! Nisi itaque qui saepe, tempora soluta laborum rerum odit error.
//             </p>
//         </div>
//   );
// };



import { ProductsList } from "../components/ProductsList/ProductsList";
import { getProducts } from "../API";

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
};