import { columns } from "./columns";
import { RadialChart } from "./components/calorieChart";
import { FoodTable } from "./components/foodTable";
import { DataTable } from "./data-table";

export default function Home() {
  let foods = [{foodName: "pizza",calories: "160"},{foodName: "sushi", calories: "200"}];
  return (
    <div className="items-center justify-items-center justify-center w-screen min-h-screen p-4 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 justify-items-center items-center justify-center">
        <div className="w-64">
          <RadialChart></RadialChart>
          <DataTable columns={columns} data={foods} />
        </div>
      </main>
    </div>
  );
}
