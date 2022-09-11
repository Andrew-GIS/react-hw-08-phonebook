"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{4806:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,o,c,a,i,s,u,d,l,m=t(885),p=t(168),h=t(6444),f=h.ZP.form(r||(r=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nborder: 1px solid blue;\npadding: ",";\nmargin: 0 auto 0 auto;\nwidth: 30%;\nbackground-color: "," ;\n"])),(function(n){return"".concat(n.theme.space[4],"px")}),(function(n){return"".concat(n.theme.colors.wheat)})),x=h.ZP.label(o||(o=(0,p.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nfont-size: ",";\npadding: ",";\n// border: 1px solid black;\nwidth: 80%;\n"])),(function(n){return"".concat(n.theme.fontSizes.m)}),(function(n){return"".concat(n.theme.space[2],"px")})),b=h.ZP.input(c||(c=(0,p.Z)(["\nwidth: 70%;\nmargin-left: ",";\n"])),(function(n){return"".concat(n.theme.space[4],"px")})),g=h.ZP.button(a||(a=(0,p.Z)(["\npadding: ",";\nmargin-top: ",";\nwidth: 30%;\nmin-width: 70px;\nbackground-color: ",";\nborder-radius: 5px;\n:hover {\n\tbackground-color: "," ;\n}"])),(function(n){return"".concat(n.theme.space[2],"px")}),(function(n){return"".concat(n.theme.space[4],"px")}),(function(n){return"".concat(n.theme.colors.secondary)}),(function(n){return"".concat(n.theme.colors.accent)})),j=t(2791),w=t(5984),y=t(8174),v=t(184);function Z(n){var e=n.onSubmit,t=(0,j.useState)(""),r=(0,m.Z)(t,2),o=r[0],c=r[1],a=(0,j.useState)(""),i=(0,m.Z)(a,2),s=i[0],u=i[1],d=(0,w.x0)(),l=function(n){var e=n.target,t=e.name,r=e.value;return"name"===t?void c(r):"number"===t?void u(r):void y.Am.error("Error with ".concat(t,", please try again"))},p=function(){c(""),u("")};return(0,v.jsxs)(f,{onSubmit:function(n){n.preventDefault(),e({name:o,number:s}),p()},autoComplete:"off",children:[(0,v.jsxs)(x,{htmlFor:o,children:["Name",(0,v.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:d,value:o,onChange:l})]}),(0,v.jsxs)(x,{htmlFor:s,children:["Phone",(0,v.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:d,value:s,onChange:l})]}),(0,v.jsx)(g,{type:"submit",children:"Add Contact"})]})}h.ZP.h2(i||(i=(0,p.Z)(["\npadding-left: ",";"])),(function(n){return"".concat(n.theme.space[4],"px")}));var C,k,P,z=h.ZP.ul(s||(s=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n//border: 1px solid blue;\npadding: ",";\nmargin: 0 auto 0 auto;\nwidth: 30%;\n//background-color: "," ;\n"])),(function(n){return"".concat(n.theme.space[4],"px")}),(function(n){return"".concat(n.theme.colors.wheat)})),A=h.ZP.li(u||(u=(0,p.Z)(["\ndisplay: flex;\njustify-content: space-between;\nflex-direction: row;\nmin-width: 200px;\nwidth: 100%;\nborder: solid 1px red;\npadding: ",";\nbackground-color: ",";\n"])),(function(n){return"".concat(n.theme.space[4],"px")}),(function(n){return"".concat(n.theme.colors.accent)})),q=h.ZP.li(d||(d=(0,p.Z)(["\ndisplay: inline-flex;\njustify-content: space-between;\nborder: solid 1px red;\nmin-width: 200px;\nwidth: 100%;\npadding: ",";\n"])),(function(n){return"".concat(n.theme.space[4],"px")})),F=h.ZP.button(l||(l=(0,p.Z)(["\n\tpadding: ",";\n\tborder: ",";\n\tfont-size: ",";\n\tborder-radius: 5px;\n\tbackground-color: ",";\n\t:hover {\n\t\tbackground-color: "," ;\n\t}\n"])),(function(n){return"".concat(n.theme.space[2],"px")}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.fontSizes.m}),(function(n){return"".concat(n.theme.colors.secondary)}),(function(n){return"".concat(n.theme.colors.accent)})),N=t(1975),S=t(9434),L=function(n){var e=n.id,t=n.name,r=n.number,o=(0,S.I0)();return(0,v.jsxs)(q,{children:[(0,v.jsx)("p",{children:t}),(0,v.jsx)("p",{children:r}),(0,v.jsx)(F,{type:"button",id:e,onClick:function(){return o((0,N.zY)(e))},children:"Delete"})]})},_=t(2007),D=t.n(_),R=function(n){var e=n.contacts,t=n.onDeleteContact;return(0,v.jsxs)(z,{children:[(0,v.jsxs)(A,{children:[(0,v.jsx)("p",{children:"Name"}),(0,v.jsx)("p",{children:"Phone"}),(0,v.jsx)("p",{children:"Delete"})]}),e.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,v.jsx)(L,{id:e,name:r,number:o,onDeleteContact:t},e)}))]})};z.propTypes={contacts:D().arrayOf(D().shape({id:D().string.isRequired,name:D().string.isRequired,number:D().string.isRequired}).isRequired),onDeleteContact:D().func};var O=h.ZP.form(C||(C=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\npadding: ",";\nmargin: 0 auto 0 auto;\nwidth: 30%;\nborder: 1px solid blue;\nbackground-color: "," ;\n"])),(function(n){return"".concat(n.theme.space[4],"px")}),(function(n){return"".concat(n.theme.colors.wheat)})),T=h.ZP.label(k||(k=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\npadding-left: ",";\nwidth: 80%;\n"])),(function(n){return"".concat(n.theme.space[4],"px")})),B=h.ZP.input(P||(P=(0,p.Z)(["\n\twidth: 70%;\n"]))),E=function(n){var e=n.title,t=n.value,r=n.onChange;return(0,v.jsx)(O,{autoComplete:"off",children:(0,v.jsxs)(T,{htmlFor:"filter",children:[e,(0,v.jsx)(B,{type:"text",name:"filter",value:t,onChange:r})]})})};E.prototype={title:D().string,value:D().string.isRequired,number:D().string.isRequired};var I=t(4324),M="Spiner_spiner__Y3Bg-",Y=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(I.Caf,{className:M})})},H=t(1771);t(5462);function J(){var n=(0,S.I0)(),e=(0,S.v9)((function(n){return n.contacts.contacts})),t=(0,S.v9)((function(n){return n.contacts.filter})),r=(0,S.v9)((function(n){return n.contacts.createContactLoading}));(0,j.useEffect)((function(){n((0,N.K2)())}),[n]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:"primaryTitle",children:"Phonebook"}),(0,v.jsx)(Z,{onSubmit:function(t){var r=t.name,o=t.number,c=e.find((function(n){return n.name.toLowerCase()===r.toLowerCase()}));c?y.Am.warn("".concat(r," is already in contacts."),{autoClose:1e3}):c||(n((0,N.rE)({id:(0,w.x0)(),name:r,number:o})),y.Am.success("Contact ".concat(r," added to the Phone List")))}}),(0,v.jsx)(E,{title:"Find contacts by name",value:t,onChange:function(e){n((0,H.M)(e.target.value))}}),(0,v.jsx)("h2",{className:"secondaryTitle",children:"Contacts"}),r?(0,v.jsx)(Y,{}):void 0===e||0===e.length?(0,v.jsx)("h3",{className:"warningText",children:"No Contects in your PhoneBook"}):(0,v.jsx)(R,{contacts:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}),(0,v.jsx)(y.Ix,{position:"top-center",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}}]);
//# sourceMappingURL=806.a817af70.chunk.js.map