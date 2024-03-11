const {Schema,model} = require("mongoose");

const productDiscountSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	discount_percent: {
        type: Schema.Types.Decimal128,
        required: true 
	},
	active: {
		type: Boolean,
		required: true,
	    default: true
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


const productDiscount = model("productDiscount",productDiscountSchema);

module.exports = productDiscount;