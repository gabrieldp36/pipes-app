import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name:'mayusculas',
})
export class MayusculasPipe implements PipeTransform {

    transform( value: string, enMayusucula: boolean = true): string {

        return (enMayusucula) ? value.toUpperCase() : value.toLowerCase();
    };
};