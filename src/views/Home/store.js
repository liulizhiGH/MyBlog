import { makeAutoObservable } from "mobx";
import service from "./service";

class Store {
  constructor() {
    // 自动监听所有成员属性
    makeAutoObservable(this);
  }
  // 文章列表
  ArticleList = [];
  // 评论列表
  freshCommentList = [];
  // 最新文章
  get freshArticle() {
    if (this.ArticleList[0] && Object.keys(this.ArticleList[0]).length > 0) {
      return this.ArticleList[0];
    }
    return {};
  }
  // 最新文章的一部分内容
  get freshArticlePart() {
    let result = "";
    let freshArticle =
      (this.ArticleList[0] && this.ArticleList[0].article_content) || "";
    result = freshArticle.split("</p>")[0].split("<p>").pop();
    // console.log(result, "result");
    return result;
  }

  // 获取全部文章列表
  getArticleList = async () => {
    let res = await service.getArticleList({});
    this.ArticleList = res.data || [];
  };
  // 获取评论列表
  getfreshCommentList = async () => {
    let res = await service.getfreshCommentList({});
    this.freshCommentList = res.data || [];
  };
}

export default new Store();
