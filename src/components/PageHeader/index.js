/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 9:57:34 am
 * Description: 首页右侧评论列表
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Empty } from "antd";
import { Breadcrumb } from "antd";

function PageHeader() {

  return (
    <div className="containet">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default observer(PageHeader);
