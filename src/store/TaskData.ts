export enum TaskStatus {
    Queued,
    InProgress,
    Completed
}

export interface TaskModel {
    id: string;
    date: string;
    description?: string;
    title: string;
    status: TaskStatus;
    styles: TaskStyles;
}

export interface TaskStyles {
    highlighted?: boolean;
}

export const tasksInfo: TaskModel[] = [
    {
        id: `task_0`,
        title: 'Task 1',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued,
        styles: {}
    },
    {
        id: `task_1`,
        title: 'Task 2',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued,
        styles: {}
    },
    {
        id: `task_2`,
        title: 'Task 3',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued,
        styles: {}
    },
    {
        id: `task_3`,
        title: 'Task 4',
        date: (new Date()).toDateString(),
        description: 'Complete as soon as possible',
        status: TaskStatus.Queued,
        styles: {}
    }
]