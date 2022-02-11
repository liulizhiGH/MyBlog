/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 10:36:00 pm
 * Description: 中上展示部分文章
 */
import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Empty, Divider } from "antd";
import store from "../store";

const colorEnum = {
  JavaScript: "rgba(219, 69, 32)",
  Nodejs: "rgba(114, 83, 52)",
  React: "rgba(69, 137, 148)",
  Linux: "rgba(117, 121, 71)",
  Mysql: "rgba(126, 33, 18)",
  日常: "rgba(219, 69, 32)",
};

function LeftTop() {
  return (
    <div className="LeftTop">
      {store.ArticleList.length > 0 ? (
        <>
          <h1>{store.freshArticle.article_title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${store.freshArticlePart}</p>`,
            }}
          />
          <Link to={`/detail/${store.freshArticle.article_id}`}>
            <div>继续阅读全文 »</div>
          </Link>
          <Divider />
          <div className="article-info">
            <div>更新：{store.freshArticle.article_update_time}</div>
            <div>留言（{store.freshArticle.commentList.length}）</div>
            <div className="category">
              分类：
              <span
                style={{ color: colorEnum[store.freshArticle.category_name] }}
              >
                {store.freshArticle.category_name}
              </span>
            </div>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(LeftTop);
