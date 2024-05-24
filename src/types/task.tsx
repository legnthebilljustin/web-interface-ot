export type TaskFormData = {
    id?: string
    name: string
    description: string
    deadline: string | null
    status?: string
    assignedTo: string | null
}