import { Component, OnInit } from '@angular/core';
import { ImagemService } from 'src/services/domain/imagem.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.page.html',
  styleUrls: ['./deletar.page.scss'],
})
export class DeletarPage implements OnInit {

  public imagemId : string = "";
  public imagemChave: string = "";

  constructor(public imagemService:ImagemService) { }

  pesquisar(){
    this.imagemService.delete(this.imagemId,this.imagemChave).subscribe(this.showInScreen,this.errorInScreen);
  }

  showInScreen(response){
    window.alert("Imagem deletada com sucesso");
  }

  errorInScreen(response){
    window.alert(response.error.msg);
  }

  ngOnInit() {
  }

}
