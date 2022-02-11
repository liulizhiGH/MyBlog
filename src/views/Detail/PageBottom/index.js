/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-10 10:50:53 pm
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

  return <div className="containet">页脚</div>;
}

export default observer(RightComment);
