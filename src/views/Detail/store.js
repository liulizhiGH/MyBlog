import { makeAutoObservable } from "mobx";
import service from "./service";

class Store {
  constructor() {
    // 自动监听所有成员属性
    makeAutoObservable(this);
  }
  // 文章
  Article = {};

  // 获取对应文章
  getArticleList = async (article_id) => {
    let params = {
      article_id,
    };
    let res = await service.getArticleList(params);
    console.log(res.data,"res123")
    this.Article = res.data[0] || {};
    console.log(this.Article,"kkk")
  };
}

export default new Store();
