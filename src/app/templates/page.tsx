'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { templates, TemplateCategory, TemplateMaterial, TemplateShape, PackagingTemplate } from '@/data/templates';

const CATEGORIES: { label: string; value: TemplateCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Mailer Box', value: 'mailer-box' },
  { label: 'Paper Bag', value: 'paper-bag' },
  { label: 'Food Box', value: 'food-box' },
  { label: 'Cup Sleeve', value: 'cup-sleeve' },
  { label: 'Label', value: 'label' },
  { label: 'Gift Box', value: 'gift-box' },
  { label: 'Pouch', value: 'pouch' },
];

const MATERIALS: { label: string; value: TemplateMaterial }[] = [
  { label: 'All', value: 'all' },
  { label: 'Kraft', value: 'kraft' },
  { label: 'White', value: 'white' },
  { label: 'Black', value: 'black' },
  { label: 'Corrugated', value: 'corrugated' },
];

const SHAPES: { label: string; value: TemplateShape }[] = [
  { label: 'All', value: 'all' },
  { label: 'Tuck-end', value: 'tuck-end' },
  { label: 'Snap-lock', value: 'snap-lock' },
  { label: 'Reverse-tuck', value: 'reverse-tuck' },
  { label: 'Rigid', value: 'rigid' },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory>('all');
  const [activeMaterial, setActiveMaterial] = useState<TemplateMaterial>('all');
  const [activeShape, setActiveShape] = useState<TemplateShape>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<PackagingTemplate | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<'3D' | '2D'>('3D');

  const filteredTemplates = useMemo(() => {
    return templates.filter((t) => {
      const matchCat = activeCategory === 'all' || t.category === activeCategory;
      const matchMat = activeMaterial === 'all' || t.material === activeMaterial;
      const matchShape = activeShape === 'all' || t.shape === activeShape;
      const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchMat && matchShape && matchSearch;
    });
  }, [activeCategory, activeMaterial, activeShape, searchQuery]);

  const SidebarContent = () => (
    <div className="p-6">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm text-charcoal hover:text-kraft transition-colors font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-charcoal">Templates</h2>
        <span className="bg-bg-warm text-charcoal text-xs font-bold px-2 py-1 rounded-full">{templates.length}</span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold text-charcoal mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full text-xs font-medium px-3 py-1.5 transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-charcoal border border-[#E8E6E0] hover:border-charcoal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-charcoal mb-3">Material</h3>
          <div className="flex flex-wrap gap-2">
            {MATERIALS.map((mat) => (
              <button
                key={mat.value}
                onClick={() => setActiveMaterial(mat.value)}
                className={`rounded-full text-xs font-medium px-3 py-1.5 transition-colors ${
                  activeMaterial === mat.value
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-charcoal border border-[#E8E6E0] hover:border-charcoal'
                }`}
              >
                {mat.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-charcoal mb-3">Shape</h3>
          <div className="flex flex-wrap gap-2">
            {SHAPES.map((shape) => (
              <button
                key={shape.value}
                onClick={() => setActiveShape(shape.value)}
                className={`rounded-full text-xs font-medium px-3 py-1.5 transition-colors ${
                  activeShape === shape.value
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-charcoal border border-[#E8E6E0] hover:border-charcoal'
                }`}
              >
                {shape.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[100dvh] h-[100dvh] overflow-hidden bg-[#F5F4F0]">
      {/* Desktop Left Sidebar */}
      <aside className="hidden lg:block w-64 bg-white border-r border-[#E8E6E0] flex-shrink-0 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Bar */}
        <div className="bg-[#F5F4F0] border-b border-[#E8E6E0] px-6 py-4 flex items-center justify-between z-10 sticky top-0">
          <div className="text-sm text-charcoal font-medium">
            Showing {filteredTemplates.length} templates
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border border-[#E8E6E0] bg-white px-4 py-2 text-sm text-charcoal focus:outline-none focus:border-kraft focus:ring-1 focus:ring-kraft w-48 md:w-64 transition-all"
            />
            <button 
              className="lg:hidden p-2 rounded-full border border-[#E8E6E0] bg-white text-charcoal"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Template Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-transparent hover:border-kraft/30 hover:shadow-lg hover:shadow-kraft/10 transition-all duration-300"
                onClick={() => setSelectedTemplate(template)}
              >
                <div className="relative h-40 flex items-center justify-center" style={{ backgroundColor: template.colorHex + '20' }}>
                  <div 
                    className="w-20 h-20 rounded-xl shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
                    style={{ backgroundColor: template.colorHex }}
                  >
                    <div className="w-full h-full rounded-xl border-2 border-white/20" />
                  </div>
                  {template.popular && (
                    <span className="absolute top-2 left-2 bg-kraft text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  {template.new && (
                    <span className="absolute top-2 left-2 bg-eco-green text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-bold text-charcoal mb-1 truncate">{template.name}</h3>
                  <p className="text-[10px] text-charcoal/60">{template.usedByCount.toLocaleString()} brands</p>
                  <p className="text-[10px] font-semibold text-kraft mt-1">From {template.startingPrice}</p>
                </div>
              </div>
            ))}
            {filteredTemplates.length === 0 && (
              <div className="col-span-full py-20 text-center text-charcoal/60">
                No templates found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Right Preview Drawer */}
      <AnimatePresence>
        {selectedTemplate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-30 lg:hidden"
              onClick={() => setSelectedTemplate(null)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-[#E8E6E0] z-40 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E6E0]">
                <h2 className="text-lg font-bold text-charcoal truncate pr-4">{selectedTemplate.name}</h2>
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 -mr-2 rounded-full hover:bg-bg-warm text-charcoal transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pb-32">
                <div style={{ perspective: '400px' }} className="flex items-center justify-center h-56 bg-gradient-to-br from-bg-warm to-[#E8D8C3]/50 relative">
                  <div className="absolute top-4 flex bg-white/50 backdrop-blur-md rounded-full p-1 border border-white/40">
                    <button 
                      onClick={() => setPreviewMode('3D')}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${previewMode === '3D' ? 'bg-white text-charcoal shadow-sm' : 'text-charcoal/60 hover:text-charcoal'}`}
                    >
                      3D Preview
                    </button>
                    <button 
                      onClick={() => setPreviewMode('2D')}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${previewMode === '2D' ? 'bg-white text-charcoal shadow-sm' : 'text-charcoal/60 hover:text-charcoal'}`}
                    >
                      2D Dieline
                    </button>
                  </div>
                  
                  {previewMode === '3D' ? (
                    <div
                      className="w-28 h-28 rounded-2xl shadow-xl transition-transform duration-700"
                      style={{
                        backgroundColor: selectedTemplate.colorHex,
                        transform: 'rotateX(15deg) rotateY(-20deg)',
                      }}
                    />
                  ) : (
                    <div className="w-32 h-32 border-2 border-dashed border-charcoal/30 flex items-center justify-center rounded-lg">
                      <span className="text-xs text-charcoal/50 font-medium uppercase tracking-wider">Dieline View</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    {selectedTemplate.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-bg-warm rounded-xl p-4">
                      <p className="text-[10px] uppercase font-bold text-charcoal/50 mb-1">Dimensions</p>
                      <p className="text-sm font-bold text-charcoal">
                        {selectedTemplate.dimensions.w} × {selectedTemplate.dimensions.h} × {selectedTemplate.dimensions.d} cm
                      </p>
                    </div>
                    <div className="bg-bg-warm rounded-xl p-4">
                      <p className="text-[10px] uppercase font-bold text-charcoal/50 mb-1">Starting Price</p>
                      <p className="text-sm font-bold text-kraft">{selectedTemplate.startingPrice} <span className="text-xs text-charcoal/50 font-normal">/ unit</span></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] uppercase font-bold text-charcoal/50 mb-3">Specifications</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white border border-[#E8E6E0] text-charcoal text-xs font-medium px-3 py-1 rounded-full capitalize">
                        Mat: {selectedTemplate.material}
                      </span>
                      <span className="bg-white border border-[#E8E6E0] text-charcoal text-xs font-medium px-3 py-1 rounded-full capitalize">
                        Shape: {selectedTemplate.shape}
                      </span>
                      <span className="bg-white border border-[#E8E6E0] text-charcoal text-xs font-medium px-3 py-1 rounded-full">
                        Min Qty: {selectedTemplate.minQty}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[10px] uppercase font-bold text-charcoal/50 mb-3">Common Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTemplate.useCases.map((useCase, idx) => (
                        <span key={idx} className="bg-[#E8D8C3]/30 text-kraft text-xs font-medium px-3 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E8E6E0] p-4 flex flex-col gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
                <Link 
                  href="/design-studio" 
                  className="w-full bg-charcoal text-white font-bold text-sm py-3.5 rounded-full text-center hover:bg-charcoal/90 transition-colors"
                >
                  Customize This Template →
                </Link>
                <Link 
                  href="/quote" 
                  className="w-full bg-white text-charcoal border border-charcoal font-bold text-sm py-3.5 rounded-full text-center hover:bg-bg-warm transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Bottom Sheet */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white rounded-t-3xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex justify-center p-3 border-b border-[#E8E6E0]">
                <div className="w-12 h-1.5 bg-charcoal/20 rounded-full" />
              </div>
              <div className="flex-1 overflow-y-auto pb-6">
                <SidebarContent />
              </div>
              <div className="p-4 border-t border-[#E8E6E0] bg-white">
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-charcoal text-white font-bold py-3.5 rounded-full"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
