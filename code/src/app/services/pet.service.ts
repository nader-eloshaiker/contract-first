import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private _httpClient: HttpClient,
    private _apiService: ApiService
  ) {
  }

  public getPetById(pet_id: number): Observable<Pet> {
    if (pet_id === null || pet_id === undefined) {
      throw new Error('Required parameter pet_id was null or undefined when calling getPetById.');
    }

    return this._httpClient.get<Pet>(`${this._apiService.baseUrl}/pet/${encodeURIComponent(String(pet_id))}`,
      {
        headers: this._apiService.headers,
      }
    );
  }
}
