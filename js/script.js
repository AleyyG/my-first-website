//html üzerindekilere class isimleri ve idler ile ulaşılır
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar =  document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

const homeButton = document.querySelector("#home_btn");
const menuButton = document.querySelector("#menu_btn");
const productsButton = document.querySelector("#products_btn");
const aboutButton = document.querySelector("#about_btn");
const reviewButton = document.querySelector("#review_btn");
const contactButton = document.querySelector("#contact_btn");
const blogsButton = document.querySelector("#blogs_btn");

const homeSection = document.querySelector("#home");
const menuSection = document.querySelector("#menu");
const productsSection = document.querySelector("#products");
const aboutSection = document.querySelector("#about");
const reviewSection = document.querySelector("#review");
const contactSection = document.querySelector("#contact");
const blogsSection = document.querySelector("#blogs");

    document.addEventListener("click",function(e){
        if(e.composedPath().includes(homeButton) || e.composedPath().includes(homeSection))
            homeButton.classList.add("active");
        else
            homeButton.classList.remove("active");
    });

    document.addEventListener("click",function(e){
        if(e.composedPath().includes(menuButton) || e.composedPath().includes(menuSection))
            menuButton.classList.add("active");
        else
            menuButton.classList.remove("active");
    });

    document.addEventListener("click",function(e){
        if(e.composedPath().includes(productsButton) || e.composedPath().includes(productsSection))
            productsButton.classList.add("active");
        else
            productsButton.classList.remove("active"); 
    });
    document.addEventListener("click",function(e){
        if(e.composedPath().includes(aboutButton) || e.composedPath().includes(aboutSection))
            aboutButton.classList.add("active");
        else
            aboutButton.classList.remove("active");
    });
    document.addEventListener("click",function(e){
        if(e.composedPath().includes(reviewButton) || e.composedPath().includes(reviewSection))
            reviewButton.classList.add("active");
        else
            reviewButton.classList.remove("active"); 
    });
    document.addEventListener("click",function(e){
        if(e.composedPath().includes(contactButton) || e.composedPath().includes(contactSection))
            contactButton.classList.add("active");
        else
            contactButton.classList.remove("active");
    });
    document.addEventListener("click",function(e){
        if(e.composedPath().includes(blogsButton) || e.composedPath().includes(blogsSection))
            blogsButton.classList.add("active");
        else
            blogsButton.classList.remove("active");
    });

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm))
        searchForm.classList.remove("active");
    });
});

cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem))
        cartItem.classList.remove("active");
    });
});

menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar))
        navbar.classList.remove("active");
    });
});
