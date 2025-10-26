import { Search, MapPin, Filter } from "lucide-react";

const categories = [
  "Furniture",
  "Electronics",
  "Clothing",
  "Books",
  "Tools",
  "Appliances",
  "Kids’ Toys",
  "Other",
];

export default function SearchFilters({
  filters,
  onChange,
  onReset,
}) {
  return (
    <section className="w-full border-y border-neutral-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid md:grid-cols-5 gap-3">
          <div className="md:col-span-2 flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500">
            <Search className="h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search title or description"
              value={filters.q}
              onChange={(e) => onChange({ ...filters, q: e.target.value })}
              className="w-full outline-none placeholder:text-neutral-400 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 shadow-sm">
            <MapPin className="h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Country"
              value={filters.country}
              onChange={(e) => onChange({ ...filters, country: e.target.value })}
              className="w-full outline-none placeholder:text-neutral-400 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 shadow-sm">
            <MapPin className="h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="City"
              value={filters.city}
              onChange={(e) => onChange({ ...filters, city: e.target.value })}
              className="w-full outline-none placeholder:text-neutral-400 text-sm"
            />
          </div>

          <select
            value={filters.category}
            onChange={(e) => onChange({ ...filters, category: e.target.value })}
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            value={filters.condition}
            onChange={(e) => onChange({ ...filters, condition: e.target.value })}
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm"
          >
            <option value="">Any condition</option>
            <option value="Good Condition">Good Condition</option>
            <option value="Needs Repair">Needs Repair</option>
          </select>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Filter className="h-4 w-4" />
            Use filters to refine your search
          </div>
          <button
            onClick={onReset}
            className="text-sm text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
