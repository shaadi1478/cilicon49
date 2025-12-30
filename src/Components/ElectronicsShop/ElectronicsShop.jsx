import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

/* ---------------- FILTER BAR ---------------- */
const Filters = ({ search, setSearch, sort, setSort }) => (
  <div className="bg-white border rounded p-3 flex flex-col md:flex-row gap-3 justify-between items-center mb-4">
    <input
      className="border rounded px-3 py-2 text-sm w-full md:w-64"
      placeholder="Search for items..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      className="border rounded px-3 py-2 text-sm"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="default">Default sorting</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
    </select>
  </div>
);

/* ---------------- SIDEBAR SECTION ---------------- */
const SidebarSection = ({ title, items, active, onSelect }) => (
  <div>
    <h3 className="font-semibold text-sm mb-3">{title}</h3>
    <ul className="space-y-2 text-sm">
      {items.map((i) => (
        <li
          key={i}
          onClick={() => onSelect(i)}
          className={`cursor-pointer ${
            active === i
              ? "text-orange-500 font-medium"
              : "text-gray-600 hover:text-orange-500"
          }`}
        >
          {i}
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- SIDEBAR ---------------- */
const Sidebar = ({ filters, setFilters }) => {
  const categories = [
    "All",
    "Electronics Devices",
    "Laptop & PC",
    "Smart Phone",
    "Headphone",
    "Gaming Console",
    "Smart Watch",
  ];

  const prices = [
    "Under $50",
    "$50 - $100",
    "$100 - $300",
    "$300 - $500",
    "Above $500",
  ];

  const tags = ["New", "Hot", "Sale", "Trending", "Featured"];

  return (
    <aside className="bg-white shadow-md rounded p-4 space-y-6">
      {/* CATEGORY */}
      <SidebarSection
        title="CATEGORY"
        items={categories}
        active={filters.category ?? "All"}
        onSelect={(v) =>
          setFilters((f) => ({
            ...f,
            category: v === "All" ? null : v,
          }))
        }
      />

      {/* PRICE */}
      <SidebarSection
        title="PRICE RANGE"
        items={prices}
        active={filters.price}
        onSelect={(v) => setFilters((f) => ({ ...f, price: v }))}
      />

      {/* TAG */}
      <div>
        <h3 className="font-semibold text-sm mb-3">POPULAR TAG</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              onClick={() => setFilters((f) => ({ ...f, tag: t }))}
              className={`text-xs border px-2 py-1 rounded cursor-pointer ${
                filters.tag === t
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-500 hover:text-white"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

/* ---------------- PAGINATION ---------------- */
const Pagination = ({ page, setPage, total }) => (
  <div className="flex justify-center mt-8 gap-2">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => setPage(i + 1)}
        className={`w-8 h-8 rounded border text-sm ${
          page === i + 1
            ? "bg-orange-500 text-white"
            : "hover:bg-orange-100"
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

/* ---------------- MAIN SHOP ---------------- */
const ElectronicsShop = () => {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    category: null,
    price: null,
    tag: null,
  });

  const itemsPerPage = 8;

  /* FETCH PRODUCTS */
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  /* ✅ CATEGORY FROM ROUTE STATE */
  useEffect(() => {
    if (location.state?.category) {
      setFilters((f) => ({
        ...f,
        category: location.state.category,
      }));
      setPage(1); // reset pagination
    }
  }, [location.state]);

  /* ---------------- FILTER LOGIC ---------------- */
  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filters.category) {
    filtered = filtered.filter(
      (p) => p.category === filters.category
    );
  }

  if (filters.price) {
    if (filters.price === "Under $50")
      filtered = filtered.filter((p) => p.price < 50);
    if (filters.price === "$50 - $100")
      filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100);
    if (filters.price === "$100 - $300")
      filtered = filtered.filter((p) => p.price > 100 && p.price <= 300);
    if (filters.price === "$300 - $500")
      filtered = filtered.filter((p) => p.price > 300 && p.price <= 500);
    if (filters.price === "Above $500")
      filtered = filtered.filter((p) => p.price > 500);
  }

  if (sort === "low")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const visible = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <div className="hidden lg:block lg:col-span-3">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* PRODUCTS */}
        <div className="col-span-12 lg:col-span-9">
          <Filters
            search={search}
            setSearch={setSearch}
            sort={sort}
            setSort={setSort}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <ProductSkeleton key={i} />
                ))
              : visible.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
          </div>

          {!loading && totalPages > 1 && (
            <Pagination page={page} setPage={setPage} total={totalPages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsShop;
