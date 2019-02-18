import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() articleSelected: EventEmitter<Article> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
