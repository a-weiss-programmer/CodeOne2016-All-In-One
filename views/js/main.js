/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
        'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        .when("/budget", {templateUrl: "partials/budget.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        .when("/addToDo", {templateUrl: "partials/createItem.html", controller: "PageCtrl"})
        .when("/services-two", {templateUrl: "partials/services-two.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })

    // Stops message notification when clicked
    $('.dropdown-toggle.animated.animate-new-message.tada').on('click', function() {
        $(this).removeClass("animated animate-new-message");
    });
    $('.btn.btn-primary').on('click', function() {
        var text1 = document.getElementById('input1').value;
        var text2 = document.getElementById('input2').value;
        var text3 = document.getElementById('input3').value;
        var text4 = document.getElementById('input4').value;
       $('.panel.panel-default.panel-todo.text-center ul').append('<li class="list-group-item animated bounceInUp animate-content-body">' + text1 + ': ' 
                  + text4 + ' Priority: ' + text2 + ' Due Date: ' + text3 + '</li>');
    });
});
