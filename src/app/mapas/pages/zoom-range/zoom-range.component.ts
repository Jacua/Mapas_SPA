import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%;
   }

   .row{
     background-color: white;
     bottom:50px;
     left:50px;
     width:400px;
     padding:10px;
     border-radius: 10px;
     position:fixed;
     bottom: 50px;
     z-index:999;
   }
   `
  ]
})
//AfterVIew carga el meotod propio despues que el componenete se renderice
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild("mapa") divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10
  center: [number, number] = [ -86.16126534560341, 12.148362429715132];


  constructor() { }
  ngOnDestroy(): void {
    
    this.mapa.off('zoom', ()=> {});
    this.mapa.off('zoomend', ()=> {});
    this.mapa.off('move', ()=> {});
  }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on("zoom", (ev) => {

      const zoomActual = this.mapa.getZoom();
      this.zoomLevel = zoomActual;

    });

    this.mapa.on("zoomend",(ev) =>{
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18);
      }
    });

    //Movimiento del mapa

    this.mapa.on("move", (event) =>{

      const target = event.target;

      const {lng, lat} = target.getCenter();

      this.center = [lng, lat];

    });

  }

  zoomChange(valor: string){

    this.mapa.zoomTo( Number(valor) );
  }

  zoomOut(){

    this.mapa.zoomOut();
    
  }

  zoomIn(){
    this.mapa.zoomIn();
    
  }

}
