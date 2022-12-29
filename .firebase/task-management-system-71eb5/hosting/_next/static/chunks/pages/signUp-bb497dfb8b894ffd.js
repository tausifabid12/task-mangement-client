(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{9485:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signUp",function(){return n(1332)}])},56707:function(e,s,n){"use strict";var r=n(85893),a=n(67294),l=n(59335),i=n(41664),t=n.n(i),c=n(66205);let d=()=>{let[e,s]=(0,a.useState)(!1),{logOut:n,user:i}=(0,a.useContext)(c.V);(0,a.useEffect)(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&s(!1))},[]);let d=(0,r.jsxs)("ul",{className:"mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:[(0,r.jsx)(l.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:(0,r.jsx)(t(),{href:"/",className:"flex items-center",children:"Home"})}),(0,r.jsx)(l.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:(0,r.jsx)(t(),{href:"/addTask",className:"flex items-center",children:"Add Tasks"})}),(0,r.jsx)(l.Typography,{as:"li",variant:"small",color:"blue-gray",className:"p-1 font-normal",children:(0,r.jsx)(t(),{href:"/AllTasks",className:"flex items-center",children:"All Tasks"})})]});return(0,r.jsxs)(l.Navbar,{className:"mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4",children:[(0,r.jsxs)("div",{className:"container mx-auto flex items-center justify-between text-blue-gray-900",children:[(0,r.jsx)(l.Typography,{as:"a",href:"/",variant:"small",className:"mr-4 text-2xl text-blue-500 cursor-pointer py-1.5 font-bold",children:(0,r.jsx)("span",{children:"Task Handler"})}),(0,r.jsx)("div",{className:"hidden lg:block",children:d}),(0,r.jsx)("div",{children:(null==i?void 0:i.email)?(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)(l.Button,{onClick:()=>n(),variant:"gradient",size:"sm",className:"hidden lg:inline-block mr-2",children:(0,r.jsx)("span",{children:"LogOut"})})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t(),{href:"/login",children:(0,r.jsx)(l.Button,{variant:"gradient",size:"sm",className:"hidden lg:inline-block mr-2",children:(0,r.jsx)("span",{children:"SignIn"})})}),(0,r.jsx)(t(),{href:"/signUp",children:(0,r.jsx)(l.Button,{variant:"gradient",size:"sm",className:"hidden lg:inline-block ",children:(0,r.jsx)("span",{children:"SignUp"})})})]})}),(0,r.jsx)(l.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:()=>s(!e),children:e?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]}),(0,r.jsxs)(l.MobileNav,{open:e,children:[d,(0,r.jsx)("div",{children:(null==i?void 0:i.email)?(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)(l.Button,{onClick:()=>n(),variant:"gradient",size:"sm",className:"mb-2 ",children:(0,r.jsx)("span",{children:"LogOut"})})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t(),{href:"/login",children:(0,r.jsx)(l.Button,{variant:"gradient",size:"sm",className:"mb-2 mr-3",children:(0,r.jsx)("span",{children:"SignIn"})})}),(0,r.jsx)(t(),{href:"/signUp",children:(0,r.jsx)(l.Button,{variant:"gradient",size:"sm",className:"mb-2",children:(0,r.jsx)("span",{children:"SignUp"})})})]})})]})]})};s.Z=d},1332:function(e,s,n){"use strict";n.r(s);var r=n(85893),a=n(59335),l=n(41664),i=n.n(l),t=n(67294),c=n(87536),d=n(86501),o=n(56707),h=n(56467),m=n(66205),x=n(11163);let u=()=>{let[e,s]=(0,t.useState)(!1),[n,l]=(0,t.useState)(""),{createUser:u,SocialLogin:g}=(0,t.useContext)(m.V),p=new h.hJ,j=(0,x.useRouter)(),{register:f,handleSubmit:N,formState:{errors:v}}=(0,c.cI)(),w=e=>{let{email:n,password:r}=e;s(!0),u(n,r).then(e=>{console.log(e),j.push("/"),s(!1),l(""),d.Am.success(" Sign up success")}).catch(e=>{s(!1),l(e.message)})},b=()=>{s(!0),g(p).then(e=>{s(!1),l(""),d.Am.success(" log in success",{position:"top-center",autoClose:4e3})}).catch(e=>{l(e.message),s(!1)})};return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("div",{className:"max-w-screen-2xl mx-auto h-screen flex justify-center lg:mt-20",children:(0,r.jsxs)(a.Card,{className:"w-full lg:w-[480px] h-[550px] border-2 border-t-gray-200",children:[(0,r.jsx)(a.CardHeader,{variant:"gradient",color:"blue",className:"mb-4 grid h-28 place-items-center",children:(0,r.jsx)(a.Typography,{variant:"h3",color:"white",children:"Sign Up"})}),(0,r.jsxs)("form",{onSubmit:N(w),children:[(0,r.jsxs)(a.CardBody,{className:"flex flex-col gap-4 mt-10",children:[(0,r.jsx)("p",{className:"text-red-600 font-bold",children:n}),(0,r.jsx)(a.Input,{label:"User Name",size:"lg",name:"username",...f("username",{required:!0})}),v.username&&(0,r.jsx)("span",{className:"text-red-500",children:"This field is required"}),(0,r.jsx)(a.Input,{label:"Email",size:"lg",...f("email",{required:!0})}),v.email&&(0,r.jsx)("span",{className:"text-red-500",children:"This field is required"}),(0,r.jsx)(a.Input,{label:"Password",size:"lg",...f("password",{required:!0,minLength:6})}),v.password&&"required"===v.password.type&&(0,r.jsx)("span",{className:"text-red-500",children:"This is required"}),v.password&&"minLength"===v.password.type&&(0,r.jsx)("span",{className:"text-red-500 ",children:"Password must have 6 character"}),e?(0,r.jsx)(a.Button,{type:"submit",color:"blue-gray",variant:"gradient",fullWidth:!0,children:"Loading..."}):(0,r.jsx)(a.Button,{type:"submit",variant:"gradient",fullWidth:!0,children:"Sign Up"}),(0,r.jsxs)(a.Typography,{variant:"small",className:"mt-2 ",children:["Already have an account?",(0,r.jsx)(i(),{href:"/login",className:"ml-1 font-bold text-blue-500",children:"Sign in"})]})]}),(0,r.jsx)(a.CardFooter,{divider:!0,className:"pt-0",children:(0,r.jsx)(a.Button,{onClick:b,variant:"gradient",fullWidth:!0,className:"mt-6",children:"SignIn with google"})})]})]})})]})};s.default=u},11163:function(e,s,n){e.exports=n(80880)}},function(e){e.O(0,[18,774,888,179],function(){return e(e.s=9485)}),_N_E=e.O()}]);