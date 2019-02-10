import { Component, OnInit } from '@angular/core';
import 'url-polyfill';
import {UtilsComponent} from '../utils/utils.component';
import {ConstantsComponent} from '../constants/constants.component';
//import {CreateRequest} from '../core/UrlFactory.js';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

  constants: ConstantsComponent = new ConstantsComponent();

  getNews(source) {
    let utils = new UtilsComponent();

    let urls = source.map(s => {
      let params = { source: s, apiKey: this.constants.ApiKey, type: "Get" };
      return utils.createRequest(this.constants.ArticlesUrl, params);

    });
    utils.sendRequestForJson(urls, this.showNews);

  }

  showNews(data) {
    let newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = '';
    let articles = [];

    for (let i = 0; i < data.length; i++) {
      articles.push(...(data[i].articles));
    }

    articles = articles.sort((x, y) => Date.parse(y.publishedAt) - Date.parse(x.publishedAt));

    for (let i = 0; i < 10; i++) {
      if (!articles[i]) {
        return;
      }

      let art = articles[i];
      let articleTemplate = document.createElement("div");
      let published = art.publishedAt ? `Published: ${art.publishedAt.substr(0, 10)}. ` : "";
      let artDesc = art.description ? art.description : "";

      let artImg = '';
      let pat = /(?<=http)s?:\/\//i;
      if (pat.test(art.urlToImage)) {
        artImg = `<img src='${art.urlToImage}'/></a>`;
      }
      else {
        artImg = art.urlToImage ? `<img src='${art.url.toString().concat(art.urlToImage)}'/></a>` : 'See more...';
      }

      articleTemplate.innerHTML = `<div class='article'>
            <div class='article-header'><h2>${art.title}</h2></div>
            <div class='article-body'> <a href='${art.url}' target='_blank'>${artImg}</a> ${artDesc}</div>
            <div class='article-footer'> 
                ${published}
                <a href='https://newsapi.org' target='_blank'>Powered by NewsAPI.org</a>
            </div>
        </div>`;

      newsContainer.appendChild(articleTemplate);
    }
  }

  applyFilters() {
    let sourcesIds = Array.prototype.slice.call(document.getElementsByClassName("source-checkbox"), 0) //convert to array
      .filter(c => c.checked)
      .map(c => c.id);
    this.getNews(sourcesIds);
  }
}
