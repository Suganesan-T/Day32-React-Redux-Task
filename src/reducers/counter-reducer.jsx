import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
        product: [

            {
                quantity: 1,
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://im.indiatimes.in/content/2020/Mar/iPhone-9-and-9-plus_5e71d66e079f2.jpg?w=1200&h=900&cc=1&webp=1&q=75",
                images: [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                quantity: 1,

                id: 2,
                title: "iPhone X",
                description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                price: 899,
                discountPercentage: 17.94,
                rating: 4.44,
                stock: 34,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_new_glass_full.jpg.og.jpg",
                images: [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                quantity: 1,

                id: 3,
                title: "Samsung Universe 9",
                description: "Samsung's new variant which goes beyond Galaxy to the Universe",
                price: 1249,
                discountPercentage: 15.46,
                rating: 4.09,
                stock: 36,
                brand: "Samsung",
                category: "smartphones",
                thumbnail: "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800",
                images: [
                    "https://i.dummyjson.com/data/products/3/1.jpg"
                ]
            },
            {
                quantity: 1,

                id: 4,
                title: "OPPOF19",
                description: "OPPO F19 is officially announced on April 2021.",
                price: 280,
                discountPercentage: 17.91,
                rating: 4.3,
                stock: 123,
                brand: "OPPO",
                category: "smartphones",
                thumbnail: "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk6-img2-1920.jpg",
                images: [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
            {
                quantity: 1,

                id: 5,
                title: "Huawei P30",
                description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                price: 499,
                discountPercentage: 10.58,
                rating: 4.09,
                stock: 32,
                brand: "Huawei",
                category: "smartphones",
                thumbnail: "https://www.financialexpress.com/wp-content/uploads/2019/04/huawei_p30_pro_india.jpg",
                images: [
                    "https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"
                ]
            }
        ]
    },
    reducers: {
        inc: (state, action) => {
            state.product = state.product.map((value) => {
                if (value.id == action.payload.id) {
                    value.quantity = action.payload.quantity
                }
                return value
            })
        },
        remove: (state, action) => {
            let removeItem = state.product.filter((item) => item.id !== action.payload.id);
            state.product = removeItem;
        }

    }
})
export const { inc, remove } = counterSlice.actions