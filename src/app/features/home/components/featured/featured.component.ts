import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  images = ['/img/featured1.png', '/img/featured2.png', '/img/featured3.png'];
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
