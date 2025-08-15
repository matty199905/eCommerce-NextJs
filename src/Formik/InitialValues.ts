
type ContactIV = {
    user_name:string,
    user_email:string,
    message:string,
}

export const contactInitialValues: ContactIV = {
    user_name: "",
    user_email: "",
    message: "",
}

export type RegisterIV = {
    name:string,
    email:string,
    password:string,
    password2:string,
}

export const registerInitialValues: RegisterIV = {
    name: "",
    email: "",
    password: "",
    password2: "",
}

type LoginIV = {
    email:string,
    password:string,
}

export const loginInitialValues: LoginIV = {
    email: "",
    password: "",
}

type CheckoutIV = {
    name:string,
    cellphone:string,
    location:string,
    address:string,
}

export const checkoutInitialValues: CheckoutIV = {
    name: "",
    cellphone: "",
    location: "",
    address: "",
}