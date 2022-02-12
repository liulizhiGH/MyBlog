import axios from "@/config/axios";
import isProduction from "@/utils/isProduction";

class Service {
  // 获取文章
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
