export type ITaskStatus = 'To Do' | 'In Progress' | 'Done';
export type IPriority = 'Low' | 'Medium' | 'High';

export interface Recipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
}

export interface ITask {
    id: string;
    title: string;
    description?: string;
    status: ITaskStatus;
    priority: IPriority;
    dueDate?: string;
    assignee?: string;
}

export interface ITaskStore {
    tasks: ITask[];
    addTask: (task: Omit<ITask, 'id'>) => void;
    updateTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
    moveTask: (id: string, status: ITaskStatus) => void;
  }