import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import SearchFilters from "./components/SearchFilters.jsx";
import ListingsGrid from "./components/ListingsGrid.jsx";

const SAMPLE_ITEMS = [
  {
    id: "1",
    title: "Wooden Coffee Table",
    description:
      "Minimalist oak coffee table, lightly used. Perfect for living rooms.",
    category: "Furniture",
    status: "Good Condition",
    country: "Germany",
    city: "Berlin",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Laptop (needs new battery)",
    description: "13-inch ultrabook. Works when plugged in. Battery replacement needed.",
    category: "Electronics",
    status: "Needs Repair",
    country: "USA",
    city: "Austin",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Children’s Story Books Bundle",
    description: "Set of 12 story books for ages 5-8.",
    category: "Books",
    status: "Good Condition",
    country: "India",
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Cordless Drill Kit",
    description: "Comes with bits and carry case.",
    category: "Tools",
    status: "Good Condition",
    country: "Canada",
    city: "Toronto",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d09f30d5b01?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Winter Jackets (Men M, Women S)",
    description: "Two warm jackets. Pick up only.",
    category: "Clothing",
    status: "Good Condition",
    country: "Norway",
    city: "Oslo",
    image:
      "https://images.unsplash.com/photo-1548883354-75a57569700f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Microwave Oven",
    description: "Turns on but plate doesn’t rotate.",
    category: "Appliances",
    status: "Needs Repair",
    country: "Brazil",
    city: "São Paulo",
    image:
      "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function App() {
  const [filters, setFilters] = useState({
    q: "",
    country: "",
    city: "",
    category: "",
    condition: "",
  });

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return SAMPLE_ITEMS.filter((it) => {
      const matchQ =
        !q ||
        it.title.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q);
      const matchCountry =
        !filters.country ||
        it.country.toLowerCase().includes(filters.country.toLowerCase());
      const matchCity =
        !filters.city || it.city.toLowerCase().includes(filters.city.toLowerCase());
      const matchCat = !filters.category || it.category === filters.category;
      const matchCond = !filters.condition || it.status === filters.condition;
      return matchQ && matchCountry && matchCity && matchCat && matchCond;
    });
  }, [filters]);

  const handleConnect = (item) => {
    alert(
      "Please log in or register to connect with the giver. Social login coming soon."
    );
  };

  const onLogin = () => {
    alert("Secure login required for posting and connecting. (UI only in this demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-neutral-900">
      <Navbar onLogin={onLogin} />
      <Hero onBrowse={() => document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" })} onPost={onLogin} />
      <SearchFilters
        filters={filters}
        onChange={setFilters}
        onReset={() =>
          setFilters({ q: "", country: "", city: "", category: "", condition: "" })
        }
      />
      <ListingsGrid items={filtered} onConnect={handleConnect} />
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} RE2USE — Built for sustainability and global access.
          </p>
          <p>Public listings • Authentication required to connect with givers</p>
        </div>
      </footer>
    </div>
  );
}
