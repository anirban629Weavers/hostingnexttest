import { Product } from '@/app/types'
import React from 'react'

const SingleProduct = async ({ params }: { params: { id: string } }) => {
    const product: Product = await (await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`, {
        method: "GET"
    })).json()
    return (
        <div
            style={{
                marginTop: '10px',
                width: '200px',
                height: '200px',
                border: '1px solid black',
                textAlign: 'center',
            }}>
            <h6><b>{product.title}</b></h6>
            <h6>{product.price}</h6>
            <h6>{product.category.name}</h6>
            <h6>{product.description.substring(0, 60)}</h6>
        </div>)
}

export default SingleProduct