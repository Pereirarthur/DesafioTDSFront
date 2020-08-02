import { Component, OnInit } from '@angular/core';
import { ImagemService } from 'src/services/domain/imagem.service';
import { Imagem } from 'src/models/Imagem'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public imageFileElement = document.getElementById("imageFile") as HTMLInputElement;
  private imageFile:File;
  private fileReader:FileReader;
  private imagem:Imagem;

  constructor(public imagemService:ImagemService) { }

  ngOnInit() {
  }

  registrar(){
    this.imageFileElement = <HTMLInputElement>document.getElementById("imageFile");
    this.imageFile = this.imageFileElement.files[0];
    let formData: FormData = new FormData();
    formData.append('imagem', this.imageFile);
    this.imagemService.insert(formData).subscribe(this.showOnLogSucess,this.showOnLogFailure);
  }

  showOnLogSucess(response){
    window.alert("Registro realizado com sucesso, Chave de Acesso: "+response.id+", Chave de Remoção: "+response.chaveRemocao);
    console.log("Sucesso");
  }

  showOnLogFailure(response){
    console.log("Falhou");
  }


}
