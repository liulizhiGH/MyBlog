import axios from "@/config/axios";
import isProduction from "@/utils/isProduction";

class Service {
  // 获取文章分类
  getArticleCategory = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: isProduction()
          ? "http://www.workonsth.com:8000/getArticleCategory"
          : "http://localhost:8000/getArticleCategory",
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
  // 获取文章列表
  getArticleList = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: isProduction()
          ? "http://www.workonsth.com:8000/getArticleList"
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
}

export default new Service();
