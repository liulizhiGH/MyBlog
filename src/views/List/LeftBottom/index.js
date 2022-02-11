/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-10 10:49:18 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store";
import { Empty } from "antd";

function RightComment() {
  useEffect(() => {
    store.getList();
  }, []);

  return (
    <div className="containet">
      <h3>最新文章列表</h3>
      {store.list.length > 0 ? (
        store.list.map((item) => {
          return <li>{item.article_id + item.title}</li>;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(RightComment);
