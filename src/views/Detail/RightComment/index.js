/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-10 10:39:54 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store";
import { Empty } from "antd";

function RightComment() {
  useEffect(() => {
    store.getfreshCommentList();
  }, []);

  return (
    <div className="RightComment">
      <h3>最新留言：</h3>
      {store.freshCommentList.length > 0 ? (
        store.freshCommentList.map((item) => {
          return <li>{item.user_id + item.content}</li>;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(RightComment);
