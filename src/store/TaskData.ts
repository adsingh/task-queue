export enum TaskStatus {
    Queued,
    InProgress,
    Completed
}

export interface TaskInfo {
    date: string;
    description?: string;
    title: string;
    status: TaskStatus
}

export const tasksInfo: TaskInfo[] = [
    {
        title: 'Task 1',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued
    },
    {
        title: 'Task 1',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued
    },
    {
        title: 'Task 1',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued
    },
    {
        title: 'Task 1',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued
    }
]