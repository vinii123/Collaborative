import { ITask } from '@/lib/interface';

export default function TaskCard({ task }: { task: ITask }) {
  return (
    <div className="p-2 bg-white border rounded mb-2">
      <h3 className="font-bold text-black">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.priority}</p>
      <p className="text-xs text-gray-500">Due: {task.dueDate || 'N/A'}</p>
      <p className="text-xs text-gray-800 ">Assigned to: {task.assignee || 'Unassigned'}</p>
    </div>
  );
}
