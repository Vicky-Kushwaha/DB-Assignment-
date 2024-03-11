const {Schema,model} = require("mongoose");

const productCategorySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	desc: {
		type: String,
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


const productCategory = model("productCategory",productCategorySchema);

module.exports = productCategory;