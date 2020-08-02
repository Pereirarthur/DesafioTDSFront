import { Component, OnInit} from '@angular/core';
import { ImagemService } from 'src/services/domain/imagem.service';
import { Imagem } from 'src/models/Imagem';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  constructor(public imagemService:ImagemService) { }

  public imagemPath : string= ".\\assets\\placeholder.png";
  public imagemId : string = "";
  public imagem : Imagem;

  pesquisar(){
    this.imagemService.find(this.imagemId).subscribe(this.changeImage,this.errorInScreen);
  }
  
  changeImage(response){
    this.imagem = response;
    this.imagemId = this.imagem.id;
    this.imagemPath = `${API_CONFIG.imagePath}${this.imagemId}.png`;
    (document.getElementById('imgShow') as HTMLImageElement).src = this.imagemPath;
    console.log(this.imagemPath);
  }

  ngOnInit() {
  }
  
  showInScreen(response){
    console.log(response);
  }

  errorInScreen(error){
    window.alert("Imagem não encontrada");
  }

}
