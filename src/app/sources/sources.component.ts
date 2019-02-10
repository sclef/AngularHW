import { Component, OnInit } from '@angular/core';
import { UtilsComponent } from '../utils/utils.component';
import {ConstantsComponent } from '../constants/constants.component';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

  constants: ConstantsComponent = new ConstantsComponent();

  getAllSouces() {
    let utils = new UtilsComponent();
    utils.sendRequestForJson([this.constants.SourcesUrl], this.fillMenu);
  }

  fillMenu(resp) {
    let uniqueCategories = function (item, index, self) {
      return self.indexOf(item) === index;
    };

    let categories = resp[0].sources.map(a => a.category).filter(uniqueCategories);

    for (let i = 0; i < categories.length; i++) {
      let cat = categories[i];
      let catResources = resp[0].sources.filter(r => r.category === cat);
      let categoryOptions = '';

      for (let j = 0; j < catResources.length; j++) {
        categoryOptions = categoryOptions.concat(`<li><input class='source-checkbox' type='checkbox' id='${catResources[j].id}'/><label for='${catResources[j].id}'>${catResources[j].name}</label></li>`)
      }

      let categoryTemplate = document.createElement("ul");
      categoryTemplate.id = `${cat}-select`;
      categoryTemplate.className = 'category-selection';
      categoryTemplate.innerHTML = categoryOptions;

      let categoryLabel = document.createElement("label");
      categoryLabel.className = 'category-label';
      categoryLabel.innerHTML = cat.toUpperCase();
      categoryLabel.htmlFor = `${cat}-select`;

      //let categoryDiv=document.createElement("div");
      //categoryDiv.id = `${cat}-div`;
      //TODO: rewrite to UL
      let catDiv = document.getElementById("main-menu").appendChild(document.createElement("div"));
      catDiv.appendChild(categoryLabel);
      catDiv.appendChild(categoryTemplate);
    }

  }

}
