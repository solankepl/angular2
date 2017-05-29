import { Component, OnInit } from '@angular/core';
import {PhotosService} from './photos.service';
@Component({
    
    selector: 'photos',
    template:`
              <table>
              <tr *ngFor="let photo of photos">
              <td>{{photo.id}}</td>
              <td><img height="50px" width="50px" src="{{photo.url}}"></td>
              </tr>
              </table>
    
    ` ,
    providers:[PhotosService]
})
export class PhotosComponent implements OnInit {
    photos:any;
    constructor(private photosservice:PhotosService) {
        //Shud we make an Ajax call here?
        //Service are singletons 
     }

    ngOnInit() { 
        // //ASych call
        // this.photosservice.getPhotos().then(response=>{
        //     //Filtering/processing logic can be done here
        //     this.photos = response;
        // })

        this.photosservice.getPhotos2().subscribe(photosData=>{
            this.photos = photosData;
        })
    }
}