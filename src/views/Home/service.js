import axios from "axios";

class Service {
  //get
  getList = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: "http://localhost:8000/getlist",
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
  //post
  getListqwe = (params = {}) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: "/user/12345",
        data: params,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };
}

export default new Service();
