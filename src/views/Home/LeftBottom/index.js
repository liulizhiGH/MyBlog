/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-12 3:00:40 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Empty } from "antd";
import { BookOutlined } from "@ant-design/icons";
import store from "../store";

function LeftBottom() {
  useEffect(() => {
    store.getArticleList();
  }, []);

  return (
    <div className="LeftBottom">
      <h3 className="list-title">最新文章:</h3>
      {store.ArticleList.length > 0 ? (
        store.ArticleList.map((item) => {
          return (
            <li key={item.article_id}>
              <BookOutlined />
              <span className="list_content">
                <Link to={`/detail/${item.article_id}`}>
                  {item.article_title}
                </Link>
              </span>
            </li>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(LeftBottom);
