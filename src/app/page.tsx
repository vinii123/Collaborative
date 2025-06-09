import RecipeTable from "@/components/RecipeTable";
import { RECIPE_LIST, TASK, TASK_MANAGR, TASK_PAGE_ROUTE } from "@/lib/constants";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="p-4">
       <div className='flex justify-center gap-16'>
       <h1 className="text-2xl font-bold mb-4">{RECIPE_LIST}</h1>
       <Link href={TASK_PAGE_ROUTE} className="text-2xl font-bold mb-4 underline">{TASK_MANAGR}</Link>
      </div>
      
      <Link href={TASK_PAGE_ROUTE}>{TASK}</Link>
      <RecipeTable />
    </div>
  );
}
