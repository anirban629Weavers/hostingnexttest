import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
                <Link href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Go to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound