/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2022-02-10 9:33:04 pm
 * Last Modified: 2022-10-05 1:59:26 am
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
      <Divider />
      <h3 className="number">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          鲁ICP备17009180号
        </a>
      </h3>
    </div>
  );
}

export default observer(PageBottom);
