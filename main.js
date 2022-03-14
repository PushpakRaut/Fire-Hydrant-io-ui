const navbar = document.querySelector('.navbar');
const nav_links = document.querySelector('.nav-links-sm');
const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.line');
const product_tab = document.querySelector('.products');
const product_menu = document.querySelector('.product-hide-menu');
const product_label = document.querySelector('.product-label');
const resource_tab = document.querySelector('.resources');
const resource_menu = document.querySelector('.resource-hide-menu');
const resource_label = document.querySelector('.resource-label');
const company_tab = document.querySelector('.company');
const company_menu = document.querySelector('.company-hide-menu');
const company_label = document.querySelector('.company-label');
const product_tab_xl = document.querySelector('.products-xl');
const product_menu_xl = document.querySelector('.products-xl-menu');
const product_label_xl = document.querySelector('.product-label');
const resource_tab_xl = document.querySelector('.resources-xl');
const resource_menu_xl = document.querySelector('.resources-xl-menu');
const resource_label_xl = document.querySelector('.resource-label');
const company_tab_xl = document.querySelector('.company-xl');
const company_menu_xl = document.querySelector('.company-xl-menu');
const company_label_xl = document.querySelector('.company-label');


let showMenu = false;


hamburger.addEventListener('click', toggleHamMenu);
product_tab.addEventListener('click', toggleProductMenu);
resource_tab.addEventListener('click', toggleResourceMenu);
company_tab.addEventListener('click', toggleCompanyMenu);
product_tab_xl.addEventListener('click', toggleProductMenuXL);
resource_tab_xl.addEventListener('click', toggleResourceMenuXL);
company_tab_xl.addEventListener('click', toggleCompanyMenuXL);



function toggleHamMenu(){
    if(!showMenu){
        
        line.classList.add('open');
        navbar.style.borderBottom = 'none';
        nav_links.classList.add('open');
        showMenu = true;
        
    } else {
        
        line.classList.remove('open');
        navbar.style.borderBottom = '0.5px solid rgb(221, 221, 221)';
        nav_links.classList.remove('open');
        showMenu = false;
    }
}
function toggleProductMenu(){
    if(!showMenu){
        
        products_menu.classList.add('open');
        products_label.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        products_menu.classList.remove('open');
        products_label.style.color = '#000';

        showMenu = false;
    }
}
function toggleResourceMenu(){
    if(!showMenu){
        
        resource_menu.classList.add('open');
        resource_label.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        resource_menu.classList.remove('open');
        resource_label.style.color = '#000';

        showMenu = false;
    }
}
function toggleCompanyMenu(){
    if(!showMenu){
        
        company_menu.classList.add('open');
        company_label.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        company_menu.classList.remove('open');
        company_label.style.color = '#000';

        showMenu = false;
    }
}

function toggleProductMenuXL(){
    if(!showMenu){
        
        product_menu_xl.classList.add('open');
        company_menu_xl.classList.remove('open');
        resource_menu_xl.classList.remove('open');
        product_label_xl.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        product_menu_xl.classList.remove('open');
        product_label_xl.style.color = '#000';

        showMenu = false;
    }
}
function toggleResourceMenuXL(){
    if(!showMenu){
        
        resource_menu_xl.classList.add('open');
        company_menu_xl.classList.remove('open');
        product_menu_xl.classList.remove('open');
        resource_label_xl.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        resource_menu_xl.classList.remove('open');
        resource_label_xl.style.color = '#000';

        showMenu = false;
    }
}
function toggleCompanyMenuXL(){
    if(!showMenu){
        company_menu_xl.classList.add('open');
        resource_menu_xl.classList.remove('open');
        product_menu_xl.classList.remove('open');
        company_label_xl.style.color = '#220e6d';
        
        showMenu = true;
        
    } else {
        company_menu_xl.classList.remove('open');
        company_label_xl.style.color = '#000';

        showMenu = false;
    }
}

