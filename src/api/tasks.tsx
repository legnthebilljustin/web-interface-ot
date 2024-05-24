import { axiosClient } from "../hooks/useAxiosClient"
import { Task } from "../types/task"

export const getAllTasksAsAdmin = async(): Promise<Task[]> => {
    const { data } = await axiosClient.get('/tasks')

    return data.tasks
}