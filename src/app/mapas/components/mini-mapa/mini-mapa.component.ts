import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
      `
        div{
          width:100%;
          height: 150px;
          margin: 0px;
        }
      `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lnfLat: [number, number]= [0,0];

  @ViewChild("mapa") divMapa!: ElementRef;

  

  constructor() { }

  ngAfterViewInit(): void {
    
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lnfLat,
      zoom: 15,
      interactive: true
    });

    new mapboxgl.Marker()
    .setLngLat(this.lnfLat)
    .addTo(mapa)
  }

  

}
