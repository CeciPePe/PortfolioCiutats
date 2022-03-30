import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../../services/info-pagina.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  infopag: any = '';

  fecha = new Date().getFullYear();

  constructor(private InfoPagService: InfoPaginaService) { }

  ngOnInit(): void {

    this.InfoPagService.getInfoPagina()
      .subscribe((resp: any)=>{
        this.infopag = resp;
      });
  }

}
