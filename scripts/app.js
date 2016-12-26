var tasks = ["Закончить писать эту книгу",
             "Вывести Грейси на прогулку в парк",
             "Ответить на электронные письма",
             "Подготовиться к лекции в понедельник",
             "Обновить несколько новых задач",
             "Купить продукты"];

var setActiveTab = function(tab) {
  $(".tab-name span").removeClass("tab-active");
  $(tab).addClass("tab-active");
  $("main .tab-content").empty();
};

var fillTabOldTask = function () {
  var $taskList = $("<ul>");
  tasks.forEach(function (element) {
    $taskList.append($("<li>").text(element));
  });
  $("main .tab-content").append($taskList);
};

var fillTabNewTask = function () {
  var $taskList = $("<ul>");
  for (var i = tasks.length - 1; i >= 0; i--) {
    $taskList.append($("<li>").text(tasks[i]));
  }
  $("main .tab-content").append($taskList);
};

var addTask = function (text) {
  if (text !== "") {
    tasks.push(text);
  }
}

var fillTabAddTask = function () {
  $(".tab-content").append($("<input type=\"text\">"));
  $(".tab-content").append($("<button>").text("+"));
  
  $(".tab-content button").on("click", function (event) {
    addTask($(".tab-content input").val());
    $(".tab-content input").val("");
  });

  $(".tab-content input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      addTask($(".tab-content input").val());
      $(".tab-content input").val("");
    }
  });
};

var main = function () {
  
  "use strict";

  $(".tab-name a span").toArray().forEach(function (element) {
    $(element).on("click", function() {
      setActiveTab(element);
      if ($(element).parent().is(":nth-child(1)")) {
        fillTabNewTask();
      } else if ($(element).parent().is(":nth-child(2)")) {
        fillTabOldTask();
      } else if ($(element).parent().is(":nth-child(3)")) {
        fillTabAddTask();
      }
      return false;
    });
  });

  $(".tab-name a:nth-child(1) span").trigger("click"); 
};

$(document).ready(main);