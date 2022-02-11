/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-11 11:23:23 am
 * Description: 博客首页
 */
import React from "react";
import { observer } from "mobx-react";
import { Divider } from "antd";
import LeftTop from "./LeftTop";
import LeftBottom from "./LeftBottom";
import RightComment from "./RightComment";
import PageHeader from "@/components/PageHeader";
import PageBottom from "@/components/PageBottom";
import css from "./style.module.less";

function Home() {
  return (
    <div className="wrapper">
      {/* 页头 */}
      <PageHeader />
      <div className={css["content-box"]}>
        <div className="left-box">
          {/* 最新一篇文章 */}
          <LeftTop />
          <Divider />
          {/* 最新文章列表 */}
          <LeftBottom />
        </div>
        {/* 最新评论列表 */}
        <RightComment />
      </div>
      {/* 页脚 */}
      <PageBottom />
    </div>
  );
}

export default observer(Home);
