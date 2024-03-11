const {Schema,model} = require("mongoose");

const productInventorySchema = new Schema({
	quantity: {
		type: Number,
		default: 1;
	},
    created_at: {
		type: Date,
	    default: Date.now
	},
	modified_at: {
		type: Date,
	},
    deleted_at: {
		type: Date,
	},
});


const productInventory = model("productInventory",productCategorySchema);

module.exports = productInventory;