import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export default class CEPAPIService {

    ApiUrl: string = 'https://viacep.com.br/ws';

    constructor(private http: HttpClient) {}

    load(cep: string){
        return this.http.get<any>(this.ApiUrl+'/'+cep+'/json');
    }

}