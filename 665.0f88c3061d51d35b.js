"use strict";(self.webpackChunkFastkart_Admin_SSR=self.webpackChunkFastkart_Admin_SSR||[]).push([[665],{8665:(O,g,n)=>{n.r(g),n.d(g,{AuthModule:()=>S});var d=n(6814),c=n(6505),r=n(6223),p=n(2241),o=n(9212),m=n(186),_=n(3477);function v(t,l){if(1&t&&(o.TgZ(0,"div",2),o._UZ(1,"i",3),o._uU(2),o.qZA()),2&t){const s=o.oxw();o.xp6(2),o.hij(" ",null==s.alert?null:s.alert.message,"\n")}}function Z(t,l){if(1&t&&(o.TgZ(0,"div",4),o._UZ(1,"i",5),o._uU(2),o.qZA()),2&t){const s=o.oxw();o.xp6(2),o.hij("",null==s.alert?null:s.alert.message,"\n")}}let u=(()=>{class t{constructor(s){this.notificationService=s,this.notificationService.alertSubject.subscribe(i=>{this.alert=i})}ngOnDestroy(){this.notificationService.notification=!0}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(_.g))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-alert"]],decls:2,vars:2,consts:[["class","alert alert-danger login-alert","role","alert",4,"ngIf"],["class","alert alert-success login-alert","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger","login-alert"],[1,"ri-error-warning-line"],["role","alert",1,"alert","alert-success","login-alert"],[1,"ri-check-line"]],template:function(i,e){1&i&&o.YNc(0,v,3,1,"div",0)(1,Z,3,1,"div",1),2&i&&(o.Q6J("ngIf","error"==(null==e.alert?null:e.alert.type)),o.xp6(1),o.Q6J("ngIf","success"==(null==e.alert?null:e.alert.type)))},dependencies:[d.O5]})}return t})();var f=n(2879),h=n(9515);function w(t,l){1&t&&(o.TgZ(0,"div",18),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"email_is_required")," "))}function A(t,l){1&t&&(o.TgZ(0,"div",18),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"invalid_email")," "))}function T(t,l){1&t&&(o.TgZ(0,"div",18),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"password_is_required")," "))}const b=()=>["/auth/forgot-password"];function x(t,l){1&t&&(o.TgZ(0,"div",14),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"email_is_required")," "))}function U(t,l){1&t&&(o.TgZ(0,"div",14),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"invalid_email")," "))}function L(t,l){1&t&&(o.TgZ(0,"div",17),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"new_password_is_required")))}function J(t,l){if(1&t){const s=o.EpF();o.TgZ(0,"div")(1,"div",18),o.NdJ("click",function(){o.CHM(s);const e=o.oxw();return o.KtG(e.showPassword())}),o._UZ(2,"span",19),o.qZA()()}if(2&t){const s=o.oxw();o.xp6(2),o.Q6J("ngClass",s.show?"Hide":"show")}}function P(t,l){1&t&&(o.TgZ(0,"div",17),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"confirm_password_is_required")))}const I=[{path:"login",component:(()=>{class t{constructor(s,i,e){this.store=s,this.router=i,this.formBuilder=e,this.form=this.formBuilder.group({email:new r.NI("admin@example.com",[r.kI.required,r.kI.email]),password:new r.NI("123456789",[r.kI.required])})}submit(){this.form.markAllAsTouched(),this.form.valid&&this.store.dispatch(new p.m3(this.form.value)).subscribe({complete:()=>{this.router.navigateByUrl("/dashboard")}})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(m.yh),o.Y36(c.F0),o.Y36(r.qu))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:41,vars:33,consts:[[1,"log-in-section","section-b-space"],[1,"container","w-100"],[1,"row"],[1,"col-xl-5","col-lg-6","me-auto"],[1,"log-in-box"],[1,"log-in-title"],[1,"input-box"],[1,"row","g-4",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-floating","theme-form-floating","log-in-form"],["type","email","id","email","formControlName","email",1,"form-control",3,"placeholder"],["for","email"],["class","invalid-feedback",4,"ngIf"],["type","password","id","password","formControlName","password",1,"form-control",3,"placeholder"],["for","password"],[1,"forgot-box"],[1,"forgot-password",3,"routerLink"],[3,"id"],[1,"invalid-feedback"]],template:function(i,e){1&i&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"app-alert"),o.TgZ(5,"div",4)(6,"div",5)(7,"h3"),o._uU(8),o.ALo(9,"translate"),o.qZA(),o.TgZ(10,"h4"),o._uU(11),o.ALo(12,"translate"),o.qZA()(),o.TgZ(13,"div",6)(14,"form",7),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(15,"div",8)(16,"div",9),o._UZ(17,"input",10),o.ALo(18,"translate"),o.TgZ(19,"label",11),o._uU(20),o.ALo(21,"translate"),o.qZA(),o.YNc(22,w,3,3,"div",12)(23,A,3,3,"div",12),o.qZA()(),o.TgZ(24,"div",8)(25,"div",9),o._UZ(26,"input",13),o.ALo(27,"translate"),o.TgZ(28,"label",14),o._uU(29),o.ALo(30,"translate"),o.qZA(),o.YNc(31,T,3,3,"div",12),o.qZA()(),o.TgZ(32,"div",8)(33,"div",15)(34,"a",16),o._uU(35),o.ALo(36,"translate"),o.qZA()()(),o.TgZ(37,"div",8)(38,"app-button",17),o._uU(39),o.ALo(40,"translate"),o.qZA()()()()()()()()()),2&i&&(o.xp6(8),o.Oqu(o.lcZ(9,16,"welcome_to_fastkart")),o.xp6(3),o.Oqu(o.lcZ(12,18,"log_in_your_account")),o.xp6(3),o.Q6J("formGroup",e.form),o.xp6(3),o.s9C("placeholder",o.lcZ(18,20,"email_address")),o.xp6(3),o.Oqu(o.lcZ(21,22,"email_address")),o.xp6(2),o.Q6J("ngIf",e.form.controls.email.touched&&(null==e.form.controls.email.errors?null:e.form.controls.email.errors.required)),o.xp6(1),o.Q6J("ngIf",e.form.controls.email.touched&&(null==e.form.controls.email.errors?null:e.form.controls.email.errors.email)),o.xp6(3),o.MGl("placeholder","",o.lcZ(27,24,"password")," "),o.xp6(3),o.Oqu(o.lcZ(30,26,"password")),o.xp6(2),o.Q6J("ngIf",e.form.controls.password.touched&&(null==e.form.controls.password.errors?null:e.form.controls.password.errors.required)),o.xp6(3),o.Q6J("routerLink",o.DdM(32,b)),o.xp6(1),o.hij("",o.lcZ(36,28,"forgot_password"),"?"),o.xp6(3),o.Tol("btn btn-theme w-100 justify-content-center"),o.Q6J("id","login_btn"),o.xp6(1),o.hij(" ",o.lcZ(40,30,"log_in")," "))},dependencies:[d.O5,c.rH,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,u,f.r,h.X$]})}return t})()},{path:"forgot-password",component:(()=>{class t{constructor(s,i,e){this.store=s,this.router=i,this.formBuilder=e,this.form=this.formBuilder.group({email:["",[r.kI.required,r.kI.email]]})}submit(){this.form.markAllAsTouched(),this.form.valid&&this.store.dispatch(new p.OF(this.form.value)).subscribe({complete:()=>{this.router.navigateByUrl("/auth/otp")}})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(m.yh),o.Y36(c.F0),o.Y36(r.qu))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-forgot-password"]],decls:28,vars:21,consts:[[1,"log-in-section","section-b-space"],[1,"container","w-100"],[1,"row"],[1,"col-xl-5","col-lg-6","me-auto"],[1,"log-in-box"],[1,"log-in-title"],[1,"input-box"],[1,"row","g-4",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-floating","theme-form-floating","log-in-form"],["type","email","formControlName","email","id","email",1,"form-control",3,"placeholder"],["for","email"],["class","invalid-feedback",4,"ngIf"],[3,"id"],[1,"invalid-feedback"]],template:function(i,e){1&i&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"app-alert"),o.TgZ(5,"div",4)(6,"div",5)(7,"h3"),o._uU(8),o.ALo(9,"translate"),o.qZA(),o.TgZ(10,"h4"),o._uU(11),o.ALo(12,"translate"),o.qZA()(),o.TgZ(13,"div",6)(14,"form",7),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(15,"div",8)(16,"div",9),o._UZ(17,"input",10),o.ALo(18,"translate"),o.TgZ(19,"label",11),o._uU(20),o.ALo(21,"translate"),o.qZA(),o.YNc(22,x,3,3,"div",12)(23,U,3,3,"div",12),o.qZA()(),o.TgZ(24,"div",8)(25,"app-button",13),o._uU(26),o.ALo(27,"translate"),o.qZA()()()()()()()()()),2&i&&(o.xp6(8),o.Oqu(o.lcZ(9,11,"welcome_to_fastkart")),o.xp6(3),o.Oqu(o.lcZ(12,13,"forgot_password")),o.xp6(3),o.Q6J("formGroup",e.form),o.xp6(3),o.s9C("placeholder",o.lcZ(18,15,"email_address")),o.xp6(3),o.Oqu(o.lcZ(21,17,"enter_email_address")),o.xp6(2),o.Q6J("ngIf",e.form.controls.email.touched&&(null==e.form.controls.email.errors?null:e.form.controls.email.errors.required)),o.xp6(1),o.Q6J("ngIf",e.form.controls.email.touched&&(null==e.form.controls.email.errors?null:e.form.controls.email.errors.email)),o.xp6(2),o.Tol("btn btn-theme w-100 justify-content-center"),o.Q6J("id","forgot_btn"),o.xp6(1),o.hij(" ",o.lcZ(27,19,"send")," "))},dependencies:[d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,u,f.r,h.X$]})}return t})()},{path:"otp",component:(()=>{class t{constructor(s,i,e){this.router=s,this.store=i,this.formBuilder=e,this.email=this.store.selectSnapshot(a=>a.auth.email),this.email||this.router.navigateByUrl("/auth/login"),this.form=this.formBuilder.group({otp:new r.NI("",[r.kI.required,r.kI.minLength(5)])})}submit(){this.form.markAllAsTouched(),this.form.valid&&this.store.dispatch(new p.hP({email:this.email,token:this.form.value.otp})).subscribe({complete:()=>{this.router.navigateByUrl("/auth/update-password")}})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(c.F0),o.Y36(m.yh),o.Y36(r.qu))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-otp"]],decls:23,vars:14,consts:[[1,"log-in-section","section-b-space"],[1,"container","w-100"],[1,"row"],[1,"col-xl-5","col-lg-6","me-auto"],[3,"formGroup","ngSubmit"],[1,"log-in-box"],[1,"log-in-title"],[1,"text-content"],["id","otp",1,"row","d-flex","row-cols-6","g-2","mb-5"],[1,"outer-otp"],[1,"inner-otp"],["type","text","formControlName","otp","maxlength","5","oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');","onKeyPress","if(this.value.length==5) return false;"],[3,"id"]],template:function(i,e){1&i&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"app-alert"),o.TgZ(5,"form",4),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(6,"div",5)(7,"div",6)(8,"h3",7),o._uU(9),o.ALo(10,"translate"),o.qZA(),o.TgZ(11,"h5",7),o._uU(12),o.ALo(13,"translate"),o.TgZ(14,"span"),o._uU(15),o.qZA()()(),o.TgZ(16,"div",8)(17,"div",9)(18,"div",10),o._UZ(19,"input",11),o.qZA()()(),o.TgZ(20,"app-button",12),o._uU(21),o.ALo(22,"translate"),o.qZA()()()()()()()),2&i&&(o.xp6(5),o.Q6J("formGroup",e.form),o.xp6(4),o.Oqu(o.lcZ(10,8,"please_enter_the_one_time_password_to_verify_your_account")),o.xp6(3),o.hij(" ",o.lcZ(13,10,"a_code_has_been_sent_to")," "),o.xp6(3),o.Oqu(e.email),o.xp6(5),o.Tol("btn btn-theme w-100 justify-content-center"),o.Q6J("id","otp_btn"),o.xp6(1),o.hij(" ",o.lcZ(22,12,"validate")," "))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u,u,f.r,h.X$]})}return t})()},{path:"update-password",component:(()=>{class t{constructor(s,i,e){this.store=s,this.formBuilder=i,this.router=e,this.show=!1,this.email=this.store.selectSnapshot(a=>a.auth.email),this.token=this.store.selectSnapshot(a=>a.auth.token),!this.email&&!this.token&&this.router.navigateByUrl("/auth/login"),this.form=this.formBuilder.group({newPassword:new r.NI("",[r.kI.required]),confirmPassword:new r.NI("",[r.kI.required])})}showPassword(){this.show=!this.show}submit(){this.form.markAllAsTouched(),this.form.valid&&this.store.dispatch(new p.CY({email:this.email,token:Number(this.token),password:this.form.value.newPassword,password_confirmation:this.form.value.confirmPassword})).subscribe({complete:()=>{this.router.navigateByUrl("/auth/login")}})}static#o=this.\u0275fac=function(i){return new(i||t)(o.Y36(m.yh),o.Y36(r.qu),o.Y36(c.F0))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["app-update-password"]],decls:36,vars:30,consts:[[1,"log-in-section","section-b-space"],[1,"container","w-100"],[1,"row"],[1,"col-xl-5","col-lg-6","me-auto"],[1,"log-in-box"],[1,"log-in-title"],[1,"input-box"],[1,"row","g-4",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"form-floating","theme-form-floating","log-in-form"],["name","newPassword","formControlName","newPassword","id","email",1,"form-control",3,"type","placeholder"],["for","email"],["class","invalid-feedback",4,"ngIf"],["id","password","formControlName","confirmPassword",1,"form-control",3,"type","placeholder"],["for","password"],[4,"ngIf"],[3,"id"],[1,"invalid-feedback"],[1,"show-hide",3,"click"],[1,"show",3,"ngClass"]],template:function(i,e){1&i&&(o.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),o._UZ(4,"app-alert"),o.TgZ(5,"div",4)(6,"div",5)(7,"h3"),o._uU(8),o.ALo(9,"translate"),o.qZA(),o.TgZ(10,"h4"),o._uU(11),o.ALo(12,"translate"),o.qZA()(),o.TgZ(13,"div",6)(14,"form",7),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(15,"div",8)(16,"div",9),o._UZ(17,"input",10),o.ALo(18,"translate"),o.TgZ(19,"label",11),o._uU(20),o.ALo(21,"translate"),o.qZA(),o.YNc(22,L,3,3,"div",12),o.qZA()(),o.TgZ(23,"div",8)(24,"div",9),o._UZ(25,"input",13),o.ALo(26,"translate"),o.TgZ(27,"label",14),o._uU(28),o.ALo(29,"translate"),o.qZA(),o.YNc(30,J,3,1,"div",15)(31,P,3,3,"div",12),o.qZA()(),o.TgZ(32,"div",8)(33,"app-button",16),o._uU(34),o.ALo(35,"translate"),o.qZA()()()()()()()()()),2&i&&(o.xp6(8),o.Oqu(o.lcZ(9,16,"update_password")),o.xp6(3),o.Oqu(o.lcZ(12,18,"please_choose_your_password")),o.xp6(3),o.Q6J("formGroup",e.form),o.xp6(3),o.s9C("placeholder",o.lcZ(18,20,"new_password")),o.Q6J("type","password"),o.xp6(3),o.Oqu(o.lcZ(21,22,"new_password")),o.xp6(2),o.Q6J("ngIf",e.form.controls.newPassword.touched&&(null==e.form.controls.newPassword.errors?null:e.form.controls.newPassword.errors.required)),o.xp6(3),o.s9C("placeholder",o.lcZ(26,24,"password")),o.Q6J("type",e.show?"text":"password"),o.xp6(3),o.Oqu(o.lcZ(29,26,"confirm_password")),o.xp6(2),o.Q6J("ngIf",!(null!=e.form.controls.confirmPassword.errors&&e.form.controls.confirmPassword.errors.required)),o.xp6(1),o.Q6J("ngIf",e.form.controls.confirmPassword.touched&&(null==e.form.controls.confirmPassword.errors?null:e.form.controls.confirmPassword.errors.required)),o.xp6(2),o.Tol("btn btn-theme w-100 justify-content-center"),o.Q6J("id","pass_btn"),o.xp6(1),o.hij(" ",o.lcZ(35,28,"submit")," "))},dependencies:[d.mk,d.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,u,f.r,h.X$]})}return t})()}];let k=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[c.Bz.forChild(I),c.Bz]})}return t})();var j=n(6208),F=n(8461);let S=(()=>{class t{static#o=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[d.ez,k,r.u5,r.UX,j.m,m.$l.forFeature([F.j])]})}return t})()}}]);