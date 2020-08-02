import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Imagem } from 'src/models/Imagem';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable()
export class ImagemService {

    constructor(public http: HttpClient){
    }

    find(imgId : String) : Observable<Imagem>{
        return this.http.get<Imagem>(`${API_CONFIG.baseUrl}/imagens/`+imgId);
    }

    findAcessos(imgId : String) : Observable<Imagem>{
        return this.http.get<Imagem>(`${API_CONFIG.baseUrl}/imagens/verificar/`+imgId);
    }

    insert (formdata: FormData): Observable<Imagem>{
        return this.http.post<Imagem>(`${API_CONFIG.baseUrl}/imagens`, formdata);
    }

    delete (imgId:String, imagemChave){
        return this.http.delete(`${API_CONFIG.baseUrl}/imagens/`+imgId, {
            params:{
                chaveRemocao:imagemChave
            },
            observe: 'response',
        });
    }
}