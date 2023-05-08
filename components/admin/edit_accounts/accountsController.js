const globalVar = require("../../../routes/globalVar");
const accounts = require("./accountsService");
exports.account = async (req, res) => {
  if (isLogin !== 1) {
    if (isLogin === 2) res.redirect("/user");
    res.redirect("/");
  }
  let list_accounts = await accounts.getAll();
  console.log(list_accounts);
  res.render("admin/edit_accounts/accounts", {
    list_accounts,
    agent,
    layout: "admin_layout" });
};

exports.details = async (req, res, next) => {
  const { id:id } = req.params;
  console.log(req.params);
  const detail = await accounts.getId(id);
  res.render('admin/edit_accounts/details', {
    detail,
    agent,
    layout: "admin_layout"});
};

exports.delete = async (req, res, next) => {
  const { accountId } = req.params;
  await accounts.delete(accountId);
  res.render('admin/edit_accounts/details',{
    agent,
    layout: "admin_layout"});
};

exports.save = async (req, res, next) => {
  const { accountId } = req.params;
  await accounts.delete(accountId);
  res.render('admin/edit_accounts/details',{
    agent,
    layout: "admin_layout"});
};