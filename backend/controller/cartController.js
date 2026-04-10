import { Cart } from "../models/cartModel.js";
import { Product } from "../models/productModel.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.id;

    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart) {
      return res.json({ success: true, cart: [] });
    }
    res.status(200).json({ success: true, cart });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// export const addToCart = async (req, res) => {
//   try {
//     const userId = req.id;
//     const { productId } = req.body;

//     // check if product exists
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     // find the user's cart (if exists)
//     let cart = await Cart.findOne({ userId });

//     // If cart doesn't exists, create a new one
//     if (!cart) {
//       cart = new Cart({
//         userId,
//         items: [{ productId, quantity: 1, price: product.productPrice }],
//         totalPrice: product.productPrice,
//       });
//     } else {
//       // Find if product is already in the cart
//       const itemIndex = cart.items.findIndex(
//         (item) => item.productId.toString() === productId,
//       );

//       if (itemIndex > -1) {
//         // if product exists -> just increase quantity
//         cart.items[itemIndex].quantity += 1;
//       } else {
//         // if new product -> push to cart
//         cart.items.push({
//           productId,
//           quantity: 1,
//           price: product.productPrice,
//         });
//       }
//     }
//     // Recalculate total price
//     cart.totalPrice = cart.items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );

//     // Save updated cart
//     await cart.save();

//     // Populate product details before sending response
//     const populatedCart = await Cart.findById(cart._id).populate(
//       "items.productId",
//     );

//     res.status(200).json({
//       success: true,
//       message: "Product added to cart",
//       cart: populatedCart,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export const addToCart = async (req, res) => {
  try {
    const userId = req.id;
    const { productId, quantity } = req.body;
    const qtyToAdd = Number(quantity) || 1;

    // ✅ Validate
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    // ✅ Check product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // ✅ Find or create cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [],
        totalPrice: 0,
      });
    } else {
      // 🛠️ Auto-repair corrupted db entries missing productIds
      cart.items = cart.items.filter(item => item && item.productId);
    }

    // ✅ Check if already in cart
    const itemIndex = cart.items.findIndex(
      (item) => item.productId?.toString() === productId
    );

    if (itemIndex > -1) {
      // Check limit of 5
      const newQty = (cart.items[itemIndex].quantity || 0) + qtyToAdd;
      if (newQty > 5) {
        return res.status(400).json({
          success: false,
          message: `Maximum 5 items allowed. You already have ${cart.items[itemIndex].quantity} in cart.`,
        });
      }

      cart.items[itemIndex].quantity = newQty;
      cart.items[itemIndex].price = cart.items[itemIndex].price || product.productPrice;
    } else {
      // Check limit of 5 for new item
      if (qtyToAdd > 5) {
        return res.status(400).json({
          success: false,
          message: "Maximum 5 items allowed per product.",
        });
      }

      cart.items.push({
        productId,
        quantity: qtyToAdd,
        price: product.productPrice || 0,
      });
    }

    // Recalculate total price
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
      0
    );

    await cart.save();

    // Populate items with product details before sending
    const populatedCart = await Cart.findById(cart._id).populate("items.productId");

    return res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart: populatedCart,
    });

  } catch (error) {
    console.log("CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack
    });
  }
};
export const updateQuantity = async (req, res) => {
  try {
    const userId = req.id;
    const { productId, type } = req.body;

    let cart = await Cart.findOne({ userId })
    if (!cart) return res.status(404).json({ success: false, message: "Cart not found" })

    // 🛠️ Auto-repair
    cart.items = cart.items.filter(item => item && item.productId);

    const item = cart.items.find(item => item.productId?.toString() === productId)
    if (!item) return res.status(404).json({ success: false, message: "Item not found" })

    if (type === "increase") {
      if (item.quantity >= 5) {
        return res.status(400).json({
          success: false,
          message: "Maximum 5 items allowed per product.",
        });
      }
      item.quantity += 1;
    }
    if (type === "decrease" && item.quantity > 1) item.quantity -= 1;

    cart.totalPrice = cart.items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)

    await cart.save()
    cart = await cart.populate("items.productId")

    res.status(200).json({ success: true, cart })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.id;
    const { productId } = req.body;

    let cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({
      success: false,
      message: "Cart not found"
    })

    // 🛠️ Auto-repair and filter out requested item
    cart.items = cart.items.filter(item => item && item.productId && item.productId.toString() !== productId)
    cart.totalPrice = cart.items.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)

    cart = await cart.populate("items.productId")

    await cart.save()
    res.status(200).json({
      success: true,
      cart
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}