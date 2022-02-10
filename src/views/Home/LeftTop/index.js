/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-10 10:53:26 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store";
import { Empty } from "antd";

function RightComment() {
  return (
    <div className="containet">
      <h3>最新一篇文章</h3>
      {store.list.length > 0 ? (
        <>
          <h1>{store.list[0] && store.list[0].title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: store.list[0] && store.list[0].content,
            }}
          />
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(RightComment);
