


export class UserDTOModel {
    
    id?: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    ddd: string;
    phone: string;
    birth: string;
    address: any;

    constructor(name: string, email: string, password: string, cpf: string, ddd: string, phone: string, birth: string, postcode: string, st: string, city: string, neighborhood: string, street: string, number: string, id?: number){
        this.id = id,
        this.name = name;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.ddd = ddd;
        this.phone = phone;
        this.birth = birth;
        this.address = {
            'postcode': postcode,
            'st': st,
            'city': city,
            'neighborhood': neighborhood,
            'street': street,
            'number': number
        }
    }
}