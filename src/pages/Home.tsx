import React, { useEffect, useState } from 'react'

interface Product {
  id: number
  title: string
  image: string
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>This is a sample paragraph to showcase text styling across themes.</p>
      <button className="px-4 py-2 rounded text-white bg-blue-500 theme-hover transition-colors duration-200 cursor-pointer">
        Action
      </button>

      <h2 className="text-xl font-semibold pt-4">Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded shadow-md transition-transform duration-300 hover:scale-105 bg-white dark:bg-gray-800"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="font-semibold text-sm line-clamp-2 bg-[var(--bg)]">{product.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
