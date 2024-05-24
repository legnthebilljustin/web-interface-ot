export type TaskFormData = {
    id?: number
    name: string
    description: string
    deadline: string | null
    status?: string
    assignedTo: string | null
}

export type Task = {
    id: number
    name: string
    description: string | null
    deadline: string | null
    status: number
    assignedTo: any | null
    createdAt: string
}