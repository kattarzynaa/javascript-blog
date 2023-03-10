'use strict'
{
/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);

    event.preventDefault();

    const clickedElement = this;

    

    /* [DONE] remove class 'active' from all article links */

    const activeLinks = document.querySelectorAll('.titles a.active');
     for(let activeLink of activeLinks) {
        activeLink.classList.remove('active');
     }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);

    clickedElement.classList.add('active');
    

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');
    for(let activeArticle of activeArticles) {
       activeArticle.classList.remove('active');
    } 

    /* [DONE] get 'href' attribute from the clicked link */

    const hrefValue = clickedElement.getAttribute("href");
    console.log('href: ', hrefValue);

    /* [DONE] find the correct article using the selector (value of 'href' atribute) */

    const articleClicked = document.querySelector(hrefValue);
    
    /* [DONE] add class 'active' to the correct article */
    
        articleClicked.classList.add('active');
    
    }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

  const generateTitleLinks = function(){

  /* remove contents of titleList */

  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
}

generateTitleLinks();

}