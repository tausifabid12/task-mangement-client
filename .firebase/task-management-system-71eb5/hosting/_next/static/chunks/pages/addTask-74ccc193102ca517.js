(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [699],
  {
    95680: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/addTask",
        function () {
          return a(32269);
        },
      ]);
    },
    78351: function (e, s, a) {
      "use strict";
      var l = a(85893),
        r = a(67294),
        n = a(87536),
        t = a(9198),
        i = a.n(t);
      a(23300);
      var d = a(86501),
        c = a(11163),
        o = a(66205),
        m = a(59335);
      let h = () => {
        let [e, s] = (0, r.useState)(!1),
          [a, t] = (0, r.useState)(""),
          [h, x] = (0, r.useState)(new Date("12/29/2022")),
          [u, p] = (0, r.useState)(new Date("12/29/2022")),
          { user: g } = (0, r.useContext)(o.V),
          {
            register: j,
            handleSubmit: N,
            formState: { errors: f },
          } = (0, n.cI)(),
          b = (0, c.useRouter)(),
          v = (e) => {
            s(!0);
            let { priority: a, decs: l, taskName: r } = e,
              n = e.image[0],
              t = new FormData();
            t.append("image", n),
              fetch(
                "https://api.imgbb.com/1/upload?key=bc8a2458a554fd7f0397c6b63fa4e6e4",
                { method: "POST", body: t }
              )
                .then((e) => e.json())
                .then((e) => {
                  var n;
                  let t =
                    null == e
                      ? void 0
                      : null === (n = e.data) || void 0 === n
                      ? void 0
                      : n.url;
                  if ((console.log(t), t)) {
                    let i = {
                      taskName: r,
                      decs: l,
                      imgUrl: t,
                      priority: a,
                      startDate: h,
                      endDate: u,
                      email: null == g ? void 0 : g.email,
                    };
                    fetch(
                      "https://task-management-server-sooty.vercel.app/addTask",
                      {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(i),
                      }
                    )
                      .then((e) => e.json())
                      .then((e) => {
                        e.status &&
                          (s(!1),
                          d.Am.success("Task Added Successfully"),
                          b.push("/AllTasks"));
                      });
                  }
                });
          };
        return (0, l.jsx)("div", {
          className: "w-3/5 mx-auto ",
          children: (0, l.jsxs)("form", {
            onSubmit: N(v),
            className: "grid grid-cols-1 lg:grid-cols-2 gap-3",
            children: [
              (0, l.jsxs)("div", {
                className: "space-y-1 text-sm",
                children: [
                  (0, l.jsx)("label", {
                    htmlFor: "taskName",
                    className: "block dark:dark:text-gray-400",
                    children: "Task Name",
                  }),
                  (0, l.jsx)("input", {
                    type: "taskName",
                    ...j("taskName", { required: !0 }),
                    name: "taskName",
                    id: "taskName",
                    placeholder: "taskName",
                    className:
                      "w-full px-4 h-12 py-3 border border-gray-400 rounded-md ",
                  }),
                  f.taskName &&
                    (0, l.jsx)("span", {
                      className: "text-red-500 pt-2",
                      children: "This is required",
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "space-y-1 text-sm",
                children: [
                  (0, l.jsx)("label", {
                    htmlFor: "decs",
                    className: "block dark:dark:text-gray-400",
                    children: "Description",
                  }),
                  (0, l.jsx)("input", {
                    type: "text",
                    ...j("decs", { required: !0 }),
                    name: "decs",
                    id: "decs",
                    placeholder: "description",
                    className:
                      "w-full px-4 py-3 h-12 border border-gray-400 rounded-md ",
                  }),
                  f.decs &&
                    (0, l.jsx)("span", {
                      className: "text-red-500 pt-2",
                      children: "This is required",
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "space-y-1 text-sm",
                children: [
                  (0, l.jsx)("label", {
                    htmlFor: "priority",
                    className: "block dark:dark:text-gray-400",
                    children: "Priority",
                  }),
                  (0, l.jsxs)("select", {
                    name: "priority",
                    id: "priority",
                    className:
                      "w-full px-4 py-3 h-12 border border-gray-400 rounded-md ",
                    ...j("priority", { required: !0 }),
                    children: [
                      (0, l.jsx)("option", {
                        defaultValue: !0,
                        children: "High",
                      }),
                      (0, l.jsx)("option", { children: "Medium" }),
                      (0, l.jsx)("option", { children: "Low" }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "space-y-1 text-sm",
                children: [
                  (0, l.jsx)("label", {
                    htmlFor: "image",
                    className: "block dark:dark:text-gray-400",
                    children: "Image",
                  }),
                  (0, l.jsx)("input", {
                    type: "file",
                    ...j("image", { required: !0 }),
                    name: "image",
                    id: "image",
                    placeholder: "image",
                    className:
                      "w-full px-4 py-3 h-12 border border-gray-400 rounded-md ",
                  }),
                  f.image &&
                    (0, l.jsx)("span", {
                      className: "text-red-500 pt-2",
                      children: "This is required",
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("p", { children: "Starting Date:" }),
                  (0, l.jsx)("div", {
                    className:
                      "w-full px-4 py-3 h-12 border border-gray-400 rounded-md flex items-center ",
                    children: (0, l.jsx)("div", {
                      className: " mx-auto text-lg w-[38%]",
                      children: (0, l.jsx)(i(), {
                        selected: h,
                        onChange: (e) => x(e),
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("p", { children: "Dead Line:" }),
                  (0, l.jsx)("div", {
                    className:
                      "w-full px-4 py-3 h-12 border border-gray-400 rounded-md flex items-center ",
                    children: (0, l.jsx)("div", {
                      className: " mx-auto text-lg w-[38%]",
                      children: (0, l.jsx)(i(), {
                        selected: u,
                        onChange: (e) => p(e),
                      }),
                    }),
                  }),
                ],
              }),
              e
                ? (0, l.jsx)(m.Button, {
                    type: "submit",
                    color: "blue-gray",
                    variant: "gradient",
                    className: "lg:col-span-2",
                    fullWidth: !0,
                    children: "Loading...",
                  })
                : (0, l.jsx)("button", {
                    type: "submit",
                    className:
                      "block w-full p-3 text-center lg:col-span-2 rounded-md bg-blue-500 text-white",
                    children: "Add Task",
                  }),
            ],
          }),
        });
      };
      s.Z = h;
    },
    70226: function (e, s, a) {
      "use strict";
      var l = a(85893);
      a(67294);
      let r = () =>
        (0, l.jsx)("div", {
          className:
            "max-w-screen-2xl mx-auto h-screen grid place-content-center",
          children: (0, l.jsx)("span", {
            className: "animate-spin mr-3 text-2xl font-bold",
            children: "Loading...",
          }),
        });
      s.Z = r;
    },
    56707: function (e, s, a) {
      "use strict";
      var l = a(85893),
        r = a(67294),
        n = a(59335),
        t = a(41664),
        i = a.n(t),
        d = a(66205);
      let c = () => {
        let [e, s] = (0, r.useState)(!1),
          { logOut: a, user: t } = (0, r.useContext)(d.V);
        (0, r.useEffect)(() => {
          window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && s(!1)
          );
        }, []);
        let c = (0, l.jsxs)("ul", {
          className:
            "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
          children: [
            (0, l.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, l.jsx)(i(), {
                href: "/",
                className: "flex items-center",
                children: "Home",
              }),
            }),
            (0, l.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, l.jsx)(i(), {
                href: "/addTask",
                className: "flex items-center",
                children: "Add Tasks",
              }),
            }),
            (0, l.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, l.jsx)(i(), {
                href: "/AllTasks",
                className: "flex items-center",
                children: "All Tasks",
              }),
            }),
          ],
        });
        return (0, l.jsxs)(n.Navbar, {
          className: "mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4",
          children: [
            (0, l.jsxs)("div", {
              className:
                "container mx-auto flex items-center justify-between text-blue-gray-900",
              children: [
                (0, l.jsx)(n.Typography, {
                  as: "a",
                  href: "/",
                  variant: "small",
                  className:
                    "mr-4 text-2xl text-blue-500 cursor-pointer py-1.5 font-bold",
                  children: (0, l.jsx)("span", { children: "Task Handler" }),
                }),
                (0, l.jsx)("div", {
                  className: "hidden lg:block",
                  children: c,
                }),
                (0, l.jsx)("div", {
                  children: (null == t ? void 0 : t.email)
                    ? (0, l.jsx)(i(), {
                        href: "/",
                        children: (0, l.jsx)(n.Button, {
                          onClick: () => a(),
                          variant: "gradient",
                          size: "sm",
                          className: "hidden lg:inline-block mr-2",
                          children: (0, l.jsx)("span", { children: "LogOut" }),
                        }),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(i(), {
                            href: "/login",
                            children: (0, l.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "hidden lg:inline-block mr-2",
                              children: (0, l.jsx)("span", {
                                children: "SignIn",
                              }),
                            }),
                          }),
                          (0, l.jsx)(i(), {
                            href: "/signUp",
                            children: (0, l.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "hidden lg:inline-block ",
                              children: (0, l.jsx)("span", {
                                children: "SignUp",
                              }),
                            }),
                          }),
                        ],
                      }),
                }),
                (0, l.jsx)(n.IconButton, {
                  variant: "text",
                  className:
                    "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
                  ripple: !1,
                  onClick: () => s(!e),
                  children: e
                    ? (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        className: "h-6 w-6",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, l.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      })
                    : (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, l.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M4 6h16M4 12h16M4 18h16",
                        }),
                      }),
                }),
              ],
            }),
            (0, l.jsxs)(n.MobileNav, {
              open: e,
              children: [
                c,
                (0, l.jsx)("div", {
                  children: (null == t ? void 0 : t.email)
                    ? (0, l.jsx)(i(), {
                        href: "/",
                        children: (0, l.jsx)(n.Button, {
                          onClick: () => a(),
                          variant: "gradient",
                          size: "sm",
                          className: "mb-2 ",
                          children: (0, l.jsx)("span", { children: "LogOut" }),
                        }),
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(i(), {
                            href: "/login",
                            children: (0, l.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "mb-2 mr-3",
                              children: (0, l.jsx)("span", {
                                children: "SignIn",
                              }),
                            }),
                          }),
                          (0, l.jsx)(i(), {
                            href: "/signUp",
                            children: (0, l.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "mb-2",
                              children: (0, l.jsx)("span", {
                                children: "SignUp",
                              }),
                            }),
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        });
      };
      s.Z = c;
    },
    32269: function (e, s, a) {
      "use strict";
      a.r(s);
      var l = a(85893),
        r = a(11163),
        n = a(67294),
        t = a(78351),
        i = a(70226),
        d = a(56707),
        c = a(66205);
      let o = () => {
        let { user: e, loading: s } = (0, n.useContext)(c.V),
          a = (0, r.useRouter)();
        return s
          ? (0, l.jsx)(i.Z, {})
          : ((null == e ? void 0 : e.email) || a.push("/login"),
            (0, l.jsxs)("div", {
              className: "mx-auto max-w-screen-2xl ",
              children: [
                (0, l.jsx)(d.Z, {}),
                (0, l.jsxs)("div", {
                  className: "py-16",
                  children: [
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)("h2", {
                        className: "text-3xl font-bold text-center pb-10",
                        children: "Add New Task",
                      }),
                    }),
                    (0, l.jsx)("div", { children: (0, l.jsx)(t.Z, {}) }),
                  ],
                }),
              ],
            }));
      };
      s.default = o;
    },
  },
  function (e) {
    e.O(0, [18, 675, 659, 774, 888, 179], function () {
      return e((e.s = 95680));
    }),
      (_N_E = e.O());
  },
]);
