"use strict";(self.webpackChunkFastkart_Admin_SSR=self.webpackChunkFastkart_Admin_SSR||[]).push([[992],{8163:(v,C,i)=>{i.r(C),i.d(C,{CommissionModule:()=>L});var p=i(6814),e=i(186),u=i(6505),m=i(7582);let r=(()=>{class a{static#t=this.type="[Commission] Get";constructor(s){this.payload=s}}return a})();var F=i(9397),t=i(9212),l=i(553),g=i(9862);let c=(()=>{class a{constructor(s){this.http=s}getCommissionHistory(s){return this.http.get(`${l.N.URL}/commission.json`,{params:s})}static#t=this.\u0275fac=function(o){return new(o||a)(t.LFG(g.eN))};static#s=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),h=class y{constructor(n){this.commissionService=n}static commission(n){return n.commission}getCommission(n,s){return this.commissionService.getCommissionHistory(s.payload).pipe((0,F.b)({next:o=>{n.patchState({commission:{data:o.data,total:o?.total?o?.total:o.data?.length}})},error:o=>{throw new Error(o?.error?.message)}}))}static#t=this.\u0275fac=function(s){return new(s||y)(t.LFG(c))};static#s=this.\u0275prov=t.Yz7({token:y,factory:y.\u0275fac})};(0,m.gn)([(0,e.aU)(r)],h.prototype,"getCommission",null),(0,m.gn)([(0,e.Qf)()],h,"commission",null),h=(0,m.gn)([(0,e.ZM)({name:"commission",defaults:{commission:{data:[],total:0}}})],h);var A=i(1427),S=i(7243);class f{constructor(n,s){this.store=n,this.router=s,this.tableConfig={columns:[{title:"No.",dataField:"no",type:"no"},{title:"order_id",dataField:"order_id"},{title:"store_name",dataField:"store_name"},{title:"admin_commission",dataField:"admin_commission",type:"price"},{title:"vendor_commission",dataField:"vendor_commission",type:"price"},{title:"created_at",dataField:"created_at",type:"date"}],data:[],total:0}}ngOnInit(){this.commission$.subscribe(n=>{let s=n?.data?.filter(o=>(o.store_name=`<span class="text-capitalize">${o.store.store_name}</span>`,o.order_id=`<span class="fw-bolder">#${o.order.order_number}</span>`,o));this.tableConfig.data=n?s:[],this.tableConfig.total=n?n?.total:0})}onTableChange(n){this.store.dispatch(new r(n))}static#t=this.\u0275fac=function(s){return new(s||f)(t.Y36(e.yh),t.Y36(u.F0))};static#s=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-commission"]],decls:2,vars:5,consts:[[3,"gridClass","title"],[3,"tableConfig","hasCheckbox","dateRange","tableChanged"]],template:function(s,o){1&s&&(t.TgZ(0,"app-page-wrapper",0)(1,"app-table",1),t.NdJ("tableChanged",function(P){return o.onTableChange(P)}),t.qZA()()),2&s&&(t.Q6J("gridClass","col-sm-12")("title","commission_history"),t.xp6(1),t.Q6J("tableConfig",o.tableConfig)("hasCheckbox",!1)("dateRange",!0))},dependencies:[A.a,S.t]})}(0,m.gn)([(0,e.Ph)(h.commission)],f.prototype,"commission$",void 0);var M=i(5419);const E=[{path:"",component:f,canActivate:[M.n],data:{permission:"commission_history.index"}}];let b=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#s=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(E),u.Bz]})}return a})();var R=i(6208);let L=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#s=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[p.ez,b,R.m,e.$l.forFeature([h])]})}return a})()},5419:(v,C,i)=>{i.d(C,{n:()=>m});var p=i(9212),e=i(186),u=i(6505);let m=(()=>{class r{constructor(t,l){this.store=t,this.router=l}canActivate(t,l){const g=this.store.selectSnapshot(d=>d.account).permissions?.map(d=>d?.name),c=t.data?.permission;return!!(!c||!Array.isArray(c)&&g?.includes(c)||Array.isArray(c)&&c?.length&&c.every(d=>g?.includes(d)))||(this.router.navigate(["/error/403"]),!1)}static#t=this.\u0275fac=function(l){return new(l||r)(p.LFG(e.yh),p.LFG(u.F0))};static#s=this.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);