import axios from "@/config/axios";

class Service {
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
  // 获取评论列表
  getfreshCommentList = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "http://localhost:8000/getfreshCommentList",
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
