import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RandomNamesService {

    url: string = 'http://localhost:8080/name';
    urlPrepareNames: string = 'http://localhost:8080/name/prepare'
    names: string[] = ["Alberto", "Bernardo", "Carlos", "Daniel", "Buyo", "Zubi", "Clark"];

    constructor( private http: HttpClient ) { }

    public getRandomNameBackend(): string {
        let randomName: string = '';
        this.http.get<string>(this.url).subscribe( response => randomName = response );
        return randomName;
    }

    public addName(name: string): void {
        console.log(name);
        this.names.push(name);
        console.log(this.names);
    }

    public createNameList() {
        this.http.post<any>(this.urlPrepareNames, this.names, {}).subscribe(
            response => console.log('POST names')
        );
    }

}