import axios from "@/config/axios";
import isProduction from "@/utils/isProduction";

class Service {
  // 获取文章列表
  getArticleList = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: isProduction()
          ? "http://workonsth.com:8000/getArticleList" // 因www.workonsth.com配置了cdn加速,所以不能使用http://www.workonsth.com:8000地址做后端服务器地址
          : "http://localhost:8000/getArticleList",
        data: params,
      })
        .then((res) => {
          resolve(res);
          return;
        })
        .catch((e) => {
          reject(e);
          return;
        });
    });
  };
  // 获取评论列表
  getfreshCommentList = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: isProduction()
          ? "http://workonsth.com:8000/getfreshCommentList" // 因www.workonsth.com配置了cdn加速,所以不能使用http://www.workonsth.com:8000地址做后端服务器地址
          : "http://localhost:8000/getfreshCommentList",
        params,
      })
        .then((res) => {
          resolve(res);
          return;
        })
        .catch((e) => {
          reject(e);
          return;
        });
    });
  };
}

export default new Service();
