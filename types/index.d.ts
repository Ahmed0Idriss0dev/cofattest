export type Role = "ADMIN"|"USER"
declare global{
    interface CustomJwtSessionClaims{
        metadata:{
            role?:Role
        }
    }
}