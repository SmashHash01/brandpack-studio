'use client';

import { use } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/layout';
import { Container, SectionHeading, Badge } from '@/components/ui';
import { categories } from '@/data/content';
import { productsData } from '@/data/products';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const categoryId = resolvedParams.category;

  const currentCategory = categories.find((cat) => cat.id === categoryId);
  const categoryProducts = Object.values(productsData).filter(
    (prod) => prod.category === categoryId
  );

  if (!currentCategory) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-bg-warm min-h-screen flex items-center">
          <Container className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <Link href="/products" className="text-kraft underline">
              Back to Catalog
            </Link>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-bg-warm min-h-screen">
        <Container>
          <SectionHeading
            tag="Category Overview"
            title={currentCategory.name}
            subtitle={currentCategory.description}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {categoryProducts.map((product) => (
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
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="text-sm font-semibold text-kraft hover:underline">
              ← Back to all categories
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
