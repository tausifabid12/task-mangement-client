"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [266],
  {
    8942: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return p;
        },
      });
      var a = l(85893),
        t = l(67294),
        n = l(59335),
        r = l(63750),
        i = l(86501),
        d = l(87536);
      l(23300);
      let o = (e) => {
          let { openModal: s, handleOpenModal: l, info: r, refetch: o } = e,
            {
              endDate: c,
              startDate: h,
              taskName: x,
              decs: m,
              priority: u,
              _id: p,
              status: j,
            } = r,
            [g, v] = (0, t.useState)(!1),
            [N, f] = (0, t.useState)(""),
            [k, b] = (0, t.useState)(new Date()),
            [y, w] = (0, t.useState)(new Date()),
            {
              register: T,
              handleSubmit: C,
              formState: { errors: S },
            } = (0, d.cI)(),
            B = (e) => {
              let { priority: s, decs: l, taskName: a, status: t } = e,
                n = {
                  taskName: a,
                  decs: l,
                  priority: s,
                  startDate: k,
                  endDate: y,
                  status: t,
                };
              console.log(n),
                fetch(
                  "https://task-management-server-sooty.vercel.app/updateTask/".concat(
                    p
                  ),
                  {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(n),
                  }
                )
                  .then((e) => e.json())
                  .then((e) => {
                    (null == e ? void 0 : e.status) &&
                      (o(), i.Am.success("Data Updated successfully")),
                      console.log(e);
                  });
            };
          return (0, a.jsx)(t.Fragment, {
            children: (0, a.jsxs)(n.Dialog, {
              open: s,
              size: "lg",
              handler: l,
              children: [
                (0, a.jsx)(n.DialogHeader, { children: x }),
                (0, a.jsxs)("form", {
                  onSubmit: C(B),
                  children: [
                    (0, a.jsx)(n.DialogBody, {
                      divider: !0,
                      children: (0, a.jsx)("div", {
                        className: "w-full px-4 mx-auto ",
                        children: (0, a.jsxs)("div", {
                          className: "grid grid-cols-1 lg:grid-cols-2 gap-3",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "space-y-1 text-sm",
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "taskName",
                                  className: "block dark:dark:text-gray-400",
                                  children: "Task Name",
                                }),
                                (0, a.jsx)("input", {
                                  type: "taskName",
                                  ...T("taskName", { required: !0 }),
                                  name: "taskName",
                                  id: "taskName",
                                  defaultValue: x,
                                  className:
                                    "w-full px-4 h-12 py-3 border border-gray-700 rounded-md ",
                                }),
                                S.taskName &&
                                  (0, a.jsx)("span", {
                                    className: "text-red-500 pt-2",
                                    children: "This is required",
                                  }),
                                (0, a.jsx)("div", {
                                  className:
                                    "flex justify-end text-xs dark:dark:text-gray-400",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-1 text-sm",
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "decs",
                                  className: "block dark:dark:text-gray-400",
                                  children: "Description",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  ...T("decs", { required: !0 }),
                                  name: "decs",
                                  id: "decs",
                                  defaultValue: m,
                                  className:
                                    "w-full px-4 py-3 h-12 border border-gray-700 rounded-md ",
                                }),
                                S.taskName &&
                                  (0, a.jsx)("span", {
                                    className: "text-red-500 pt-2",
                                    children: "This is required",
                                  }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-1 text-sm",
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "cars",
                                  className: "block dark:dark:text-gray-400",
                                  children: "Priority",
                                }),
                                (0, a.jsxs)("select", {
                                  name: "cars",
                                  id: "cars",
                                  defaultValue: u,
                                  className:
                                    "w-full px-4 py-3 h-12 border border-gray-700 rounded-md ",
                                  ...T("priority", { required: !0 }),
                                  children: [
                                    (0, a.jsx)("option", { children: "High" }),
                                    (0, a.jsx)("option", {
                                      children: "Medium",
                                    }),
                                    (0, a.jsx)("option", { children: "Low" }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-1 text-sm",
                              children: [
                                (0, a.jsx)("label", {
                                  htmlFor: "status",
                                  className: "block dark:dark:text-gray-400",
                                  children: "Status",
                                }),
                                (0, a.jsxs)("select", {
                                  name: "status",
                                  id: "status",
                                  defaultValue: j,
                                  className:
                                    "w-full px-4 py-3 h-12 border border-gray-700 rounded-md ",
                                  ...T("status", { required: !0 }),
                                  children: [
                                    (0, a.jsx)("option", { children: "New" }),
                                    (0, a.jsx)("option", {
                                      children: "started",
                                    }),
                                    (0, a.jsx)("option", {
                                      children: "completed",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)(n.DialogFooter, {
                      children: [
                        (0, a.jsx)(n.Button, {
                          variant: "text",
                          color: "red",
                          onClick: l,
                          className: "mr-1",
                          children: (0, a.jsx)("span", { children: "Cancel" }),
                        }),
                        (0, a.jsx)(n.Button, {
                          type: "submit",
                          variant: "gradient",
                          color: "blue",
                          onClick: l,
                          children: (0, a.jsx)("span", { children: "Update" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        c = (e) => {
          let { info: s, handleTaskStatus: l, refetch: d, handleDelete: c } = e,
            {
              endDate: h,
              startDate: x,
              taskName: m,
              imgUrl: u,
              decs: p,
              _id: j,
              status: g,
            } = s,
            [v, N] = (0, t.useState)(!1),
            f = () => {
              N(!v);
            };
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsxs)(n.Card, {
                className:
                  "w-96 h-[290px] shadow-md border-t-2 border-gray-200 ",
                children: [
                  (0, a.jsx)(n.CardHeader, {
                    className:
                      "absolute h-28 w-36 left-6 -top-5 shadow-lg shadow-blue-100",
                    children: (0, a.jsx)("img", {
                      src: u,
                      alt: "Task Image",
                      className: "h-full w-full ",
                    }),
                  }),
                  (0, a.jsxs)(n.CardBody, {
                    className: " pt-20",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex justify-between pb-3",
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "text-lg lg:text-2xl font-bold text-gray-900",
                            children: m,
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex w-max gap-2",
                            children: [
                              (0, a.jsx)(n.IconButton, {
                                onClick: f,
                                ripple: !0,
                                color: "green",
                                size: "sm",
                                children: (0, a.jsx)("span", {
                                  children: (0, a.jsx)(r.Ph1, {}),
                                }),
                              }),
                              (0, a.jsx)(n.IconButton, {
                                onClick: () => c(j),
                                ripple: !0,
                                color: "red",
                                size: "sm",
                                children: (0, a.jsx)(r.AuQ, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(n.Typography, { children: p }),
                      (0, a.jsxs)("div", {
                        className: " mt-3 justify-between ".concat(
                          "completed" === g ? "flex" : "hidden"
                        ),
                        children: [
                          (0, a.jsx)("p", { children: "Want A Fresh Start: " }),
                          (0, a.jsx)(n.Button, {
                            onClick: () => l(j, "new"),
                            color: "orange",
                            size: "sm",
                            className: "",
                            children: "not Complete",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "w-full max-h-28 align-bottom",
                    children: (0, a.jsxs)(n.CardFooter, {
                      divider: !0,
                      className: "h- py-3",
                      children: [
                        (0, a.jsx)("div", {
                          className: "absolute top-1 right-1 ",
                          children:
                            "completed" === g
                              ? (0, a.jsx)(n.Button, {
                                  onClick: () =>
                                    i.Am.error(
                                      "You have already Completed the task"
                                    ),
                                  color: "red",
                                  size: "sm",
                                  className: "shadow-lg shadow-red-200",
                                  children: "Completed",
                                })
                              : (0, a.jsx)(a.Fragment, {
                                  children:
                                    "started" === g
                                      ? (0, a.jsx)(n.Button, {
                                          onClick: () => l(j, "completed"),
                                          color: "green",
                                          size: "sm",
                                          className:
                                            "shadow-lg shadow-green-200",
                                          children: "Complete",
                                        })
                                      : (0, a.jsx)(n.Button, {
                                          onClick: () => l(j, "started"),
                                          color: "blue",
                                          size: "sm",
                                          className:
                                            "shadow-lg shadow-blue-200",
                                          children: "Start",
                                        }),
                                }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-bold pr-4",
                              children: "Progress:",
                            }),
                            (0, a.jsx)(n.Progress, {
                              value: 10,
                              color: "blue",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(o, {
                info: s,
                refetch: d,
                handleOpenModal: f,
                openModal: v,
              }),
            ],
          });
        };
      var h = l(66205),
        x = l(11772);
      let m = () =>
          (0, a.jsx)("div", {
            className: "max-w-screen-2xl mx-auto h-[500px]",
            children: (0, a.jsx)("h3", {
              className: "text-4xl font-bold text-gray-600",
              children: "NO Data Found..",
            }),
          }),
        u = () => {
          let { user: e } = (0, t.useContext)(h.V),
            [s, l] = (0, x.Z)(),
            r = (e, s) => {
              fetch(
                "https://task-management-server-sooty.vercel.app/updateTask/".concat(
                  e
                ),
                {
                  method: "PUT",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ status: s }),
                }
              )
                .then((e) => e.json())
                .then((e) => {
                  (null == e ? void 0 : e.status) &&
                    (l(), i.Am.success("Task ".concat(s))),
                    console.log(e);
                });
            },
            d = (e) => {
              fetch(
                "https://task-management-server-sooty.vercel.app/deleteTask/".concat(
                  e
                ),
                { method: "DELETE" }
              )
                .then((e) => e.json())
                .then((e) => {
                  (null == e ? void 0 : e.status) &&
                    (l(), i.Am.error("Task Deleted")),
                    console.log(e);
                });
            };
          return (0, a.jsx)("div", {
            className: "max-w-screen-2xl mx-auto py-11",
            children: (0, a.jsxs)(n.Tabs, {
              id: "custom-animation",
              value: "All Tasks",
              children: [
                (0, a.jsxs)("div", {
                  className: " grid grid-cols-1 lg:grid-cols-2 w-full",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-3xl font-bold",
                      children: "Tasks",
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(n.TabsHeader, {
                        children: ["All Tasks", "started", "completed"].map(
                          (e, s) =>
                            (0, a.jsx)(n.Tab, { value: e, children: e }, s)
                        ),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(n.TabsBody, {
                  animate: { mount: { y: 0 }, unmount: { y: 250 } },
                  children: (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 py-12 ",
                    children: [
                      (null == s ? void 0 : s.data) &&
                        (null == s
                          ? void 0
                          : s.data.map((e) =>
                              (0, a.jsx)(
                                n.TabPanel,
                                {
                                  value: "All Tasks",
                                  children: (0, a.jsx)(
                                    c,
                                    {
                                      info: e,
                                      refetch: l,
                                      handleTaskStatus: r,
                                      handleDelete: d,
                                    },
                                    null == e ? void 0 : e._id
                                  ),
                                },
                                null == e ? void 0 : e._id
                              )
                            )),
                      (null == s ? void 0 : s.data) &&
                        (null == s
                          ? void 0
                          : s.data.map((e) =>
                              (0, a.jsx)(
                                n.TabPanel,
                                {
                                  value: null == e ? void 0 : e.status,
                                  children: (null == e ? void 0 : e.status)
                                    ? (0, a.jsx)(
                                        c,
                                        { info: e, handleTaskStatus: r },
                                        null == e ? void 0 : e._id
                                      )
                                    : (0, a.jsx)(m, {}),
                                },
                                null == e ? void 0 : e._id
                              )
                            )),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var p = u;
    },
    56707: function (e, s, l) {
      var a = l(85893),
        t = l(67294),
        n = l(59335),
        r = l(41664),
        i = l.n(r),
        d = l(66205);
      let o = () => {
        let [e, s] = (0, t.useState)(!1),
          { logOut: l, user: r } = (0, t.useContext)(d.V);
        (0, t.useEffect)(() => {
          window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && s(!1)
          );
        }, []);
        let o = (0, a.jsxs)("ul", {
          className:
            "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",
          children: [
            (0, a.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, a.jsx)(i(), {
                href: "/",
                className: "flex items-center",
                children: "Home",
              }),
            }),
            (0, a.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, a.jsx)(i(), {
                href: "/addTask",
                className: "flex items-center",
                children: "Add Tasks",
              }),
            }),
            (0, a.jsx)(n.Typography, {
              as: "li",
              variant: "small",
              color: "blue-gray",
              className: "p-1 font-normal",
              children: (0, a.jsx)(i(), {
                href: "/AllTasks",
                className: "flex items-center",
                children: "All Tasks",
              }),
            }),
          ],
        });
        return (0, a.jsxs)(n.Navbar, {
          className: "mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4",
          children: [
            (0, a.jsxs)("div", {
              className:
                "container mx-auto flex items-center justify-between text-blue-gray-900",
              children: [
                (0, a.jsx)(n.Typography, {
                  as: "a",
                  href: "/",
                  variant: "small",
                  className:
                    "mr-4 text-2xl text-blue-500 cursor-pointer py-1.5 font-bold",
                  children: (0, a.jsx)("span", { children: "Task Handler" }),
                }),
                (0, a.jsx)("div", {
                  className: "hidden lg:block",
                  children: o,
                }),
                (0, a.jsx)("div", {
                  children: (null == r ? void 0 : r.email)
                    ? (0, a.jsx)(i(), {
                        href: "/",
                        children: (0, a.jsx)(n.Button, {
                          onClick: () => l(),
                          variant: "gradient",
                          size: "sm",
                          className: "hidden lg:inline-block mr-2",
                          children: (0, a.jsx)("span", { children: "LogOut" }),
                        }),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(i(), {
                            href: "/login",
                            children: (0, a.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "hidden lg:inline-block mr-2",
                              children: (0, a.jsx)("span", {
                                children: "SignIn",
                              }),
                            }),
                          }),
                          (0, a.jsx)(i(), {
                            href: "/signUp",
                            children: (0, a.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "hidden lg:inline-block ",
                              children: (0, a.jsx)("span", {
                                children: "SignUp",
                              }),
                            }),
                          }),
                        ],
                      }),
                }),
                (0, a.jsx)(n.IconButton, {
                  variant: "text",
                  className:
                    "ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",
                  ripple: !1,
                  onClick: () => s(!e),
                  children: e
                    ? (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        className: "h-6 w-6",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      })
                    : (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: (0, a.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M4 6h16M4 12h16M4 18h16",
                        }),
                      }),
                }),
              ],
            }),
            (0, a.jsxs)(n.MobileNav, {
              open: e,
              children: [
                o,
                (0, a.jsx)("div", {
                  children: (null == r ? void 0 : r.email)
                    ? (0, a.jsx)(i(), {
                        href: "/",
                        children: (0, a.jsx)(n.Button, {
                          onClick: () => l(),
                          variant: "gradient",
                          size: "sm",
                          className: "mb-2 ",
                          children: (0, a.jsx)("span", { children: "LogOut" }),
                        }),
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(i(), {
                            href: "/login",
                            children: (0, a.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "mb-2 mr-3",
                              children: (0, a.jsx)("span", {
                                children: "SignIn",
                              }),
                            }),
                          }),
                          (0, a.jsx)(i(), {
                            href: "/signUp",
                            children: (0, a.jsx)(n.Button, {
                              variant: "gradient",
                              size: "sm",
                              className: "mb-2",
                              children: (0, a.jsx)("span", {
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
      s.Z = o;
    },
    11772: function (e, s, l) {
      var a = l(77837),
        t = l(67294),
        n = l(66205);
      let r = (e) => {
        let { user: s } = (0, t.useContext)(n.V),
          { data: l = [], refetch: r } = (0, a.a)({
            queryKey: ["taskInfo", null == s ? void 0 : s.email],
            queryFn: () =>
              fetch(
                "https://task-management-server-sooty.vercel.app/allTasks?email=".concat(
                  null == s ? void 0 : s.email
                ),
                {
                  headers: {
                    authorization: "bearer ".concat(
                      localStorage.getItem("accessToken")
                    ),
                  },
                }
              ).then((e) => e.json()),
          });
        return [l, r];
      };
      s.Z = r;
    },
  },
]);
