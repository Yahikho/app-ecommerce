export interface registerEmailModel{
    id: number
    code_verify: number
    email: string
    token: string,
    validated: boolean,
    createAt: Date
}

export type createRegisterEmailModel = Omit<registerEmailModel, 'validated' | 'createAt' | 'id'>

export type updateRegisterEmailModel_Email = Omit<registerEmailModel, 'email' | 'createAt' | 'id'>

export type getRegisterEmail_code = Omit<registerEmailModel,'id' | 'email' | 'token' | 'validated' | 'createAt'>

export type updateRegisterEmailModel_Code = Omit<registerEmailModel,'id' | 'code_verify' | 'email' | 'token' | 'createAt'>