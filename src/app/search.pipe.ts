import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class searchPipe implements PipeTransform {
    
    transform( subjects:any, searchTerm:any ) {
console.log('sea')
        if(searchTerm == '') {
            return subjects;
        } else {
            searchTerm = searchTerm.toLowerCase();
            let searchResults:any[] = [];

            subjects.forEach((subject:any) => {
                if(subject.name.toLocaleLowerCase().indexOf(searchTerm) > -1 ) {
                    searchResults.push(subject)
                }
            });

            return searchResults;
        }

    }

}
