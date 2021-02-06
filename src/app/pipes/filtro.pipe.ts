import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string, columna: string): any {
    if (texto == '') {
      return value;
    }

    texto = texto.toLowerCase();

    return value.filter(item => {
      return item[columna].toLowerCase().includes(texto);
    });
  }

}
