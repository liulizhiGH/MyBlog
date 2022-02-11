import { makeAutoObservable } from "mobx";
import service from "./service";

class Store {
  constructor() {
    // 自动监听所有成员属性
    makeAutoObservable(this);
  }
  // 正在浏览的文章分类
  activeCategory = "All";
  // 文章分类
  ArticleCategoryList = [];
  // 文章列表
  ArticleList = [];

  // 获取文章分类
  getArticleCategory = async () => {
    let res = await service.getArticleCategory({});
    this.ArticleCategoryList = res.data || [];
  };
  // 获取对应种类文章列表
  getArticleList = async (category_id) => {
    let params = {
      category_id,
    };
    let res = await service.getArticleList(params);
    this.ArticleList = res.data || [];
  };
}

export default new Store();
