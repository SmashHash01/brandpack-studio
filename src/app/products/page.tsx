'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading, Badge } from '@/components/ui';
import { categories } from '@/data/content';
import { productsData } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const productsList = Object.values(productsData);

  const filteredProducts = productsList.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || product.industries.includes(selectedIndustry);
    return matchesCategory && matchesIndustry;
  });

  const industriesList = [
    { value: 'all', label: 'All Industries' },
    { value: 'restaurants', label: 'Restaurants' },
    { value: 'cloud-kitchens', label: 'Cloud Kitchens' },
    { value: 'cafes', label: 'Cafes' },
    { value: 'bakeries', label: 'Bakeries' },
    { value: 'd2c-brands', label: 'D2C Brands' },
    { value: 'cosmetics', label: 'Cosmetics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'corporate-gifting', label: 'Corporate Gifting' },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <SectionHeading
            tag="Custom Catalog"
            title="Browse our premium packaging range"
            subtitle="Select from a comprehensive range of custom print-on-demand custom packaging products designed for your brand."
            align="center"
          />

          {/* Filters Control Panel */}
          <div className="mt-12 bg-white rounded-3xl border border-border-gray p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Category selector */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-3">
                  Categories
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-charcoal text-white border-charcoal'
                          : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Industry Filter dropdown */}
              <div className="shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-3">
                  Filter by Industry
                </span>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="bg-soft-gray border border-border-gray rounded-full px-5 py-2.5 text-xs font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-kraft cursor-pointer"
                >
                  {industriesList.map((ind) => (
                    <option key={ind.value} value={ind.value}>
                      {ind.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-3xl border border-border-gray overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="h-48 bg-gradient-to-br from-bg-warm to-sand-beige/40 flex items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.category === 'boxes' ? '📦' :
                     product.category === 'bags' ? '🛍️' :
                     product.category === 'food-packaging' ? '🍔' :
                     product.category === 'cutlery-sleeves' ? '🍴' :
                     product.category === 'labels-stickers' ? '🏷️' : '📦'}
                  </span>
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {product.foodSafeAvailable && <Badge variant="food-safe">Food-Safe</Badge>}
                    {product.ecoFriendlyAvailable && <Badge variant="eco">Eco</Badge>}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-text mb-4 flex-1 line-clamp-3">
                    {product.shortDescription}
                  </p>

                  <div className="border-t border-border-gray pt-4 mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-text mb-4">
                      <span>MOQ: <span className="font-semibold text-charcoal">{product.moq} units</span></span>
                      <span>Delivery: <span className="font-semibold text-charcoal">{product.productionTimeMin}-{product.productionTimeMax} days</span></span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="flex-1 text-center bg-charcoal hover:bg-kraft text-white text-xs font-semibold py-2.5 rounded-full transition-colors duration-300"
                      >
                        Start Designing
                      </Link>
                      <Link
                        href={`/quote?product=${product.slug}`}
                        className="flex-1 text-center border border-border-gray hover:bg-soft-gray text-charcoal text-xs font-semibold py-2.5 rounded-full transition-colors duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full bg-white rounded-3xl border border-border-gray p-12 text-center">
                <span className="text-4xl block mb-3">🔍</span>
                <h4 className="text-lg font-bold text-charcoal mb-1">No products found</h4>
                <p className="text-sm text-muted-text">Try adjusting your filters or category selectors.</p>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
