import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserDTOModel } from 'src/app/DTOs/UserDTO.model';
//import { SettingService } from 'src/app/services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService implements OnInit, OnDestroy{

    ApiUrl: string = 'http://localhost/api/bemoldigitallaravelchallenge';
    HttpOptions = {};
    //m_Subscription: Subscription;
    
    constructor(private http: HttpClient, private p_Router: Router) {}

	ngOnInit(){
	}



    private  genericPost( p_Url: string, p_BodyRequest: any): Observable<any>{		
        this.setHeader();
		
		return this.http.post<any>(this.ApiUrl + p_Url, p_BodyRequest, this.HttpOptions )
    }

    private  genericGet( p_Url: string): Observable<any>{
        this.setHeader();		
		return this.http.get<any>(this.ApiUrl)
    }
	
    private setHeader(){
        this.HttpOptions ={
            headers: new HttpHeaders(
                {
					'Content-Type': 'application/json;charset=utf8'
                }
            )
        };
    }

    ngOnDestroy(): void {
        //this.m_Subscription.unsubscribe();
    }

	load(){
        return this.http.get<any>(this.ApiUrl);
    }

    store(body: UserDTOModel){
        return this.http.post<any>(this.ApiUrl, body);
    }

    destroy(id: number){
        return this.http.delete<any>(this.ApiUrl+'/'+id);
    }

    edit(id: number){
        return this.http.get<any>(this.ApiUrl+'/'+id+'/edit');
    }

    update(body: UserDTOModel, id: number){
        return this.http.put<any>(this.ApiUrl+'/'+id, body);
    }


}
