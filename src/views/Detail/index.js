/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-11 5:22:53 pm
 * Description: 博客首页
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Divider } from "antd";
import PageHeader from "@/components/PageHeader";
import PageBottom from "@/components/PageBottom";
import store from "../Home/store";
import css from "./style.module.less";
import Comments from "./Comments";

function Detail() {
  let { aid } = useParams();
  const [Article, setArticle] = useState({});

  useEffect(() => {
    setArticle(store.list.find((item) => item.article_id == aid));
  }, [store.list]);

  console.log(store.list, "store.lisasdsadt");
  console.log(Article, "Article");
  console.log(typeof aid, "aid");

  return (
    <div className="wrapper">
      {/* 页头 */}
      <PageHeader />
      <div className="content-box">
        <h1>aid{aid}</h1>
        <h1>{Article.article_title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${Article.article_content}`,
          }}
        />
        <Comments commentList={Article.commentList} />
      </div>
      {/* 页脚 */}
      <PageBottom />
    </div>
  );
}

export default observer(Detail);
