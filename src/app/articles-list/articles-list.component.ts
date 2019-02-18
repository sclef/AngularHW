import { Component, OnInit } from '@angular/core';
import { ArticleService, SourceService} from '../models';
import { Article, Source } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  // private router = Router;
  public articles: Article[] = [];
  public sources: Source[] = [];
  public isLocalSource: boolean = false;
  public selectedSource: Source = null;

  constructor(
    private articleService: ArticleService, 
    private sourceService: SourceService, 
    private route: ActivatedRoute,
    private router: Router 
    ) { }

  public getArticles(sourceId) {
    this.articles = [];
    this.articleService.getArticles(sourceId).subscribe((data:any)=>{this.articles=data.articles});
  }

  public getSources() {
    this.sources = [];
    this.sourceService.getSources().subscribe((data:any)=>{this.sources=data.sources});
  }

  ngOnInit() {
    this.getSources();
  }

}
