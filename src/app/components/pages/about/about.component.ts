import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any =[];

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {

    this.infoPaginaService.getInfoEquipo()
    .subscribe((resp: any)=> {
      this.equipo= resp;
    })
  }

}
