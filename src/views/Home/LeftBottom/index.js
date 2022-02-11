/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 6:57:05 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../store";
import { Empty } from "antd";
import { BookOutlined } from "@ant-design/icons";

function LeftBottom() {
  useEffect(() => {
    store.getList();
  }, []);

  return (
    <div className="LeftBottom">
      <h3 className="list-title">最新文章:</h3>
      {store.list.length > 0 ? (
        store.list.map((item) => {
          return (
            <li>
              <BookOutlined />
              <span className="list_content">
                <Link to={`/detail/${item.article_id}`}>
                  文章id{item.article_id + item.article_title}
                </Link>
              </span>
            </li>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(LeftBottom);
