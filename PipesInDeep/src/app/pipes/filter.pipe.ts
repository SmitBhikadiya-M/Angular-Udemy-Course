import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this will forced to update pipe while data is changed of the same compo.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string) {
    if(!filterString || value.length === 0){
      return value;
    }
    const resultArray = [];
    for( const item of value ){
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
