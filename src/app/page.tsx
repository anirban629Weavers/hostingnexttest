import React from 'react'
import { Product } from './types';
import Image from 'next/image';
import Link from 'next/link';

const MainPage = async () => {
    const products: Product[] = await (await fetch('https://api.escuelajs.co/api/v1/products', {
        method: "GET"
    })).json()

    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>MainPage</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {products.map(product =>
                    <Link key={product.id} href={`product/${product.id}`}>
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
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default MainPage