/**
 * Task describes a single action that should be done by the user.
 * For example: “Go for a 10 minutes run” or “Go to bed before 11:00 PM”
 */
export interface Task {
    id: number;
    description: string;
}


/**
 * Achievement describes a set of several tasks accomplished in the specific way.
 * For example: “Complete each task 7 days in a row” or “Complete 5 tasks before 8:00 AM”
 */
export interface Achievements extends Task {
    image: Image;

    checkComplete(): Status;
}

/**
 * Describes an image type. Contains path to an image and short description
 */
export interface Image {
    path: string;
    description: string;
}

/**
 * Status describes a state of some item (a task or anachievement)
 * and a timestamp, when this state was updated
 */
export interface Status {
    state: State;
    updated: Date;
}

/**
 * Describe possible states
 */
export enum State { Pending = 'Pending', Success = 'Success', Failure = 'Failure'}

/**
 * Challenge describes a 30-days period, during which randomly
 * chosen 30 tasks and 5 achievements are assigned for the user.
 * Starting from the first day, the user will receive a new task every day,
 * which should be completed before the midnight, overwise it will be marked as failed.
 * Achievements status is calculated based on tasks completion. After 30 days the
 * challenge could be successful (>= 90% tasks completed) or failed (<90% tasks completed)
 */
export interface Challenge {
    id: number;
    state: State;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus: Status;
    achievementsStatus: Status;
}

/**
 * ActualTask provides information about a task and its current status in scope of the challenge
 */
export interface ActualTask extends Task {
    status: Status;
}

/**
 * ArchiveItem describes a task and its status for all past tasks in the challenge
 */
export interface ArchiveItem extends ActualTask {
    challengeId: number
}

/**
 ActualAchievement provides information about an achievement and its current
 status in scope of the challenge
 */
export interface ActualAchievement extends ActualTask {
    image: Image;
}

/**
 describe task with status
 */
export interface TaskWithStatus extends Task {
    status: Status;
}
