import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-carte-graphique',
  templateUrl: './details-carte-graphique.component.html',
  styleUrls: ['./details-carte-graphique.component.css']
})
export class DetailsCarteGraphiqueComponent implements OnInit {

  @Input() carteGraphique: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
