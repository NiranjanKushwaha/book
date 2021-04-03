var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html",
        controller: "homeCtrl",
       })
    .when("/books", {
      templateUrl: "books.html",
      controller: "bookCtrl",
    })
    .when("/cart", {
        templateUrl: "myCart.html",
        controller: "cartCtrl"
    });
});

app.factory("bookService", function () {
    let books = [{
            title: "Jane Eyre",
            author: "C. Bronte",
            year: 1847,
            source: "imgs/one.jpg",
        },
        {
            title: "Rebecca",
            author: "C. Douglas",
            year: 1837,
            source: "imgs/two.jpg",
        },
        {
            title: "The Stranger",
            author: "A. Camus",
            year: 1942,
            source: "imgs/three.jpg",
        },
        {
            title: "Oliver Twist",
            author: "C. Dickens",
            year: 1846,
            source: "imgs/four.jpg",
        },
        {
            title: "Stranger in a Strange Land",
            author: "R. Heinlein",
            year: 1809,
            source: "imgs/five.jpg",
        },
    ];

    return {
        getBooks: function () {
            return books;
        }
    }
})

app.factory("cartService", function () {
    let cartbooks = [];
    return {
        getCart : function () {
            return cartbooks;
        },
        addToCart : function (book) {
            cartbooks.push(book);
        },
        buy : function (book) {
            alert("thanks for purchasing", book.title);
            for (var i = 0; i < cartbooks.length; i++) {
                if (cartbooks[i] === book) {
                    cartbooks.splice(i, 1);
                }

            }
        }
    }
})

app.controller("homeCtrl", function () {
    this.quotes = [
        {
            name: "Alberto Manguel",
            quote: "Maybe this is why we read, and why in moments of darkness we return to books: to find words for what we already know."
        },
        {
            name: "Annie Dillard",
            quote: "She read books as one would breathe air, to fill up and live."
        },
        {
            name: "Betty Smith",
            quote: "The world was hers for the reading."
        },
        {
            name: "Jhumpa Lahiri",
            quote: "That's the thing about books. They let you travel without moving your feet."
        },
        {
            name: "Malala Yousafzai",
            quote: "Let us remember: One book, one pen, one child, and one teacher can change the world."
        },
        {
            name: "Mark Haddon",
            quote: "Reading is a conversation. All books talk. But a good book listens as well."
        },
        {
            name: "Paul Sweeney",
            quote: "You know you've read a good book when you turn the last page and feel a little as if you have lost a friend."

        },
        {
            name: "Beverly Cleary​",
            quote: "If you don’t see the book you want on the shelf, write it."
        },
        {
            name: "Celeste Ng",
            quote: "The story is truly finished — and meaning is made — not when the author adds the last period, but when the reader enters."
        },
        {
            name: "Colson Whitehead",
            quote: "What isn't said is as important as what is said."
        },
    ]
})

app.controller("bookCtrl", function ($scope, bookService,cartService) {
    $scope.Books = bookService.getBooks();
    $scope.addCart = function (book) {
        cartService.addToCart(book);
        alert("added to cart successfully");
     }

});


app.controller("cartCtrl", function ($scope,cartService) {
    $scope.cart = cartService.getCart();
    $scope.cartLength = $scope.cart.length;
    $scope.buy = function (book) {
        cartService.buy(book);
        $scope.cartLength = $scope.cart.length;
    }
    // $scope.myColor = "";
    // let colors = ["#6ab04c", "#130f40", "#22a6b3", "#f9ca24", "#535c68", "#badc58", "#be2edd"];
    // $scope.myColor = "green";
    // setInterval(()=>{
    //     for (var i = 0; i < colors.length; i++) {
    //          if (i ===colors.length - 1) {
    //              i = 0;
    //           }
    //          else {
    //             $scope.myColor = colors[i];
    //           }
    //     }
    // },500)

})




