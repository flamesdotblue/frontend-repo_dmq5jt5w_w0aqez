import { MapPin } from "lucide-react";

function StatusTag({ status }) {
  const isGood = status === "Good Condition";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
        isGood
          ? "bg-emerald-100 text-emerald-800"
          : "bg-amber-100 text-amber-800"
      }`}
    >
      {status}
    </span>
  );
}

function ListingCard({ item, onConnect }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-neutral-900 line-clamp-1">
              {item.title}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-sm text-neutral-600">
              <MapPin className="h-3.5 w-3.5" />
              <span>
                {item.city}, {item.country}
              </span>
            </div>
          </div>
          <StatusTag status={item.status} />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-neutral-500">{item.category}</span>
          <button
            onClick={() => onConnect(item)}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Connect with Giver
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ListingsGrid({ items, onConnect }) {
  return (
    <section id="listings" className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">Latest listings</h2>
          <span className="text-sm text-neutral-600">{items.length} items</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ListingCard key={item.id} item={item} onConnect={onConnect} />
          ))}
        </div>
      </div>
    </section>
  );
}
