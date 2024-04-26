import{C as l}from"./close-circle-filled-b7636b41.js";import{c as a,n as o}from"./index-6878f845.js";import{C as r,E as c}from"./error-circle-filled-1c5b2372.js";const h={data(){return this.$createElement,{data:[],size:"medium",tableLayout:!1,stripe:!0,bordered:!0,hover:!1,showHeader:!0,selectedRowKeys:[1],columns:[{colKey:"row-select",type:"multiple",width:50},{colKey:"task_id",title:"任务ID",width:"300",ellipsis:!0},{colKey:"target",title:"扫描目标",width:"200",ellipsis:!0},{colKey:"status",title:"状态",width:"100",cell:(e,{row:t})=>{const i={P:{label:"待处理",theme:"warning",icon:l},R:{label:"进行中",theme:"success",icon:l},C:{label:"已完成",theme:"success",icon:r},E:{label:"错误",theme:"danger",icon:c}}[t.status]||{label:"未知",theme:"default",icon:l};return e("t-tag",{attrs:{shape:"round",theme:i.theme,variant:"light-outline",icon:e(i.icon)}},[i.label])}},{colKey:"result_count",title:"结果条数",width:"100"},{colKey:"start_time",title:"开始时间",width:"200"},{colKey:"end_time",title:"结束时间",width:"200"},{colKey:"operation",title:"操作",width:200,cell:(e,{row:t})=>e("div",[e("t-button",{props:{theme:"primary",ghost:!0},style:{marginRight:"8px"},on:{click:()=>this.viewDetails(t.task_id)}},"查看详情"),e("t-button",{props:{theme:"danger",ghost:!0},on:{click:()=>this.deleteTask(t.task_id)}},"删除")])}],pagination:{current:1,pageSize:50,total:0,showJumper:!0}}},methods:{fetchResults(){this.$request.get("/api/port_scanner/all_tasks",{headers:{"Content-Type":"application/json"}}).then(e=>{a.success("所有任务已获取"),this.data=e.data.tasks,this.pagination.total=e.data.tasks.length}).catch(e=>{console.log(e),a.error("获取失败")})},viewDetails(e){this.$router.push({path:"/port/list",query:{task_id:e}})},deleteTask(e){this.$request.delete(`/api/port_scanner/tasks/${e}/delete`,{headers:{"Content-Type":"application/json"}}).then(()=>{a.success("任务删除成功"),this.data=this.data.filter(t=>t.task_id!==e),this.pagination.total=this.data.length}).catch(t=>{console.error(t),a.error("删除失败")})},rehandleSelectChange(e,{selectedRowData:t}){this.selectedRowKeys=e},onPageChange(e,t){this.pagination.defaultCurrent||(this.pagination.current=e.current,this.pagination.pageSize=e.pageSize)}},mounted(){this.fetchResults()}};var d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("t-space",{attrs:{direction:"vertical"}},[s("t-table",{attrs:{rowKey:"task_id",data:e.data,columns:e.columns,stripe:e.stripe,bordered:e.bordered,hover:e.hover,size:e.size,"table-layout":e.tableLayout?"auto":"fixed",pagination:e.pagination,showHeader:e.showHeader,"selected-row-keys":e.selectedRowKeys,cellEmptyContent:"-",resizable:""},on:{"select-change":e.rehandleSelectChange,"page-change":e.onPageChange}})],1)},u=[];const n={};var p=o(h,d,u,!1,g,null,null,null);function g(e){for(let t in n)this[t]=n[t]}const w=function(){return p.exports}();export{w as default};
