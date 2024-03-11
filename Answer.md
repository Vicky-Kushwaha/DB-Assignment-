
1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram?

Ans)
Each product category entity represents a category or type of product, such as Electronics,
Clothing, or Home Appliances. Multiple products can fall under the same category. For example,
under the "Electronics" category, you might have products like smartphones, laptops, or cameras.

Each product entity belongs to exactly one product category.This ensures that every product is classified under a specific category.

To implement this relationship in a relational database like mongodb, the "Product" entity usually contains a reference Id  of the "Product_Category" entity. This reference Id  establishes the link between the two entities.

With this relationship in place, you can easily query products based on
their categories or navigate from a product to its corresponding category and vice versa.

Overall, this relationship structure helps organize and classify products into logical groupings,
making it easier to manage and navigate through the product catalog. 




2. How could you ensure that each product in the "Product" table has a valid category assigned to
it?

Ans)
 During data insertion or update, we have to ensure that the provided "category_id" value corresponds to an existing category in the "productCategory" collection. You can perform this validation at the application level before saving the data to the database.