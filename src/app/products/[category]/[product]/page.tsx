'use client';

import { use, useState, useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Navbar, Footer } from '@/components/layout';
import { Container, Button, Badge } from '@/components/ui';
import { productsData } from '@/data/products';
import { materials, type MaterialName } from '@/components/3d/MaterialPresets';

// Lazy load the 3D viewer to avoid SSR mismatches with Canvas
const ProductViewer = dynamic(
  () => import('@/components/3d/ProductViewer'),
  { ssr: false }
);

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const { product: productSlug } = resolvedParams;

  const product = productsData[productSlug as keyof typeof productsData];

  // Configurator state
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialName>('kraft');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [customColor, setCustomColor] = useState<string>('');
  const [showDieline, setShowDieline] = useState<boolean>(false);
  const [showDimensions, setShowDimensions] = useState<boolean>(false);
  const [uploadedLogo, setUploadedLogo] = useState<string | null>(null);

  // Set initial size
  useMemo(() => {
    if (product?.availableSizes?.[0]) {
      setSelectedSize(product.availableSizes[0].label);
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-bg-warm min-h-screen flex items-center">
          <Container className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <Link href="/products" className="text-kraft underline">
              Back to Catalog
            </Link>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  const currentSizeObj = product.availableSizes.find(s => s.label === selectedSize);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-bg-warm min-h-screen">
        <Container>
          {/* Breadcrumbs */}
          <div className="text-xs font-semibold text-muted-text uppercase tracking-wider mb-6 flex gap-2">
            <Link href="/products" className="hover:text-charcoal transition-colors">Catalog</Link>
            <span>/</span>
            <Link href={`/products/${product.category}`} className="hover:text-charcoal transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 3D Studio Canvas */}
            <div className="lg:col-span-7 space-y-6">
              <ProductViewer
                category={product.category}
                material={selectedMaterial}
                customColor={customColor}
                showDieline={showDieline}
                showDimensions={showDimensions}
                uploadedLogo={uploadedLogo}
              />

              {/* Viewer control hud buttons */}
              <div className="bg-white rounded-2xl border border-border-gray p-4 flex flex-wrap gap-3 justify-center shadow-sm">
                <button
                  onClick={() => setShowDieline(!showDieline)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                    showDieline ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                  }`}
                >
                  📐 Dieline Overlay {showDieline ? 'ON' : 'OFF'}
                </button>
                <button
                  onClick={() => setShowDimensions(!showDimensions)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                    showDimensions ? 'bg-charcoal text-white border-charcoal' : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                  }`}
                >
                  📏 Dimension Grid {showDimensions ? 'ON' : 'OFF'}
                </button>
                {uploadedLogo && (
                  <button
                    onClick={() => setUploadedLogo(null)}
                    className="px-4 py-2 rounded-full text-xs font-semibold border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 transition-all"
                  >
                    🗑️ Remove Logo
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Custom Configuration Panel */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-border-gray p-6 lg:p-8 shadow-sm space-y-6">
              <div>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-charcoal leading-tight mb-2">
                  {product.name}
                </h1>
                <p className="text-sm text-muted-text leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Selector modules */}
              <div className="space-y-5">
                {/* Size choice */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-2">
                    Select Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size.label}
                        onClick={() => setSelectedSize(size.label)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                          selectedSize === size.label
                            ? 'bg-kraft text-white border-kraft'
                            : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                  {currentSizeObj && (
                    <span className="text-[10px] text-muted-text block mt-1.5 font-medium">
                      Dimensions: {currentSizeObj.length} × {currentSizeObj.width} × {currentSizeObj.height} {currentSizeObj.unit}
                    </span>
                  )}
                </div>

                {/* Material choice */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-2">
                    Material Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableMaterials.map((matKey) => {
                      const matObj = materials[matKey as keyof typeof materials];
                      if (!matObj) return null;
                      return (
                        <button
                          key={matKey}
                          onClick={() => setSelectedMaterial(matKey as MaterialName)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                            selectedMaterial === matKey
                              ? 'bg-kraft text-white border-kraft'
                              : 'bg-soft-gray text-charcoal border-border-gray hover:border-charcoal'
                          }`}
                        >
                          {matKey.charAt(0).toUpperCase() + matKey.slice(1)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* File logo uploader */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-text block mb-2">
                    Upload Logo / Artwork
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      id="logo-uploader"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo-uploader"
                      className="cursor-pointer bg-soft-gray hover:bg-border-gray text-charcoal border border-border-gray rounded-full px-5 py-2.5 text-xs font-semibold transition-colors flex items-center gap-2"
                    >
                      📁 Choose File
                    </label>
                    <span className="text-[10px] text-muted-text">
                      PNG/JPG transparent vector files preferred
                    </span>
                  </div>
                </div>
              </div>

              {/* MOQ & Price box */}
              <div className="border-t border-border-gray pt-6">
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-muted-text font-medium">Starting MOQ</span>
                  <span className="font-extrabold text-charcoal text-base">{product.moq} units</span>
                </div>
                <div className="flex justify-between items-center text-sm mb-6">
                  <span className="text-muted-text font-medium">Production Timeline</span>
                  <span className="font-extrabold text-eco-green text-base">
                    {product.productionTimeMin}-{product.productionTimeMax} business days
                  </span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/quote?product=${product.slug}&material=${selectedMaterial}&size=${selectedSize}`}
                    className="flex-1 text-center bg-charcoal hover:bg-kraft text-white text-sm font-bold py-3.5 rounded-full transition-colors duration-300 shadow-sm"
                  >
                    Start Designing
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center border border-border-gray hover:bg-soft-gray text-charcoal text-sm font-bold py-3.5 rounded-full transition-colors duration-300"
                  >
                    Request Sample
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Long Description and guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 border-t border-border-gray pt-12">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-bold text-charcoal">Product Details</h2>
              <p className="text-sm text-muted-text leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </p>

              {/* Use Cases */}
              <div className="pt-4">
                <h3 className="text-base font-bold text-charcoal mb-3">Common Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-text">
                  {product.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-kraft rounded-full" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-bg-warm/50 border border-border-gray rounded-3xl p-6 space-y-6">
              {/* Artwork guidelines HUD */}
              <div>
                <h3 className="text-base font-bold text-charcoal mb-3">Artwork Guidelines</h3>
                <ul className="space-y-2.5 text-xs text-muted-text">
                  {product.artworkGuidelines.map((guide, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed">
                      <span className="text-kraft font-semibold">{i + 1}.</span>
                      <span>{guide}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
