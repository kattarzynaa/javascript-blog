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
  
  /*const links = document.querySelectorAll('.titles a');

  console.log('linki: ' + links);
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }*/

  const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';
        
  const generateTitleLinks = function(){

    let html = '';

  /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log('tytuł' + optTitleListSelector);
    titleList.innerHTML = '';

  /* [DONE] for each article */

    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles) {
       
    /* [DONE] get the article id */

    const articleId = article.getAttribute("id");
    console.log('id: ', articleId);
  
    /* [DONE] find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('title: ' + articleTitle);

    /* get the title from the title element */

    /*  [DONE]  create HTML of the link */

    const linkHTML = '<li><a href = "#' + articleId + '"><span>' + articleTitle + '</span></a></li>'
      
    console.log('link: ' + linkHTML);
  
   /* insert link into titleList */

   //titleList.innerHTML = titleList.innerHTML + linkHTML;

   //titleList.insertAdjacentHTML("beforeend", linkHTML );

   html = html + linkHTML;

   //console.log(html);
    
  }

  titleList.innerHTML = html;

}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


}