/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 10:21:49 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Empty } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import store from "../store";

function RightComment() {
  useEffect(() => {
    store.getfreshCommentList();
  }, []);

  return (
    <ul className="RightComment">
      <h3 className="list-title">最新留言：</h3>
      {store.freshCommentList.length > 0 ? (
        store.freshCommentList.map((item, index) => {
          return (
            <li key={index}>
              <CommentOutlined />
              <span className="list_content">{item.blog_comment_content}</span>
            </li>
          );
        })
      ) : (
        <Empty />
      )}
    </ul>
  );
}

export default observer(RightComment);
