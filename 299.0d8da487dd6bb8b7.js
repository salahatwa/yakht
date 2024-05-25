"use strict";(self.webpackChunkFastkart_Admin_SSR=self.webpackChunkFastkart_Admin_SSR||[]).push([[299,255],{3299:(b,v,r)=>{r.r(v),r.d(v,{FaqModule:()=>V});var o=r(6814),h=r(6505),t=r(9212),F=r(7243),n=r(6223),T=r(8645),u=r(4664),g=r(2096),y=r(1631),f=r(9773);let c=(()=>{class s{static#t=this.type="[Faq] Get";constructor(e){this.payload=e}}return s})(),U=(()=>{class s{static#t=this.type="[Faq] Create";constructor(e){this.payload=e}}return s})(),S=(()=>{class s{static#t=this.type="[Faq] Edit";constructor(e){this.id=e}}return s})(),x=(()=>{class s{static#t=this.type="[Faq] Update";constructor(e,i){this.payload=e,this.id=i}}return s})(),E=(()=>{class s{static#t=this.type="[Faq] Update Status";constructor(e,i){this.id=e,this.status=i}}return s})(),L=(()=>{class s{static#t=this.type="[Faq] Delete";constructor(e){this.id=e}}return s})(),J=(()=>{class s{static#t=this.type="[Faq] Delete All";constructor(e){this.ids=e}}return s})();var m=r(7582),d=r(186),D=r(9397),M=r(3477),_=r(553),Q=r(9862);let O=(()=>{class s{constructor(e){this.http=e}getFaqs(e){return this.http.get(`${_.N.URL}/faq.json`,{params:e})}static#t=this.\u0275fac=function(i){return new(i||s)(t.LFG(Q.eN))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),p=class A{constructor(a,e,i){this.store=a,this.notificationService=e,this.faqService=i}static faq(a){return a.faq}static selectedFaq(a){return a.selectedFaq}getFaqs(a,e){return this.faqService.getFaqs(e.payload).pipe((0,D.b)({next:i=>{a.patchState({faq:{data:i.data,total:i?.total?i?.total:i.data?.length}})},error:i=>{throw new Error(i?.error?.message)}}))}create(a,e){}edit(a,{id:e}){const i=a.getState(),l=i.faq.data.find(q=>q.id==e);a.patchState({...i,selectedFaq:l})}update(a,{}){}updateStatus(a,{}){}delete(a,{}){}deleteAll(a,{}){}static#t=this.\u0275fac=function(e){return new(e||A)(t.LFG(d.yh),t.LFG(M.g),t.LFG(O))};static#e=this.\u0275prov=t.Yz7({token:A,factory:A.\u0275fac})};(0,m.gn)([(0,d.aU)(c)],p.prototype,"getFaqs",null),(0,m.gn)([(0,d.aU)(U)],p.prototype,"create",null),(0,m.gn)([(0,d.aU)(S)],p.prototype,"edit",null),(0,m.gn)([(0,d.aU)(x)],p.prototype,"update",null),(0,m.gn)([(0,d.aU)(E)],p.prototype,"updateStatus",null),(0,m.gn)([(0,d.aU)(L)],p.prototype,"delete",null),(0,m.gn)([(0,d.aU)(J)],p.prototype,"deleteAll",null),(0,m.gn)([(0,d.Qf)()],p,"faq",null),(0,m.gn)([(0,d.Qf)()],p,"selectedFaq",null),p=(0,m.gn)([(0,d.ZM)({name:"faq",defaults:{faq:{data:[],total:0},selectedFaq:null}})],p);var N=r(3092),B=r(2879),P=r(9515);function Y(s,a){1&s&&(t.TgZ(0,"div",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"title_is_required")," "))}function w(s,a){1&s&&(t.TgZ(0,"div",10),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"description_is_required")," "))}let I=(()=>{class s{constructor(e,i,l,q){this.store=e,this.router=i,this.route=l,this.formBuilder=q,this.destroy$=new T.x,this.form=this.formBuilder.group({title:new n.NI("",[n.kI.required]),description:new n.NI("",[n.kI.required]),status:new n.NI(!0)})}ngOnInit(){this.route.params.pipe((0,u.w)(e=>e.id?this.store.dispatch(new S(e.id)).pipe((0,y.z)(()=>this.store.select(p.selectedFaq))):(0,g.of)()),(0,f.R)(this.destroy$)).subscribe(e=>{this.faq=e,this.form.patchValue({title:this.faq?.title,description:this.faq?.description,status:this.faq?.status})})}submit(){this.form.markAllAsTouched();let e=new U(this.form.value);"edit"==this.type&&this.faq?.id&&(e=new x(this.form.value,this.faq.id)),this.form.valid&&this.store.dispatch(e).subscribe({complete:()=>{this.router.navigateByUrl("/faq")}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(d.yh),t.Y36(h.F0),t.Y36(h.gz),t.Y36(n.qu))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-form-faq"]],inputs:{type:"type"},decls:17,vars:22,consts:[[1,"theme-form","theme-form-2","mega-form",3,"formGroup","ngSubmit"],[3,"label","for","required"],["type","text","name","title","formControlName","title",1,"form-control",3,"placeholder"],["class","invalid-feedback",4,"ngIf"],["formControlName","description","rows","3",1,"form-control",3,"placeholder"],[1,"form-check","form-switch","ps-0"],[1,"switch"],["type","checkbox","id","status","formControlName","status"],[1,"switch-state"],[3,"id"],[1,"invalid-feedback"]],template:function(i,l){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return l.submit()}),t.TgZ(1,"app-form-fields",1),t._UZ(2,"input",2),t.ALo(3,"translate"),t.YNc(4,Y,3,3,"div",3),t.qZA(),t.TgZ(5,"app-form-fields",1),t._UZ(6,"textarea",4),t.ALo(7,"translate"),t.YNc(8,w,3,3,"div",3),t.qZA(),t.TgZ(9,"app-form-fields",1)(10,"div",5)(11,"label",6),t._UZ(12,"input",7)(13,"span",8),t.qZA()()(),t.TgZ(14,"app-button",9),t._uU(15),t.ALo(16,"translate"),t.qZA()()),2&i&&(t.Q6J("formGroup",l.form),t.xp6(1),t.Q6J("label","title")("for","title")("required",!0),t.xp6(1),t.s9C("placeholder",t.lcZ(3,16,"enter_title")),t.xp6(2),t.Q6J("ngIf",l.form.controls.title.touched&&(null==l.form.controls.title.errors?null:l.form.controls.title.errors.required)),t.xp6(1),t.Q6J("label","description")("for","description")("required",!0),t.xp6(1),t.s9C("placeholder",t.lcZ(7,18,"enter_description")),t.xp6(2),t.Q6J("ngIf",l.form.controls.description.touched&&(null==l.form.controls.description.errors?null:l.form.controls.description.errors.required)),t.xp6(1),t.Q6J("label","status")("for","status")("required",!1),t.xp6(5),t.Q6J("id","faq_btn"),t.xp6(1),t.hij(" ",t.lcZ(16,20,"create"==l.type?"save_faq":"update_faq")," "))},dependencies:[o.O5,n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.sg,n.u,N.L,B.r,P.X$]})}return s})(),G=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-create-faq"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(i,l){1&i&&(t.TgZ(0,"app-page-wrapper",0),t._UZ(1,"app-form-faq",1),t.qZA()),2&i&&(t.Q6J("title","create_faq"),t.xp6(1),t.Q6J("type","create"))},dependencies:[F.t,I]})}return s})(),R=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-edit-faq"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(i,l){1&i&&(t.TgZ(0,"app-page-wrapper",0),t._UZ(1,"app-form-faq",1),t.qZA()),2&i&&(t.Q6J("title","edit_faq"),t.xp6(1),t.Q6J("type","edit"))},dependencies:[F.t,I]})}return s})();var $=r(1427),j=r(4274);const z=()=>["/faq/create"];function X(s,a){1&s&&(t.TgZ(0,"div",3)(1,"a",4),t._UZ(2,"i",5),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("routerLink",t.DdM(4,z)),t.xp6(2),t.hij(" ",t.lcZ(4,2,"add_faq")," "))}class C{constructor(a,e){this.store=a,this.router=e,this.tableConfig={columns:[{title:"No.",dataField:"no",type:"no"},{title:"title",dataField:"title",sortable:!0,sort_direction:"desc"},{title:"created_at",dataField:"created_at",type:"date",sortable:!0,sort_direction:"desc"},{title:"status",dataField:"status",type:"switch"}],rowActions:[{label:"Edit",actionToPerform:"edit",icon:"ri-pencil-line",permission:"faq.edit"},{label:"Delete",actionToPerform:"delete",icon:"ri-delete-bin-line",permission:"faq.destroy"}],data:[],total:0}}ngOnInit(){this.faq$.subscribe(a=>{this.tableConfig.data=a?a?.data:[],this.tableConfig.total=a?a?.total:0})}onTableChange(a){this.store.dispatch(new c(a))}onActionClicked(a){"edit"==a.actionToPerform?this.edit(a.data):"status"==a.actionToPerform?this.status(a.data):"delete"==a.actionToPerform?this.delete(a.data):"deleteAll"==a.actionToPerform&&this.deleteAll(a.data)}edit(a){this.router.navigateByUrl(`/faq/edit/${a.id}`)}status(a){this.store.dispatch(new E(a.id,a.status))}delete(a){this.store.dispatch(new L(a.id))}deleteAll(a){this.store.dispatch(new J(a))}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(d.yh),t.Y36(h.F0))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-faq"]],decls:3,vars:5,consts:[[3,"gridClass","title"],["button","",4,"hasPermission"],[3,"tableConfig","hasCheckbox","tableChanged","rowClicked","action"],["button",""],[1,"align-items-center","btn","btn-theme","d-flex",3,"routerLink"],[1,"ri-add-line"]],template:function(e,i){1&e&&(t.TgZ(0,"app-page-wrapper",0),t.YNc(1,X,5,5,"div",1),t.TgZ(2,"app-table",2),t.NdJ("tableChanged",function(q){return i.onTableChange(q)})("rowClicked",function(q){return i.edit(q)})("action",function(q){return i.onActionClicked(q)}),t.qZA()()),2&e&&(t.Q6J("gridClass","col-sm-12")("title","FAQ's"),t.xp6(1),t.Q6J("hasPermission","faq.create"),t.xp6(1),t.Q6J("tableConfig",i.tableConfig)("hasCheckbox",!0))},dependencies:[h.rH,$.a,F.t,j.A,P.X$]})}(0,m.gn)([(0,d.Ph)(p.faq)],C.prototype,"faq$",void 0);var Z=r(5419);const W=[{path:"",component:C,canActivate:[Z.n],data:{permission:"faq.index"}},{path:"create",component:G,canActivate:[Z.n],data:{permission:["faq.index","faq.create"]}},{path:"edit/:id",component:R,canActivate:[Z.n],data:{permission:["faq.index","faq.edit"]}}];let K=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(W),h.Bz]})}return s})();var H=r(6208);let V=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#a=this.\u0275inj=t.cJS({imports:[o.ez,K,H.m,d.$l.forFeature([p])]})}return s})()},5419:(b,v,r)=>{r.d(v,{n:()=>F});var o=r(9212),h=r(186),t=r(6505);let F=(()=>{class n{constructor(u,g){this.store=u,this.router=g}canActivate(u,g){const y=this.store.selectSnapshot(c=>c.account).permissions?.map(c=>c?.name),f=u.data?.permission;return!!(!f||!Array.isArray(f)&&y?.includes(f)||Array.isArray(f)&&f?.length&&f.every(c=>y?.includes(c)))||(this.router.navigate(["/error/403"]),!1)}static#t=this.\u0275fac=function(g){return new(g||n)(o.LFG(h.yh),o.LFG(t.F0))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},3092:(b,v,r)=>{r.d(v,{L:()=>T});var o=r(9212),h=r(6814),t=r(9515);function F(u,g){1&u&&(o.TgZ(0,"span",1),o._uU(1,"*"),o.qZA())}const n=["*"];let T=(()=>{class u{constructor(){this.class="mb-4 row align-items-center g-2",this.labelClass="form-label-title col-sm-2 mb-0",this.gridClass="col-sm-10"}static#t=this.\u0275fac=function(f){return new(f||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-form-fields"]],inputs:{class:"class",label:"label",labelClass:"labelClass",gridClass:"gridClass",for:"for",required:"required"},ngContentSelectors:n,decls:7,vars:11,consts:[["class","theme-color ms-2 required-dot",4,"ngIf"],[1,"theme-color","ms-2","required-dot"]],template:function(f,c){1&f&&(o.F$t(),o.TgZ(0,"div")(1,"label"),o._uU(2),o.ALo(3,"translate"),o.YNc(4,F,2,0,"span",0),o.qZA(),o.TgZ(5,"div"),o.Hsn(6),o.qZA()()),2&f&&(o.Tol(c.class),o.xp6(1),o.Tol(c.labelClass),o.uIk("for",c.for),o.xp6(1),o.hij(" ",o.lcZ(3,9,c.label),""),o.xp6(2),o.Q6J("ngIf",c.required),o.xp6(1),o.Tol(c.gridClass))},dependencies:[h.O5,t.X$]})}return u})()}}]);