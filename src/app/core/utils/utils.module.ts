import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from "jquery";
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { 
  constructor(private http: HttpClient) { }
  async sendRequestForJson(urls, callbackFunction) {
    //return this.http.get(this.configUrl);
    let response=await urls.map(async (url) => { await this.http.get(url); });
    return response;
  }

  async proxyFetch(url, callbackFunction) {
    //let urlFactory = new UrlFactory();
    let UrlType = await this.runRequest(url, callbackFunction);
    console.log(UrlType);
    if (typeof url === "object") {
      //Object.entries willl not get prototipe properties
      for (var prop in url) {
        console.log("obj." + prop + " = " + url[prop]);
      }
    } else {
      console.log(url);
    }
  }

  async runRequest(url, callback) {
    let urlType = url.type != undefined ? url.type.toLowerCase() : "";
    switch (urlType) {
      case "get":
        $.get(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
        break;
      case "post":
        $.post(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
        break;
      case "put":
        $.put(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
        break;
      default:
        $.get(url, (data, status) => { this.tryCatchWrapper(callback, [data]) });
        break;
    }
    return urlType;
  }

  tryCatchWrapper(callbackFunction, resp) {
    try {
      callbackFunction(resp);
      //resp[0].status = "bad Request";
      if (resp.length == 0 || resp[0].status != "ok") {
        throw new Error(resp[0].status);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  createRequest(url, params) {
    let urlObj = new URL(url);
    // if (params.type) {
    //     urlObj. = params.type;
    // }
    Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]))
    return urlObj;
  }
}
