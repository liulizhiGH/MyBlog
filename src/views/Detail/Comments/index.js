/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-11 8:00:19 pm
 * Description: 评论列表区域
 */
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Divider, Empty } from "antd";

function Comments({ commentList = [] }) {
  return (
    <div className="Comments">
      <h1 className="comment-count">评论({commentList.length})</h1>
      {commentList.length > 0 ? (
        commentList.map((item, index) => {
          return (
            <li key={index} className="comment-item">
              {item.blog_comment_content}
            </li>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(Comments);
