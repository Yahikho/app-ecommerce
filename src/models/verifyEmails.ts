export interface VerifyEmail{
    id: number
    code_verify: number
    email: string
    token: string
    createAt: Date
}

export type CreateVerifyEmail = Omit<VerifyEmail, 'createAt' | 'id'>
