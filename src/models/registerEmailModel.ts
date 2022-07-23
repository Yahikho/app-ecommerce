export interface VerifyEmail{
    id: number
    code_verify: number
    email: string
    token: string
    createAt: Date
}

export type registerEmailModel = Omit<VerifyEmail, 'createAt' | 'id'>
