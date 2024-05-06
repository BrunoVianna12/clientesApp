import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn:'root'
})
export class ClienteService {
    constructor(
        private httpClient: HttpClient
    ){}


    consultar(): Observable<Cliente[]> {
        return this.httpClient.get<Cliente[]>(environment.clientesApi);
    }
}