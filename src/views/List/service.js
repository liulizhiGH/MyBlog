import axios from "@/config/axios";

class Service {
  // 获取文章分类
  getArticleCategory = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "http://localhost:8000/getArticleCategory",
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
        url: "http://localhost:8000/getArticleList",
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
