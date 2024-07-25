import React from "react";
import "./createProduct.scss";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetValue } from "../../../hooks/useGetValue";

const initialState = {
    title: "",
    price: "",
    category: "",
    description: "",
    images: "",
};

const CreateProduct = () => {
    const [createProduct] = useCreateProductMutation();
    const { formData, handleChange } = useGetValue(initialState);
    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData);
    };

    return (
        <div>
            <div className="createProduct">
                <h1>Create Product</h1>
                <form
                    action=""
                    className="createProduct__form"
                    onSubmit={handleSubmit}
                >
                    <div className="createProduct__input">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            name="images"
                            value={formData.images}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Tanlang</option>
                            <option value="olma">olma</option>
                            <option value="anor">anor</option>
                        </select>
                    </div>
                    <div className="createProduct__input">
                        <label htmlFor="desc">Desc</label>
                        <textarea
                            id=""
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
