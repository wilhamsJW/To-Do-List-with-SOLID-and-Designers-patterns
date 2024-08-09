export interface DataNote {
    title: string;
    description: string;
    pendingTask?: boolean;
    concludedTask?: boolean;
    userId: string;
    status?: string;
    idTask?: string | undefined
  }

  export interface TaskSaver {
    save(taskId: string, title: string, description: string, loggedUser: string | ''): void;
  }