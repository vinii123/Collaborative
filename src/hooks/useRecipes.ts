'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Recipe } from '@/lib/interface';

export const useRecipes = () => {
  return useQuery<Recipe[]>({
    queryKey: ['recipes'],
    queryFn: async () => {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      return res.data.meals;
    },
  });
};
