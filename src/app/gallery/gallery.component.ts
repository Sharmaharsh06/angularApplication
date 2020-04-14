import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images=[
    {description:"Vestibulum ac erat a mauris feugiat hendrerit. Pellentesque vel augue orci. Pellentesque sodales placerat dapibus. Nulla euismod, metus et dictum hendrerit, orci metus feugiat nibh, in rutrum justo mi eget" ,url:"../../assets/images/gallery-1.jpg",title:"Absorbing"},
    {description:"Suspendisse a nulla lacus. Cras vel diam at dui suscipit finibus ut consectetur est. Cras vehicula ornare elit, a consequat dui maximus non. Etiam euismod consectetur efficitur. Duis lorem sapien." ,url:"../../assets/images/gallery-2.jpg",title:"Abstract"},
    {description:"Sed augue sapien, porttitor quis lorem at, euismod cursus leo. Nulla euismod mauris metus. Vivamus risus arcu, mollis nec pharetra nec, vulputate quis leo. Suspendisse tristique quis tortor a sodales." ,url:"../../assets/images/gallery-3.jpg",title:"Adroit"},
    {description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum venenatis lectus, eu accumsan leo. Aliquam a purus eu diam scelerisque dictum. Fusce suscipit urna in risus commodo hendrerit eu." ,url:"../../assets/images/gallery-4.jpg",title:"Aesthetic"},
    {description:"Duis nec efficitur velit. In et tempor massa. Morbi mauris diam, condimentum in ipsum nec, venenatis fringilla enim. Nunc aliquam pretium diam, id egestas magna iaculis et. Cras nibh dolor." ,url:"../../assets/images/gallery-5.jpg",title:"Infused"},
    {description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam lobortis scelerisque. Praesent orci sem, ultrices non erat consequat, facilisis pretium sem. Vestibulum accumsan felis arcu, et vehicula nisl ullamcorper." ,url:"../../assets/images/gallery-6.jpg",title:"Avant-garde"},
    {description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non neque eros. Etiam rutrum mi eget efficitur maximus. Donec laoreet mauris at arcu molestie, vel gravida ex aliquet. Fusce arcu." ,url:"../../assets/images/gallery-7.jpg",title:"Enchanted"},
    {description:"Duis tincidunt, est ac rutrum tincidunt, ligula elit rhoncus augue, eget sagittis lectus elit nec metus. Praesent commodo finibus lacinia. Ut tincidunt dictum facilisis. Suspendisse sapien est, rutrum id mi." ,url:"../../assets/images/gallery-8.jpg",title:"Sublime"},
    {description:"Nulla sodales quam sed vestibulum volutpat. Sed faucibus sollicitudin tortor, ut bibendum nulla interdum et. Mauris tempor, ante interdum luctus faucibus, erat quam consequat ante, non vulputate libero purus eu." ,url:"../../assets/images/gallery-9.jpg",title:"Surreal"}

]
  constructor() { }

  ngOnInit() {
  }

}
