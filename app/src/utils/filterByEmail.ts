export const filterByEmail = (allSelectedTasks: any[], userId: string | null): any[] => {
    return allSelectedTasks.filter(item => item.userId === userId);
  };