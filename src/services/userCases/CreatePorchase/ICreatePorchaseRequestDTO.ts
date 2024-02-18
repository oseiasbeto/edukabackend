export interface course {
    id: string
}
export interface customer {
    id: string,
    username: string,
    email: string,
}

export interface ICreatePurchaseRequestDTO {
    course: course,
    customer: customer
}