'use client';
import { useRecipes } from '@/hooks/useRecipes';

const RecipeTable = () => {
  const { data, isLoading, error } = useRecipes();

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading recipes.</p>;

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Meal</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Area</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((meal: any) => (
          <tr key={meal.idMeal} className="border-t">
            <td className="px-4 py-2">{meal.strMeal}</td>
            <td className="px-4 py-2">{meal.strCategory}</td>
            <td className="px-4 py-2">{meal.strArea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecipeTable;