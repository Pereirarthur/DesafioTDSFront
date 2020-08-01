import { Component, OnInit } from '@angular/core';
import { ImagemService } from 'src/services/domain/imagem.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  constructor(public imagemService:ImagemService) { }

  ngOnInit() {
    this.imagemService.find().subscribe(this.showInScreen, this.errorInScreen);
  }

  showInScreen(response){
    console.log(response)
  }

  errorInScreen(error){
    console.log(error)
  }

}
