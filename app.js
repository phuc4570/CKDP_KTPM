const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./components/products/index");
const userRouter = require("./components/user/index");
const edit_productsRouter = require("./components/edit_products/index");
const statisticRouter = require("./components/statistic/index");
const accountsRouter = require("./components/accounts/index");
const products_menuRouter = require("./components/products_menu/index");
const contactRouter = require("./components/contact/index");
const faqRouter = require("./components/faq/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/edit-products", edit_productsRouter);
app.use("/statistic", statisticRouter);
app.use("/accounts", accountsRouter);
app.use("/products_menu", products_menuRouter);
app.use("/contact", contactRouter);
app.use("/faq", faqRouter);

//app.use("/", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error" ,{layout: false});
});

module.exports = app;