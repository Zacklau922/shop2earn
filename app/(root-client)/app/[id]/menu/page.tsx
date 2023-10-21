import MenuCard from "@/app/components/cards/MenuCard";
import { title } from "@/app/components/primitives";
import { Input } from "@/app/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function MenuPage() {
  return (
    <div className="relative flex flex-col">
      <Input
        type="text"
        placeholder="search item / code"
        className="pr-44 md:pr-80"
      />
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-slate-300" />
      <MenuCard />
    </div>
  );
}
