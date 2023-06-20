import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {
    url = "http://localhost:3000/companies";

    constructor(private http: HttpClient) { }
    getCompanies(): Observable<Company[]>{
        return this.http.get<Company[]>(this.url);
    }

    save(company: Company): Observable<Company>{
        return this.http.post<Company>(this.url, company);
    }
}
