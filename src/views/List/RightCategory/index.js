/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 10:22:26 pm
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import store from "../store";
import { Empty } from "antd";
import { StarOutlined } from "@ant-design/icons";

function RightCategory() {
  useEffect(() => {
    store.getArticleCategory();
  }, []);

  return (
    <ul className="RightCategory">
      <h3 className="list-title">分类：</h3>
      {store.ArticleCategoryList.length > 0 ? (
        store.ArticleCategoryList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                store.getArticleList(item.category_id);
                store.activeCategory = store.ArticleCategoryList.find(
                  (elm) => elm.category_id === item.category_id
                ).category_name;
              }}
            >
              <StarOutlined />
              <span className="list_content">{item.category_name}</span>
            </li>
          );
        })
      ) : (
        <Empty />
      )}
    </ul>
  );
}

export default observer(RightCategory);
