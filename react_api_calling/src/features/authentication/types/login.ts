export interface user_info {
    user_name : string
    email_address : string
    profile_image : string
}

export interface loginapi_model{
    success : boolean
    message : string
    user : user_info
}