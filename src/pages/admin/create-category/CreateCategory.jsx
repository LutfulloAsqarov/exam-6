import React from "react";
import {
    useCreateCategoryMutation,
    useGetCategoriesQuery,
} from "../../../context/api/categoryApi";
import { useGetValue } from "../../../hooks/useGetValue";

const initialState = {
    title: "",
};

const CreateCategory = () => {
    const [createCategory] = useCreateCategoryMutation();
    const { data: categoryData } = useGetCategoriesQuery();
    const { formData, handleChange } = useGetValue(initialState);

    console.log(formData);
    console.log(categoryData);

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory(formData);
        // formData.title = "";
    };

    return (
        <div>
            <div className="createProduct">
                <h1>Create Category</h1>
                <form
                    action=""
                    className="createProduct__form"
                    onSubmit={handleSubmit}
                >
                    <div className="createProduct__input">
                        <label htmlFor="title">Category</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <button>Create</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;
