import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  imageUrls = [
    'https://res.cloudinary.com/nikola418/image/upload/v1692604544/gggi5sw4knsr4owzyebl.png',
    '/assets/img/featured1.png',
    'https://res.cloudinary.com/nikola418/image/upload/v1692604705/xu50wh0fvuegwnsqxi8f.png',
  ];
  index = 0;
  translate = `translateX(${-100 * this.index}vw)`;

  ngOnInit(): void {
    this.animation();
  }

  setIndex(index: number) {
    this.index = index;
  }

  handleArrowClick(direction: string) {
    if (direction === 'l') this.setIndex(this.index !== 0 ? this.index - 1 : 2);
    if (direction === 'r') this.setIndex(this.index !== 2 ? this.index + 1 : 0);
    this.translate = `translateX(${-100 * this.index}vw)`;
  }

  animation() {
    //! refactor to use ngAnimations
    setTimeout(() => {
      this.handleArrowClick('r');
      this.animation();
    }, 5000);
  }
}
