export const TaskStatusKeys = {
    CANCELLED: 0,
    NOT_STARTED: 1,
    IN_PROGRESS: 2,
    FOR_REVIEW: 3,
    READY_FOR_TESTING: 4,
    CLOSED: 5,
}

export const TaskStatusLabels = {
    [TaskStatusKeys.CANCELLED]: "Cancelled",
    [TaskStatusKeys.NOT_STARTED]: "Not Started Yet",
    [TaskStatusKeys.IN_PROGRESS]: "In Progress",
    [TaskStatusKeys.FOR_REVIEW]: "For Review",
    [TaskStatusKeys.READY_FOR_TESTING]: "Ready For Testing",
    [TaskStatusKeys.CLOSED]: "Closed"
}