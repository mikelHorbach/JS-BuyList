$(function() {
    var productCode = $(".maketProduct").html();
    var productInSecondColumnCode = $(".maketSecondColumnProduct").html();
    var listInFirstColumn = $(".products");
    var listInSecondColumnForNotBought = $(".unpurchasedProducts");
    var listInSeondColumnForBought = $(".purchasedProducts");


function addItem(item) {
    item = item.trim();
    if (item === "") return;

    var node = $(productCode);
    var count = 1;
    var countText = node.find(".bl-label");
    var node2 = $(productInSecondColumnCode);

    node.find(".ellipseButton").text(item);
    node.find(".bl-label").text(count);
    node2.find(".productWasBought").text(item);
    node2.find(".amountOfProducts").text(count);

    node.find(".buttonDelete").click(function () {
        node.slideUp('slow', function () {
            node.remove();
        });
        node2.remove();
    });

    // node.find(".bl-minus").attr("class","bl-minus-2");
    node.find(".bl-minus").click(function () {
        count -= 1;
        if (count == 0) count = 1;
        // if (count == 1) {
        //     $(this).attr("class","bl-minus-2");
        //
        // }

        countText.text(count);
        node2.find(".amountOfProducts").text(count);
    });

    node.find(".bl-plus").click(function () {
        count += 1;
        // if(node.find(".bl-minus-2")) {
        //     node.find(".bl-minus-2").attr("class", "bl-minus");
        //     node.find(".bl-minus").click(function () {
        //         count--;
        //         if (count == 0) count = 1;
        //         if (count == 1) {
        //             $(this).attr("class", "bl-minus-2");
        //
        //         }
        //
        //
        //         countText.text(count);
        //         node2.find(".amountOfProducts").text(count);
        //     });
        // }

        if (count == 1000) count = 999;
        countText.text(count);
        node2.find(".amountOfProducts").text(count);
    });

    node.find(".buttonBought").click(function () {

        if($(this).text()=="Куплено"){
            node.find(".bl-plus").hide();
            node.find(".bl-minus").hide();
            node.find(".buttonDelete").hide();
            $(this).text("Не куплено");
            node.find(".ellipseButton").attr("style","text-decoration:line-through;");
            node2.find(".productWasBought").attr("style","text-decoration:line-through;");
            node2.find(".amountOfProducts").attr("style","text-decoration:line-through;");
            node2.remove();
            listInSeondColumnForBought.append(node2);
        }
        else {
            node.find(".bl-plus").show();
            node.find(".bl-minus").show();
            node.find(".buttonDelete").show();
            $(this).text("Куплено");
            node.find(".ellipseButton").attr("style","");
            node2.find(".productWasBought").attr("style","");
            node2.find(".amountOfProducts").attr("style","");
            listInSecondColumnForNotBought.append(node2);
        }




    });

    listInFirstColumn.append(node);
    listInSecondColumnForNotBought.append(node2);
    }


    $(".buttonAdd").click(function () {
        addItem($(".inputField").val());
        $(".inputField").val("");
        $(".inputField").focus();
    });

    addItem("Ковбаса");
    addItem("Масло");
    addItem("Хліб");

})