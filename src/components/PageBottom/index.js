/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-02-11 6:51:11 pm
 * Description: 页脚
 */
import React from "react";
import { observer } from "mobx-react";
import { Divider } from "antd";
import css from "./style.module.less";
import qr from "@/assets/qr.png";

function PageBottom() {
  return (
    <div className={css["PageBottom"]}>
      <Divider />
      <div className="myinfo">
        <img className="qrImg" src={qr} alt="" />
        <div className="infoItem">
          <a href="https://blog.csdn.net/u010821983?type=blog" target="__blank">
            CSDN
          </a>
          <Divider type="vertical" />
          <a
            href="https://github.com/liulizhiGH?tab=repositories"
            target="__blank"
          >
            GitHub
          </a>
          <Divider type="vertical" />
          <a href="#" target="__blank">
            MyBlog
          </a>
        </div>
      </div>
    </div>
  );
}

export default observer(PageBottom);
