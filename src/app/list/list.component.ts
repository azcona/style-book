import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  items = [
    {
      avatar: "assets/png/img.small.png",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      icon: "person",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      flag: "assets/png/country_flag/uk.png",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      image: "assets/png/img.small.png",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      image: "assets/png/img-regular.png",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      checkbox: " ",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    },
    {
      radio: " ",
      overline: "OVERLINE",
      subtitle: "Subtitle 1"
    }
  ];

  isLast(index: number): boolean {
    return index === this.items.length - 1;
  }

}
