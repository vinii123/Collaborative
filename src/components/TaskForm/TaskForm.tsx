'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema, TaskFormData } from '@/lib/validators';
import { useTaskStore } from '@/hooks/useTaskStore';
import { 
    TO_DO,
    IN_PROGESS,
    DONE,
    LOW,
    MEDIUM,
    HIGH,
    BTN_TEXT,
 } from "@/lib/constants";

const TaskForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const addTask = useTaskStore((state) => state.addTask);

  const onSubmit = (data: TaskFormData) => {
    addTask(data);
    reset();
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded bg-black flex gap-2 justify-center">
      <input {...register('title')} placeholder="Title" className="input bg-white text-base h-[50px] w-[200px] p-2 rounded-sm text-black" />
      <textarea {...register('description')} placeholder="Description" className="textarea h-[50px] w-[400px] p-2 rounded-sm bg-white text-bases text-black" />
      <select {...register('status')} className="select w-[200px] h-[50px] text-black bg-white">
        <option value="To Do">{TO_DO}</option>
        <option value="In Progress">{IN_PROGESS}</option>
        <option value="Done">{DONE}</option>
      </select>
      <select {...register('priority')} className="select w-[200px] h-[50px] text-black bg-white">
        <option value="Low">{LOW}</option>
        <option value="Medium">{MEDIUM}</option>
        <option value="High">{HIGH}</option>
      </select>
      <input {...register('dueDate')} type="date" className="input w-[200px] h-[50px] text-black bg-white" />
      <input {...register('assignee')} placeholder="Assignee" className="input w-[200px] h-[50px] bg-white text-base p-4 rounded-sm text-black" />
      <button type="submit" className="cursor-pointer h-[50px] w-[150px] bg-white border-0 rounded-sm text-cyan-600">{BTN_TEXT}</button>
      {formState.errors.title && <p className="text-red-500">{formState.errors.title.message}</p>}
    </form>
  );
}

export default TaskForm