"use strict";(self.webpackChunkFastkart_Admin_SSR=self.webpackChunkFastkart_Admin_SSR||[]).push([[489,255],{3489:(y,g,e)=>{e.r(g),e.d(g,{TaxModule:()=>Y});var s=e(6814),f=e(186),x=e(6208),p=e(6505),u=e(7582),T=e(665),i=e(6537),t=e(9212),v=e(1427),d=e(7243),m=e(4274),Z=e(9515);const F=()=>["/tax/create"];function _(a,o){1&a&&(t.TgZ(0,"div",3)(1,"a",4),t._UZ(2,"i",5),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&a&&(t.xp6(1),t.Q6J("routerLink",t.DdM(4,F)),t.xp6(2),t.hij(" ",t.lcZ(4,2,"add_tax")," "))}class C{constructor(o,r){this.store=o,this.router=r,this.tableConfig={columns:[{title:"No.",dataField:"no",type:"no"},{title:"name",dataField:"name",sortable:!0,sort_direction:"desc"},{title:"created_at",dataField:"created_at",type:"date",sortable:!0,sort_direction:"desc"},{title:"status",dataField:"status",type:"switch"}],rowActions:[{label:"Edit",actionToPerform:"edit",icon:"ri-pencil-line",permission:"tax.edit"},{label:"Delete",actionToPerform:"delete",icon:"ri-delete-bin-line",permission:"tax.destroy"}],data:[],total:0}}ngOnInit(){this.tax$.subscribe(o=>{this.tableConfig.data=o?o?.data:[],this.tableConfig.total=o?o?.total:0})}onTableChange(o){this.store.dispatch(new i.Lk(o))}onActionClicked(o){"edit"==o.actionToPerform?this.edit(o.data):"status"==o.actionToPerform?this.status(o.data):"delete"==o.actionToPerform?this.delete(o.data):"deleteAll"==o.actionToPerform&&this.deleteAll(o.data)}edit(o){this.router.navigateByUrl(`/tax/edit/${o.id}`)}status(o){this.store.dispatch(new i.Wr(o.id,o.status))}delete(o){this.store.dispatch(new i._b(o.id))}deleteAll(o){this.store.dispatch(new i.iG(o))}static#t=this.\u0275fac=function(r){return new(r||C)(t.Y36(f.yh),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-tax"]],decls:3,vars:5,consts:[[3,"gridClass","title"],["button","",4,"hasPermission"],[3,"tableConfig","hasCheckbox","tableChanged","rowClicked","action"],["button",""],[1,"align-items-center","btn","btn-theme","d-flex",3,"routerLink"],[1,"ri-add-line"]],template:function(r,n){1&r&&(t.TgZ(0,"app-page-wrapper",0),t.YNc(1,_,5,5,"div",1),t.TgZ(2,"app-table",2),t.NdJ("tableChanged",function(h){return n.onTableChange(h)})("rowClicked",function(h){return n.edit(h)})("action",function(h){return n.onActionClicked(h)}),t.qZA()()),2&r&&(t.Q6J("gridClass","col-sm-12")("title","taxes"),t.xp6(1),t.Q6J("hasPermission","tax.create"),t.xp6(1),t.Q6J("tableConfig",n.tableConfig)("hasCheckbox",!0))},dependencies:[p.rH,v.a,d.t,m.A,Z.X$]})}(0,u.gn)([(0,f.Ph)(T.O.tax)],C.prototype,"tax$",void 0);var l=e(6223),J=e(8645),U=e(2096),E=e(4664),P=e(1631),L=e(9773),O=e(3092),I=e(2879);function M(a,o){1&a&&(t.TgZ(0,"div",12),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"name_is_required")," "))}function Q(a,o){1&a&&(t.TgZ(0,"div",12),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"rate_is_required")," "))}let b=(()=>{class a{constructor(r,n,c,h){this.store=r,this.route=n,this.router=c,this.formBuilder=h,this.destroy$=new J.x,this.form=this.formBuilder.group({name:new l.NI("",[l.kI.required]),rate:new l.NI("",[l.kI.required]),status:new l.NI(1)})}ngOnInit(){this.route.params.pipe((0,E.w)(r=>r.id?this.store.dispatch(new i.Fm(r.id)).pipe((0,P.z)(()=>this.store.select(T.O.selectedTax))):(0,U.of)()),(0,L.R)(this.destroy$)).subscribe(r=>{this.id=r?.id,this.form.patchValue({name:r?.name,rate:r?.rate,status:r?.status})})}submit(){this.form.markAllAsTouched();let r=new i.QA(this.form.value);"edit"==this.type&&this.id&&(r=new i.U2(this.form.value,this.id)),this.form.valid&&this.store.dispatch(r).subscribe({complete:()=>{this.router.navigateByUrl("/tax")}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(f.yh),t.Y36(p.gz),t.Y36(p.F0),t.Y36(l.qu))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-form-tax"]],inputs:{type:"type"},decls:20,vars:21,consts:[[1,"theme-form","theme-form-2","mega-form",3,"formGroup","ngSubmit"],[3,"label","for","required"],["type","text","placeholder","Enter tax name","name","name","formControlName","name",1,"form-control"],["class","invalid-feedback",4,"ngIf"],[1,"input-group"],["type","number","min","0","max","100","oninput","if (value > 100) value = 100; if (value < 0) value = 0;","name","rate","formControlName","rate",1,"form-control",3,"placeholder"],[1,"input-group-text"],[1,"form-check","form-switch","ps-0"],[1,"switch"],["type","checkbox","id","status","formControlName","status"],[1,"switch-state"],[3,"id"],[1,"invalid-feedback"]],template:function(n,c){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return c.submit()}),t.TgZ(1,"app-form-fields",1),t.ALo(2,"translate"),t._UZ(3,"input",2),t.YNc(4,M,3,3,"div",3),t.qZA(),t.TgZ(5,"app-form-fields",1)(6,"div",4),t._UZ(7,"input",5),t.ALo(8,"translate"),t.TgZ(9,"span",6),t._uU(10,"%"),t.qZA()(),t.YNc(11,Q,3,3,"div",3),t.qZA(),t.TgZ(12,"app-form-fields",1)(13,"div",7)(14,"label",8),t._UZ(15,"input",9)(16,"span",10),t.qZA()()(),t.TgZ(17,"app-button",11),t._uU(18),t.ALo(19,"translate"),t.qZA()()),2&n&&(t.Q6J("formGroup",c.form),t.xp6(1),t.Q6J("label",t.lcZ(2,15,"name"))("for","name")("required",!0),t.xp6(3),t.Q6J("ngIf",c.form.controls.name.touched&&(null==c.form.controls.name.errors?null:c.form.controls.name.errors.required)),t.xp6(1),t.Q6J("label","rate")("for","rate")("required",!0),t.xp6(2),t.s9C("placeholder",t.lcZ(8,17,"enter_rate")),t.xp6(4),t.Q6J("ngIf",c.form.controls.rate.touched&&(null==c.form.controls.rate.errors?null:c.form.controls.rate.errors.required)),t.xp6(1),t.Q6J("label","status")("for","status")("required",!1),t.xp6(5),t.Q6J("id","tax_btn"),t.xp6(1),t.Oqu(t.lcZ(19,19,"create"==c.type?"save_tax":"update_tax")))},dependencies:[s.O5,l._Y,l.Fj,l.wV,l.Wl,l.JJ,l.JL,l.qQ,l.Fd,l.sg,l.u,O.L,I.r,Z.X$]})}return a})(),D=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-create-tax"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(n,c){1&n&&(t.TgZ(0,"app-page-wrapper",0),t._UZ(1,"app-form-tax",1),t.qZA()),2&n&&(t.Q6J("title","add_tax"),t.xp6(1),t.Q6J("type","create"))},dependencies:[d.t,b]})}return a})(),B=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-edit-tax"]],decls:2,vars:2,consts:[[3,"title"],[3,"type"]],template:function(n,c){1&n&&(t.TgZ(0,"app-page-wrapper",0),t._UZ(1,"app-form-tax",1),t.qZA()),2&n&&(t.Q6J("title","edit_tax"),t.xp6(1),t.Q6J("type","edit"))},dependencies:[d.t,b]})}return a})();var A=e(5419);const N=[{path:"",component:C,canActivate:[A.n],data:{permission:"tax.index"}},{path:"create",component:D,canActivate:[A.n],data:{permission:["tax.index","tax.create"]}},{path:"edit/:id",component:B,canActivate:[A.n],data:{permission:["tax.index","tax.edit"]}}];let S=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(N),p.Bz]})}return a})(),Y=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#a=this.\u0275inj=t.cJS({imports:[s.ez,S,x.m,f.$l.forFeature([T.O])]})}return a})()},5419:(y,g,e)=>{e.d(g,{n:()=>p});var s=e(9212),f=e(186),x=e(6505);let p=(()=>{class u{constructor(i,t){this.store=i,this.router=t}canActivate(i,t){const v=this.store.selectSnapshot(m=>m.account).permissions?.map(m=>m?.name),d=i.data?.permission;return!!(!d||!Array.isArray(d)&&v?.includes(d)||Array.isArray(d)&&d?.length&&d.every(m=>v?.includes(m)))||(this.router.navigate(["/error/403"]),!1)}static#t=this.\u0275fac=function(t){return new(t||u)(s.LFG(f.yh),s.LFG(x.F0))};static#e=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},3092:(y,g,e)=>{e.d(g,{L:()=>T});var s=e(9212),f=e(6814),x=e(9515);function p(i,t){1&i&&(s.TgZ(0,"span",1),s._uU(1,"*"),s.qZA())}const u=["*"];let T=(()=>{class i{constructor(){this.class="mb-4 row align-items-center g-2",this.labelClass="form-label-title col-sm-2 mb-0",this.gridClass="col-sm-10"}static#t=this.\u0275fac=function(d){return new(d||i)};static#e=this.\u0275cmp=s.Xpm({type:i,selectors:[["app-form-fields"]],inputs:{class:"class",label:"label",labelClass:"labelClass",gridClass:"gridClass",for:"for",required:"required"},ngContentSelectors:u,decls:7,vars:11,consts:[["class","theme-color ms-2 required-dot",4,"ngIf"],[1,"theme-color","ms-2","required-dot"]],template:function(d,m){1&d&&(s.F$t(),s.TgZ(0,"div")(1,"label"),s._uU(2),s.ALo(3,"translate"),s.YNc(4,p,2,0,"span",0),s.qZA(),s.TgZ(5,"div"),s.Hsn(6),s.qZA()()),2&d&&(s.Tol(m.class),s.xp6(1),s.Tol(m.labelClass),s.uIk("for",m.for),s.xp6(1),s.hij(" ",s.lcZ(3,9,m.label),""),s.xp6(2),s.Q6J("ngIf",m.required),s.xp6(1),s.Tol(m.gridClass))},dependencies:[f.O5,x.X$]})}return i})()}}]);