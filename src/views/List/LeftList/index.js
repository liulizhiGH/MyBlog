/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-12 1:44:46 pm
 * Description: 文章标题列表
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Empty, List } from "antd";
import store from "../store";

const colorEnum = {
  JavaScript: "rgba(219, 69, 32)",
  Nodejs: "rgba(114, 83, 52)",
  React: "rgba(69, 137, 148)",
  Linux: "rgba(117, 121, 71)",
  Mysql: "rgba(126, 33, 18)",
  日常: "rgba(219, 69, 32)",
};

function LeftList() {
  useEffect(() => {
    store.getArticleList();
  }, []);

  return (
    <div className="LeftList">
      <h3 className="list-title">
        分类文章:&nbsp;&nbsp;
        <span style={{ color: colorEnum[store.activeCategory] }}>
          {store.activeCategory}
        </span>
      </h3>
      {store.ArticleList.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={store.ArticleList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to={`/detail/${item.article_id}`}>
                    {item.article_title}
                  </Link>
                }
                description={<span>更新：{item.article_update_time}</span>}
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default observer(LeftList);
