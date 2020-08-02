import { Component, OnInit } from '@angular/core';
import { ImagemService } from 'src/services/domain/imagem.service';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.page.html',
  styleUrls: ['./verificar.page.scss'],
})
export class VerificarPage implements OnInit {

  public imagemId : string = "";

  constructor(public imagemService:ImagemService) { }

  pesquisar(){
    this.imagemService.findAcessos(this.imagemId).subscribe(this.showInScreen,this.errorInScreen);
  }

  showInScreen(response){
    window.alert("Número de acessos:"+response.numAcessos);
  }

  errorInScreen(response){
    window.alert("Imagem não encontrada")
  }

  ngOnInit() {
  }

}
