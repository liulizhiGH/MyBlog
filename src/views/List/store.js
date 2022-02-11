import { makeAutoObservable, action } from "mobx";
import service from "./service";

class Store {
  constructor() {
    // 自动监听所有成员属性
    makeAutoObservable(this);
  }
  id = Math.random();
  title = "";
  finished = false;

  toggle() {
    this.finished = !this.finished;
    this.id = Date.now();
  }
  // 新版计算值，用get set了，不用装饰器了
  get zzz() {
    return this.id + "asd";
  }

  list = [];// 文章列表
  freshCommentList = [];// 最新列表
  // 获取文章列表数据
  getList = async () => {
    let res = await service.getList({});
    console.log(res.data, typeof res.data, "res");
    this.list = res.data || [];
    console.log(this.list[1].content);
  };
  // 获取文章列表数据
  getfreshCommentList = async () => {
    let res = await service.getfreshCommentList({});
    console.log(res.data, typeof res.data, "res");
    this.freshCommentList = res.data || [];
  };
}

export default new Store();
