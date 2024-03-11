const {Schema,model} = require("mongoose");


const productSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	desc: {
		type: String
	},
	SKU: {
		type: String
	},
	category_id: {
		type: Schema.ObjectId,
        ref: "productCategory",
        required: true,
	},
	inventory_id: {
		type: Schema.ObjectId,
		ref: "productInventory",
		required: true
	},
	price: {
		type: Schema.Types.Decimal128,
		required: true
	},
	discount_id: {
		type: Schema.ObjectId,
		ref: "productDiscount",
		required: true
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

const product = model("product",productSchema);

module.exports = porduct; 