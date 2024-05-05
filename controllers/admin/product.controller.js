const Product = require("../../models/product.model")
const filterStatusHelper = require("../../helpers/filterStatus")
const searchHelper = require("../../helpers/search")

// [GET] /admin/products
module.exports.index = async (req,res)  => {
       // tinh nang bo loc
    // let filterStatus = [
    //     { name: "Tất cả", status: "", class: "" },
    //     { name: "Hoạt động", status: "active", class: "" },
    //     { name: "Dừng hoạt động", status: "inactive", class:"" }
    // ]

    // if(req.query.status){
    //     const index = filterStatus.findIndex(item => item.status === req.query.status)
    //     filterStatus[index].class = "active"
    // } else{
    //     const index = filterStatus.findIndex(item => item.status === "")
    //     filterStatus[index].class = "active"
    // }
    const filterStatus = filterStatusHelper(req.query)

    let find = {
        deleted: false
    }

    if(req.query.status){
        find.status = req.query.status
    }

        // tinh nang search
    // let keyword = ""
    // if(req.query.keyword){
    //     keyword = req.query.keyword
    //     const regex = new RegExp(keyword, "i");
    //     find.title = regex
    // }
    const objectSearch = searchHelper(req.query)
    if(objectSearch.regex){
        find.title = objectSearch.regex
    }

    const products = await Product.find(find)

    res.render("admin/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: products,
        filterStatus: filterStatus,
        keyword: objectSearch.keyword
    })
}