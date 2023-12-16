// JavaScript Document

"use strict"

document.addEventListener('DOMContentLoaded', function() {
     subMenu();
     currentPage();
});

function currentPage() {
     // Retrieve the page being viewed
     const current = document.querySelector(".active_tab");

     // Remove the link and add a title to current page
     current.removeAttribute("href");
     current.setAttribute('title', "You're already here");
}

function subMenu() {
     /* 
          Loop through all dropdown buttons to toggle between hiding and showing its dropdown content 
          - This allows the user to have multiple dropdowns without any conflict 
     */
     const dropdown = document.getElementsByClassName("dropdown-btn");

     for (var i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", function() {

               this.classList.toggle("active");
               let dropdownContent = this.nextElementSibling;
			
			/* Find a way to keep submenu open when a submenu link is selected*/
               if (dropdownContent.style.display === "block" && dropdown.getElementById("pg1")) {
				dropdownContent.style.display = "none";
               } else {
                    dropdownContent.style.display = "block";
               }
          });
     }
}