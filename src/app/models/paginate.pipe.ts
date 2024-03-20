import { Pipe, PipeTransform } from '@angular/core';

interface PaginateOptions {
  currentPage: number;
  itemsPerPage: number;
}

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(items: any[], options: PaginateOptions): any[] {
    const startIndex = (options.currentPage - 1) * options.itemsPerPage;
    const endIndex = startIndex + options.itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
}
