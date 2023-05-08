const globalVar = require("../../../routes/globalVar");
const products_menuService = require("./products_menuService");
const qs = require("qs");

exports.products_menu = async (req, res) => {
  if (isLogin !== 2) {
    if (isLogin === 1) res.redirect("/admin");
    res.redirect("/");
  }
  const { name: nameFilter } = req.query;
  let products = [];
  const { sort, ...withoutSort } = req.query;
  if (sort) {
    products = await products_menuService.filter(nameFilter);
    products = await products_menuService.sort(sort);
  } else if (nameFilter) {
    products = await products_menuService.filter(nameFilter);
  } else products = await products_menuService.getAll();

  let products_menu_Com = await products_menuService.getCategory("Cơm");
  let products_menu_Mi = await products_menuService.getCategory("Mì");
  let products_menu_Nuoc = await products_menuService.getCategory("Nước");
  let products_menu_Khac = await products_menuService.getCategory("Khác");

  res.render("user/products_menu/menu", {
    products,
    products_menu_Com,
    products_menu_Mi,
    products_menu_Nuoc,
    products_menu_Khac,
    agent,
    layout: "user_layout",
    originalUrl: `${req.baseUrl}/products_menu?${qs.stringify(withoutSort)}`,
  });
};
