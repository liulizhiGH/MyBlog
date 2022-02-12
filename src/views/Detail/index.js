/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-12 1:43:37 pm
 * Description: 文章详情页
 */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Divider } from "antd";
import PageHeader from "@/components/PageHeader";
import PageBottom from "@/components/PageBottom";
import Comments from "./Comments";
import css from "./style.module.less";
import store from "./store";

function Detail() {
  let { aid } = useParams();

  useEffect(() => {
    store.getArticleList(aid);
  }, []);

  return (
    <div className="wrapper">
      {/* 页头 */}
      <PageHeader />
      <div className={css["content-box"]}>
        <h1>{store.Article.article_title}</h1>
        <Divider />
        <div className="article-info">
          <div className="author">作者：liulizhiasd777</div>
          <div className="update-time">
            日期：{store.Article.article_update_time}
          </div>
        </div>
        <div
          className="ckeditor-string"
          dangerouslySetInnerHTML={{
            __html: `${store.Article.article_content || "文章已删除！"}`,
          }}
        />
        <Comments commentList={store.Article.commentList} />
      </div>
      {/* 页脚 */}
      <PageBottom />
    </div>
  );
}

export default observer(Detail);
