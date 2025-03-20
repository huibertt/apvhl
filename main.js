import { articles } from './articles.js';
import { punishmentCategories } from './punishments.js';

function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = '';
  
  articlesToRender.forEach(article => {
    const articleEl = document.createElement('article');
    articleEl.classList.add('article');
    
    const header = document.createElement('h2');
    header.textContent = article.label;
    
    if (article.punishmentCategory) {
      const cat = article.punishmentCategory;
      const categorySpan = document.createElement('span');
      categorySpan.classList.add('punishment-category');
      categorySpan.textContent = ` (Straf categorie: ${cat})`;
      const catIndex = parseInt(cat, 10);
      categorySpan.setAttribute('data-tooltip', punishmentCategories[catIndex] || "");
      header.appendChild(categorySpan);
    }
    articleEl.appendChild(header);
    
    if (article.description) {
      const desc = document.createElement('p');
      desc.innerHTML = article.description;
      articleEl.appendChild(desc);
    }
    
    if (article.list && Array.isArray(article.list)) {
      const ul = document.createElement('ul');
      article.list.forEach(item => {
        if (typeof item === 'string') {
          const li = document.createElement('li');
          li.innerHTML = item;
          ul.appendChild(li);
        } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
          const li = document.createElement('li');
          li.classList.add('sublist-parent');
          const nestedUl = document.createElement('ul');
          item.sublist.forEach(nestedItem => {
            const nestedLi = document.createElement('li');
            nestedLi.innerHTML = nestedItem;
            nestedUl.appendChild(nestedLi);
          });
          li.appendChild(nestedUl);
          ul.appendChild(li);
        }
      });
      articleEl.appendChild(ul);
    }
    
    if (article.subarticles && Array.isArray(article.subarticles)) {
      article.subarticles.forEach(sub => {
        const subarticleEl = document.createElement('div');
        subarticleEl.classList.add('subarticle');
        
        const subHeader = document.createElement('h3');
        subHeader.textContent = sub.label;
        
        if (sub.punishmentCategory) {
          const subCat = sub.punishmentCategory;
          const subCategorySpan = document.createElement('span');
          subCategorySpan.classList.add('punishment-category');
          subCategorySpan.textContent = ` (Straf categorie: ${subCat})`;
          const subCatIndex = parseInt(subCat, 10);
          subCategorySpan.setAttribute('data-tooltip', punishmentCategories[subCatIndex] || "");
          subHeader.appendChild(subCategorySpan);
        }
        subarticleEl.appendChild(subHeader);
        
        if (sub.description) {
          const subDesc = document.createElement('p');
          subDesc.textContent = sub.description;
          subarticleEl.appendChild(subDesc);
        }
        
        if (sub.list && Array.isArray(sub.list)) {
          const subUl = document.createElement('ul');
          sub.list.forEach(subItem => {
            const subLi = document.createElement('li');
            subLi.textContent = subItem;
            subUl.appendChild(subLi);
          });
          subarticleEl.appendChild(subUl);
        }
        articleEl.appendChild(subarticleEl);
      });
    }
    
    container.appendChild(articleEl);
  });
}

renderArticles(articles);

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase().trim();
  if (!query) {
    renderArticles(articles);
    return;
  }
  const queryWords = query.split(/\s+/).filter(Boolean);
  
  const filteredArticles = articles.filter(article => {
    let textParts = [];
    if (article.label) textParts.push(article.label);
    if (article.description) textParts.push(article.description);

    if (article.list && Array.isArray(article.list)) {
      article.list.forEach(item => {
        if (typeof item === 'string') {
          textParts.push(item);
        } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
          textParts.push(item.sublist.join(" "));
        }
      });
    }
    
    if (article.subarticles && Array.isArray(article.subarticles)) {
      article.subarticles.forEach(sub => {
        if (sub.label) textParts.push(sub.label);
        if (sub.description) textParts.push(sub.description);
        if (sub.list && Array.isArray(sub.list)) {
          textParts.push(sub.list.join(" "));
        }
      });
    }
    
    const fullText = textParts.join(" ").toLowerCase();
    
    return queryWords.every(word => fullText.includes(word));
  });
  
  renderArticles(filteredArticles);
});

