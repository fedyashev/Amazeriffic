var setActiveTab = function(tab) {
  $(".tab-name span").removeClass("tab-active");
  $(tab).addClass("tab-active");
  $("main .tab-content").empty();
};

var fillTab = function (message) {
  var $content = $("<p>").text(message);
  $("main .tab-content").append($content);
}

var main = function () {
  
  "use strict";

  $(".tab-name a span").toArray().forEach(function (element) {
    $(element).on("click", function() {
      setActiveTab(element);
      if ($(element).parent().is(":nth-child(1)")) {
        fillTab("First tab");
      } else if ($(element).parent().is(":nth-child(2)")) {
        fillTab("Second tab");
      } else if ($(element).parent().is(":nth-child(3)")) {
        fillTab("Third tab");
      }
      return false;
    });
  });
};

$(document).ready(main);