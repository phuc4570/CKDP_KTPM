const productsRepository = require("./edit_productsRepository");

exports.getAll = () => {
    return productsRepository.getAll();
};

exports.filter = (name) => {
    return productsRepository.filter(name);
};

exports.getId = (id) => {
    return productsRepository.getId(id);
};

exports.delete = (id) => {
    return productsRepository.delete(id);
};

exports.saveEdit = (id) => {
    return productsRepository.saveEdit(id);
};

exports.add = (product) => {
    return productsRepository.add(product);
};

exports.nextId = () => {
    return productsRepository.nextId();
}


exports.getAllCategory = () => {
    return productsRepository.getAllCategory();
}

exports.getCategory = (category) => {
    return productsRepository.getCategory(category);
}

exports.getSearch = (category) => {
    return productsRepository.getSearch(category);
}

exports.getNameSorted = (category, sort, offset, limit) => {
    if(sort == 'asc')
        return productsRepository.getNameAsc(category, offset, limit);
    return productsRepository.getNameDesc(category, offset, limit);
}

exports.getPriceSorted = (category, sort, offset, limit) => {
    if(sort == 'asc')
        return productsRepository.getPriceAsc(category, offset, limit);
    return productsRepository.getPriceDesc(category, offset, limit);
}

exports.getLimitProducts = (category, offset, limit) => {
    return productsRepository.getLimitProducts(category, offset, limit);
}