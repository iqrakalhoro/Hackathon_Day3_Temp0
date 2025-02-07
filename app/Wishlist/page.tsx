// "use client";

// import { useWishlist } from "@/app/context2/WishlistContext";
// import Image from "next/image";
// import { IoIosCloseCircle } from "react-icons/io";

// // ✅ Define the props for Wishlist component
// interface WishlistProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Wishlist: React.FC<WishlistProps> = ({ isOpen, onClose }) => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   if (!isOpen) return null; // Hide if wishlist is closed

//   return (
//     <div className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//       isOpen ? "translate-x-0" : "translate-x-full"
//     }`}>
//       <div className="p-6 flex justify-between items-center border-b">
//         <h2 className="text-lg font-semibold">My Wishlist</h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-red-500">
//           <IoIosCloseCircle size={24} />
//         </button>
//       </div>

//       <div className="p-4 overflow-y-auto h-[80%]">
//         {wishlist.length > 0 ? (
//           wishlist.map((item) => (
//             <div key={item.id} className="relative p-4 border rounded-lg shadow-md mb-4">
//               <button
//                 className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//                 onClick={() => removeFromWishlist(item.id)}
//               >
//                 <IoIosCloseCircle size={24} />
//               </button>
//               <Image
//                 src={item.imagePath || "/placeholder.png"}
//                 alt={item.name}
//                 width={100}
//                 height={100}
//                 className="w-full h-32 object-cover rounded-md"
//               />
//               <h3 className="mt-2 text-sm font-medium">{item.name}</h3>
//               <p className="text-[#B88E2F] font-bold">Rs. {item.price.toLocaleString("en-IN")}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600">Your wishlist is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
