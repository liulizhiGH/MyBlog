import { makeAutoObservable, action } from "mobx";
import service from "./service";

class Store {
  constructor() {
    // 自动监听所有成员属性
    makeAutoObservable(this);
  }
  // 新版计算值，用get set了，不用装饰器了
  get zzz() {
    return this.id + "asd";
  }

  // 文章列表
  list = [];
  // 最新列表
  freshCommentList = [];
  // 最新文章
  get freshArticle() {
    if (this.list[0] && Object.keys(this.list[0]).length > 0) {
      return this.list[0];
    }
    return {};
  }
  // 最新文章的一部分内容
  get freshArticlePart() {
    let result = "";
    let freshArticle = (this.list[0] && this.list[0].article_content) || "";
    result = freshArticle.split("</p>")[0].split("<p>").pop();
    // console.log(result, "result");
    return result;
  }

  // 获取文章列表数据
  getList = async () => {
    let res = await service.getList({});
    this.list = res.data || [];
  };
  // 获取文章列表数据
  getfreshCommentList = async () => {
    let res = await service.getfreshCommentList({});
    this.freshCommentList = res.data || [];
  };
}

export default new Store();
