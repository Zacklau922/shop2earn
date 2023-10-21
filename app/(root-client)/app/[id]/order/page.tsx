import { DataTableDemo } from "@/app/components/Table";
import { title } from "@/app/components/primitives";

export default function OrderPage() {
  return (
    <div>
      <h1 className={title()}>Order History</h1>
      <DataTableDemo />
    </div>
  );
}
