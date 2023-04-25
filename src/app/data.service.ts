import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  Bookstore = [

    {id:1, category:'Stories', popular:'true', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:2, category:'Stories', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:3, category:'Romance', popular:'false', newrelease:'true', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:4, category:'Romance', popular:'true', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:5, category:'Romance', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:6, category:'Romance', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:7, category:'Navals',  popular:'false', newrelease:'true', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:8, category:'Navals',  popular:'true', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:9, category:'Navals',  popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:10, category:'Navals', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:11, category:'History', popular:'false', newrelease:'true', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:12, category:'History', popular:'true', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:13, category:'History', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:14, category:'History', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:15, category:'Stories', popular:'false', newrelease:'true', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' },
    {id:16, category:'Stories', popular:'false', newrelease:'false', title:'RichDad PoorDad', price:'499', Image:'../../assets/MPB1.jfif' }
  ]
}
