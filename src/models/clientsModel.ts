export interface Client {
    id: number
    email: string
    password: string
    create_at : Date | null
    update_at : Date | null
}

export type createClientModel = Omit<Client, 'id' | 'create_at' | 'update_at'>