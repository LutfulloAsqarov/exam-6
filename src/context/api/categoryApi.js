import { api } from "./index";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: (params) => ({
                url: "/category",
                params,
            }),
            providesTags: ["Category"],
        }),

        createCategory: build.mutation({
            query: (body) => ({
                url: "/category",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Category"],
        }),
        updateCategory: build.mutation({
            query: ({ id, body }) => ({
                url: `/category/${id}`,
                method: "PUT", // or "PATCH"
                body,
            }),
            invalidatesTags: ["Category"],
        }),
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,
} = productApi;
