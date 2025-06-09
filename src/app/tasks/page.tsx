'use client';
import { useTaskStore } from '@/hooks/useTaskStore';
import TaskForm from '@/components/TaskForm';
import TaskCard from '@/components/TaskCard';
import FilterBar from '@/components/FilterBar';
import { useState } from 'react';
import Link from 'next/link'
import { RECIPE_LIST, TASK_MANAGR } from '@/lib/constants';

export default function TaskBoardPage() {
  const allTasks = useTaskStore((state) => state.tasks);
  const [filters, setFilters] = useState({ status: '', priority: '' });

  const filteredTasks = allTasks.filter((task) => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority)
    );
  });

  const statusesToRender = filters.status ? [filters.status] : ['To Do', 'In Progress', 'Done'];

  return (
    <div className="p-4">
      <div className='flex justify-center gap-16'>
       <Link href="/" className="text-2xl font-bold mb-4 underline">{RECIPE_LIST}</Link>
       <h1 className="text-2xl font-bold mb-4">{TASK_MANAGR}</h1>
      </div>
      <TaskForm />
      <FilterBar onFilter={setFilters} />
      <div className={`grid ${statusesToRender.length === 1 ? 'grid-cols-1' : 'grid-cols-3'} gap-4 mt-8`}>
        {statusesToRender.map((status) => (
          <div key={status} className="bg-gray-100 rounded p-2">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">{status}</h2>
            {filteredTasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
