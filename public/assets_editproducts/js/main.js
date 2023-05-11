$(document).ready(function(){
    function fetchproducts(page, size, category, namesorting, desc){
        let pageNumber = (typeof page !== 'undefined') ?  page : 0;
        let sizeNumber = (typeof size !== 'undefined') ?  size : 5;
        let selectedcategory = (typeof category !== 'undefined') ?  category : -1;
        let nameSorted = (typeof namesorting !== 'undefined') ?  namesorting: false;
        let descDirection = (typeof desc !== 'undefined') ?  desc: false;

        /**
         * Do a fetching to get data from Backend's RESTAPI
         */
        $.ajax({
            type : "GET",
            url : "/admin/api/edit_products",
            data: {
                page: pageNumber,
                size: sizeNumber,
                category: selectedcategory,
                namesorting: nameSorted,
                desc: descDirection
            },
            success: function(response){
                $('#productsTable tbody').empty();
                $.each(response.products, (i, product) => {
                    let tr_id = 'tr_' + product.id;
                    let productRow = '<tr>' +
                        '<td>' + product.ID + '</td>' +
                        '<td>' + product.NAME + '</td>' +
                        '<td>' + product.PRICE + '</td>' +
                        '<td class="text-right">' + '<a class="btn btn-sm btn-dark" href="/admin/edit_products/' + product.ID +
                        '" role="button" title="Edit products">' +
                        ' <i class="fas fa-user-cog"></i>' +
                        '</a>' + '</td>' +
                        '</tr>';
                    $('#productsTable tbody').append(productRow);
                });



                if ($('ul.pagination li').length - 2 != response.totalPages){
                    // build pagination list at the first time loading
                    $('ul.pagination').empty();
                    buildPagination(response.totalPages);
                }
            },
            error : function(e) {
                alert("ERROR: ", e);
                console.log("ERROR: ", e);
            }
        });
    }

    /**
     * Select a category for pagination & filtering
     */
    $("select").change(function() {
        let category = '-1';


        category = this.value;
        

        let namesorting = false;
        let desc = false;

        if($("#name_sorting"). prop("checked") == true){
            namesorting = true;
        }

        if($("#desc_sorting"). prop("checked") == true){
            desc = true;
        }

        // re-fetch customer list again
        fetchproducts(0, 5, category, namesorting, desc);
    });

    /**
     * Get a list of distinct salaries
     */
    function getListCategory(){
        $.ajax({
            type : "GET",
            url : "/admin/api/edit_products/category",
            success: function(response){
                $("#selected_form").empty();
                $('#selected_form').append("<option>All</option>");
                $.each(response.sort().reverse(), (i, category) => {
                    // <option>All</option>
                    let optionElement = "<option>" + category + "</option>";
                    $('#selected_form').append(optionElement);
                });
            },
            error : function(e) {
                alert("ERROR: ", e);
                console.log("ERROR: ", e);
            }
        });
    }

    /**
     * age_sorting checkbox is changed
     */
    $('#name_sorting').on('change', function() {
        if(this.checked){
            $("#desc_sorting").removeAttr("disabled");
            $("#sortingbtn").removeAttr("disabled");
        }else {
            $("#desc_sorting").attr("disabled", true);
            $("#desc_sorting").prop("checked", false);
            $("#sortingbtn").attr("disabled", true);
        }
    });

    /**
     * Click on sorting Button
     */
    $(document).on("click", "#sortingbtn", function() {
        let namesorting = false;
        let desc = false;
        let selectedCategory = getSeletedCategory();

        //get value of check boxes

        /* namesorting checkbox */
        if($("#name_sorting"). prop("checked") == true){
            namesorting = true;
        }

        /* desc checkbox */
        if($("#desc_sorting"). prop("checked") == true){
            desc = true;
        }

        // get the active index of pagination bar
        let selectedPageIndex = parseInt($("ul.pagination li.active").text()) - 1;

        // just fetch again products from SpringBoot RestAPIs when namesorting checkbox is checked
        if(namesorting){
            fetchproducts(selectedPageIndex, 5, selectedCategory, namesorting, desc); // get next page value
        }
    });

    /**
     *
     * Build the pagination Bar from totalPages
     */
    function buildPagination(totalPages){
        // Build paging navigation
        let pageIndex = '<li class="page-item"><a class="page-link">Previous</a></li>';
        $("ul.pagination").append(pageIndex);

        // create pagination
        for(let i=1; i <= totalPages; i++){
            // adding .active class on the first pageIndex for the loading time
            if(i==1){
                pageIndex = "<li class='page-item active'><a class='page-link'>"
                    + i + "</a></li>"
            } else {
                pageIndex = "<li class='page-item'><a class='page-link'>"
                    + i + "</a></li>"
            }
            $("ul.pagination").append(pageIndex);
        }

        pageIndex = '<li class="page-item"><a class="page-link">Next</a></li>';
        $("ul.pagination").append(pageIndex);
    }

    /**
     * Get the selectedSalary for filtering
     */
    function getSeletedCategory(){
        return $("select").val();
    }

    /**
     *
     * Fetching the products from SpringBoot RestAPI at the initial time
     */
    (function(){
        // get first-page at initial time
        fetchproducts(0);

        // get the distinct values of customer's salaries
        getListCategory();
    })();

    /**
     * Fetch again the customer's data from RestAPI when
     * 		having any click on pagination bar for pagination filtering and sorting
     */
    $(document).on("click", "ul.pagination li a", function() {
        let namesorting = false;
        let desc = false;
        let selectedCategory = getSeletedCategory();
        if($("#name_sorting"). prop("checked") == true){
            namesorting = true;
        }

        if($("#desc_sorting"). prop("checked") == true){
            desc = true;
        }

        let val = $(this).text();

        // click on the NEXT tag
        if(val.toUpperCase()==="NEXT"){
            let activeValue = parseInt($("ul.pagination li.active").text());
            let totalPages = $("ul.pagination li").length - 2; // -2 beacause 1 for Previous and 1 for Next
            if(activeValue < totalPages){
                let currentActive = $("li.active");
                fetchproducts(activeValue, 5, selectedCategory, namesorting, desc); // get next page value
                // remove .active class for the old li tag
                $("li.active").removeClass("active");
                // add .active to next-pagination li
                currentActive.next().addClass("active");
            }
        } else if(val.toUpperCase()==="PREVIOUS"){
            let activeValue = parseInt($("ul.pagination li.active").text());
            if(activeValue > 1){
                // get the previous page
                fetchproducts(activeValue-2, 5, selectedCategory, namesorting, desc);
                let currentActive = $("li.active");
                currentActive.removeClass("active");
                // add .active to previous-pagination li
                currentActive.prev().addClass("active");
            }
        } else {
            fetchproducts(parseInt(val) - 1, 5,  selectedCategory, namesorting, desc);
            // add focus to the li tag
            $("li.active").removeClass("active");
            $(this).parent().addClass("active");
        }
    });
});