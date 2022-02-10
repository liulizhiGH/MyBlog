import React from "react";
import loadable from "@loadable/component";
import { Skeleton } from "antd";

export default function lazy(path, props) {
  // 支持webpack的resolve配置
  const AsyncComponent = loadable(() => import(`@/${path}`), {
    fallback: <Skeleton />,
  });
  return <AsyncComponent {...props} />;
}
