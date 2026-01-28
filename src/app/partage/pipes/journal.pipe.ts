import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'journal',
  standalone: true
})
export class JournalPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }
    
    return items.filter(item => 
      item.nom?.toLowerCase().includes(filter.toLowerCase()) ||
      item.titre?.toLowerCase().includes(filter.toLowerCase()) ||
      item.alim_nom_fr?.toLowerCase().includes(filter.toLowerCase()) ||
      item.description?.toLowerCase().includes(filter.toLowerCase()) ||
      item.objet?.toLowerCase().includes(filter.toLowerCase())
    );
  }
}