/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-08 3:28:31 pm
 * Last Modified: 2022-02-11 5:09:08 pm
 * Description: 博客首页
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Divider, Empty } from "antd";
import store from "../../Home/store";

function Comments({ commentList = [] }) {
  return (
    <div className="wrapper">
      {commentList.length > 0 ? (
        commentList.map((item) => {
          return <li>{item.blog_comment_content}</li>;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(Comments);
