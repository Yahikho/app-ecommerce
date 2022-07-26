export interface registerEmailModel{
    id: number
    code_verify: number
    email: string
    token: string,
    validated: boolean
    create_at: Date
    update_at: Date
}

export type createRegisterEmailModel = Omit<registerEmailModel, 'validated' | 'create_at' | 'id' | 'update_at'>

export type updateRegisterEmailModel_Email = Omit<registerEmailModel, 'email' | 'create_at' | 'id' | 'update_at'>

export type getRegisterEmail_code = Omit<registerEmailModel,'id' | 'email' | 'token' | 'validated' | 'create_at' | 'update_at'>

export type updateRegisterEmailModel_Code = Omit<registerEmailModel,'id' | 'code_verify' | 'email' | 'token' | 'create_at' | 'update_at'>