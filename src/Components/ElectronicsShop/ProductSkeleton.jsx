const ProductSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="w-full h-[420px] bg-gray-200 rounded" />
          <div className="flex gap-3 mt-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded" />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-5 bg-gray-200 rounded w-1/4" />
          <div className="h-20 bg-gray-200 rounded" />
          <div className="h-10 bg-gray-200 rounded w-full" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
