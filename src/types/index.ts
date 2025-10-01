import type { UUIDTypes } from 'uuid'

export type TodoId = UUIDTypes

export interface Todo {
  id: TodoId
  isCompleted: boolean
  text: string
}
