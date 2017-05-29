import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'phone'
})
export class PhonePipe implements PipeTransform{

    transform(val:any,args:any){
        //Custom Logic to transform the data 
        val = val.charAt(0) != 0 ? '0' + val : '' + val;
        let newStr = '';
        for(var i=0; i < (Math.floor(val.length/2) - 1); i++){
           newStr = newStr+ val.substr(i*2, 2) + '-';
        }
        return newStr+ val.substr(i*2);
    }
}