import { Component, OnInit } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      titulo: 'Universidad Nacional de ingenieria',
      descripcion: 'Universidad Lider en Ciencia y Tecnologia',
      lngLat: [ -86.26978951633527 ,12.131713231462921]
    },
    {
      titulo: 'MetroCentro',
      descripcion: 'Centro Comercial, Contiguo a la UNI Y UCA',
      lngLat: [ -86.26514957649047, 12.128271126087077, ]
    },
    {
      titulo: 'KM 14 Carretera Masaya',
      descripcion: 'Diferentes negocios de entretenimientos',
      lngLat: [ -86.20166439889725, 12.05458280181224]
    },
    {
      titulo: 'Puerto SAlvador Allende',
      descripcion: 'Atraccion turistica de la capital',
      lngLat: [ -86.27506699981001, 12.162514803821571, ]
    },
  ];
  

}
