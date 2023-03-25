'use strict';

const titleClickHandler = function(event){
  console.log('Link was clicked!');
  console.log(event);

  event.preventDefault();

  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks) { activeLink.classList.remove('active'); }
  /* [DONE] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.active');
  for(let activeArticle of activeArticles) { activeArticle.classList.remove('active'); }
  /* [DONE] get 'href' attribute from the clicked link */
  const hrefValue = clickedElement.getAttribute('href');
  console.log('href: ', hrefValue);
  /* [DONE] find the correct article using the selector (value of 'href' atribute) */
  const articleClicked = document.querySelector(hrefValue);
  /* [DONE] add class 'active' to the correct article */
  articleClicked.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optArticleTagsListSelector = '.tags.list';

function generateTitleLinks(customSelector = ''){
  let html = '';
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  //console.log('tytuł' + optTitleListSelector);
  titleList.innerHTML = '';
  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  for(let article of articles) {
    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /*  [DONE]  get the title from the title element */
    /*  [DONE]  create HTML of the link */
    const linkHTML = '<li><a href = "#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /*  [DONE]  insert link into titleList */
    //titleList.innerHTML = titleList.innerHTML + linkHTML;
    //titleList.insertAdjacentHTML("beforeend", linkHTML );
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();

//---------------GENERATE TAGS---------------//

function generateTags(){
  /* [NEW] create a new variable allTags with an empty OBJECT */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles) {
    /* find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + tagHTML + ' ';
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]){
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
        /* [NEW] add generated code to allTags array */
        //allTags.push(tagHTML);
      } else {
        allTags[tag]++;
      }


      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optArticleTagsListSelector);
  /* [NEW] add html from allTags to tagList */
  //tagList.innerHTML = allTags.join(' ');

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a href="#tag-' + tag + '('+ allTags[tag] + ')">' + tag + ' ('+ allTags[tag] + ')' + '</a></li>';
    /* [NEW] END LOOP: for each tag in allTags: */
  }
  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;


  console.log(allTags);
  console.log('all tags: ' + allTags);
  console.log('tag2: ' + allTagsHTML);
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('tag was clicked' + clickedElement);
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log('tag href: ' + href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag: ' + tag);
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(let activeTag of activeTags){
    /* remove class active */
    activeTag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for(let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const clickTagLink = document.querySelectorAll('.list.list-horizontal a');
  console.log('link: ' + clickTagLink);
  /* START LOOP: for each link */
  for(let singleClickTagLink of clickTagLink) {
    /* add tagClickHandler as event listener for that link */
    singleClickTagLink.addEventListener('click', tagClickHandler);
    console.log(singleClickTagLink);
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();


//---------------GENERATE AUTHORS---------------//


function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles) {
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    let html = '';
    const authorName = article.getAttribute('data-author');
    const authorHTML = '<a href=#author-' + authorName + '">' + authorName + '</a>';
    html = html + authorHTML;
    authorWrapper.innerHTML = html;
    console.log('imie autora: ' + authorName);
    console.log('html: ' + authorHTML);
  }
}
generateAuthors();

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('authorwas clicked' + clickedElement);
  const authorHref = clickedElement.getAttribute('href');
  console.log('author href: ' + authorHref);
  const author = authorHref.replace('#author-', '');
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  for(let activeAuthor of activeAuthors) {
    activeAuthor.classList.remove('active');
  }
  const authorRepeats = document.querySelectorAll('a[href="' + authorHref + '"]');
  for(let authorRepeat of authorRepeats) {
    authorRepeat.classList.add('active');
  }
  generateTitleLinks('[data-author~="' + author + '"]');
}

function addClickListenersToAuthors() {
  const clickAuthor = document.querySelectorAll(' .post-author a');
  console.log('link-click: ' + clickAuthor);
  for(let singleClickAuthor of clickAuthor) {
    singleClickAuthor.addEventListener('click', authorClickHandler);
    console.log(singleClickAuthor);
  }
}

addClickListenersToAuthors();




