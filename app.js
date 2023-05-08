const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./components/user/index");
const adminRouter = require("./components/admin/index");
const globalVar = require("./routes/globalVar");
const hbs = require("express-handlebars");
const app = express();

// view engine setup
app.engine('.hbs',
    hbs.engine({
        defaultLayout: 'admin_layout.hbs',
          layoutsDir: 'views',
          extname: '.hbs',
          helpers: {
            when: function(operand_1, operator, operand_2, options) {
              var operators = {
                'eq': function(l,r) { return l == r; },
                'noteq': function(l,r) { return l != r; },
                'gt': function(l,r) { return Number(l) > Number(r); },
                'or': function(l,r) { return l || r; },
                'and': function(l,r) { return l && r; },
                '%': function(l,r) { return (l % r) === 0; },
                'sum': function(l,r) { return l + r; }
              }
                  , result = operators[operator](operand_1,operand_2);

              if (result) return options.fn(this);
              else  return options.inverse(this);
            }
        }
    }
));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/user", usersRouter);

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
  res.render("error", { layout: false });
});

module.exports = app;
