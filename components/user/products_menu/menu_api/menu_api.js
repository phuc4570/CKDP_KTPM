const products_menuService = require("../products_menuService");
const qs = require("qs");
const Paginator = require("paginator");

exports.getProductPage = async (req, res) => {
  // Arguments are `per_page` and `length`. `per_page` changes the number of
  // results per page, `length` changes the number of links displayed.
  let paginator = new Paginator(3, 3);

  //name filter
  const { name: nameFilter } = req.query;
  let products = [];

  if (nameFilter) {
    products = await products_menuService.filter(nameFilter);
  } else products = await products_menuService.getAll();
  //sort by price
  const { sort, ...withoutSort } = req.query;
  if (sort == "low") {
    products.sort((a, b) => a.PRICE - b.PRICE);
  } else if (sort == "high") {
    products.sort((a, b) => b.PRICE - a.PRICE);
  }
  // Arguments are `total_results` and `current_page`. I hope these are self
  // explanatory.
  const { page: curPage } = req.query;

  let pagination_info = paginator.build(Object.keys(products).length, curPage);

  products = await products_menuService.getLimit(
    products,
    pagination_info.first_result,
    pagination_info.last_result
  );
  return res.status(200).json({
    products: products,
    pagination_info: pagination_info,
  });
};
