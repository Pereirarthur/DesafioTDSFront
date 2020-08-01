import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Imagem } from 'src/models/Imagem';
import { Observable } from 'rxjs';

@Injectable()
export class ImagemService {

    constructor(public http: HttpClient){
    }

    find() : Observable<Imagem>{
        return this.http.get<Imagem>(`${API_CONFIG.baseUrl}/imagens/1`);
    }

}