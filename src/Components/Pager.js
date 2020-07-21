import React from 'react';
import './index.css';
export default function Pager(props) {
  const totalPage = getTotalPage(props);
  /**
   * 1.current 当前选中的页码
   * 2.total 数据总数
   * 3.limit 每页展示的数据条数
   * 4.panelNumber 中间区域展示的页码数量
   * */
  return (
      <>
        <span
            className={props.current === 1 ? "item disable" : "item"}
            onClick={() => {changePage(props.current, props)}}
        >首页</span>

        <span
            className={props.current === 1 ? "item disable" : "item"}
        >上一页</span>

        <span
            className={props.current === totalPage ? "item disable" : "item"}
        >下一页</span>

        <span
            className={props.current === totalPage ? "item disable" : "item"}
        >尾页</span>

        <span>{props.current}</span>
        /
        <span>{ totalPage }</span>
      </>
  )
}

function getTotalPage(props) {
  const totalPage = Math.ceil(props.total / props.limit);
  return totalPage;
}
function changePage(target, props) {
  console.log(target);
  props.current = target;
}
