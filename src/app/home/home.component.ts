import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showContent:boolean = false;
  sentence = ' Welcome to Tarff Valley LTD.';
  // words = this.sentence.split(' ');
  words:string[] = ['Welcome','to','Tarff','Valley','LTD'];
  Cards=[{cardTitle:'Fertiliser',backgroundImg:'../../assets/TarrfWebsite/Image/sec1.png'},
  {cardTitle:'Animal Health And Equipments',backgroundImg:'../../assets/TarrfWebsite/Image/sec2.png'},
  {cardTitle:'Animal feed',backgroundImg:'../../assets/TarrfWebsite/Image/sec3.png'},
  {cardTitle:'Fertiliser',backgroundImg:'../../assets/TarrfWebsite/Image/sec1.png'},
  {cardTitle:'Animal Health And Equipments',backgroundImg:'../../assets/TarrfWebsite/Image/sec2.png'},
  {cardTitle:'Animal feed',backgroundImg:'../../assets/TarrfWebsite/Image/sec3.png'},

];

@ViewChild('carouselTrack', { static: true }) carouselTrack: any;
cardWidth!: number;
numCards!: number;
visibleCards = 4;
currentSlide = 0;
  constructor() { }
  ngAfterViewInit() {
    this.cardWidth = this.carouselTrack.nativeElement.querySelector('.carousel-card').offsetWidth;
    this.numCards = this.Cards.length;
  }

  moveCarousel(direction: string) {
    const carouselTrack = this.carouselTrack.nativeElement;
    if (direction === 'left' && this.currentSlide > 0) {
      this.currentSlide--;
      carouselTrack.style.transform = `translateX(${-this.cardWidth * this.currentSlide}px)`;
    } else if (direction === 'right' && this.currentSlide < this.numCards - this.visibleCards) {
      this.currentSlide++;
      carouselTrack.style.transform = `translateX(${-this.cardWidth * this.currentSlide}px)`;
    }
  }
  ngOnInit(): void {
  }

  toggleContent(){
    this.showContent = !this.showContent;

  }
}
