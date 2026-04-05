import { Wishlist } from "../models/wishlistModel.js";

// ADD / REMOVE WISHLIST
export const toggleWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = req.user._id;

    const existing = await Wishlist.findOne({
      user: userId,
      product: productId,
    });

    // REMOVE
    if (existing) {
      await existing.deleteOne();

      return res.json({
        success: true,
        message: "Removed from wishlist",
      });
    }

    // ADD
    const wishlist = new Wishlist({
      user: userId,
      product: productId,
    });

    await wishlist.save();

    res.json({
      success: true,
      message: "Added to wishlist",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.find({
      user: req.user._id,
    }).populate("product");

    // remove null products
    const products = wishlist
      .filter(item => item.product !== null)
      .map(item => item.product);

    res.json({
      success: true,
      wishlist: products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};