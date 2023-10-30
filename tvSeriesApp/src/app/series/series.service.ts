import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Serie } from './serie';

@Injectable({
	providedIn: 'root',
})
  
export class SeriesService {
	private API_URL = environment.BASE_URL + 'series.json';
	constructor(private http: HttpClient) {}

	getSeries(): Observable<Serie[]> {
		return this.http.get<Serie[]>(this.API_URL);
	}
}
