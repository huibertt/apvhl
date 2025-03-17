import { articles } from './articles.js';
import { punishmentCategories } from './punishments.js';

// Recursieve functie om een lijst (en eventuele geneste lijsten) te renderen
function renderList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    if (typeof item === 'string') {
      li.innerHTML = item;
    } else if (typeof item === 'object' && item !== null) {
      // Als er een "sublist" of "list" property is, render deze recursief
      if (item.sublist && Array.isArray(item.sublist)) {
        li.appendChild(renderList(item.sublist));
      } else if (item.list && Array.isArray(item.list)) {
        li.appendChild(renderList(item.list));
      } else {
        // Mocht het object geen geneste lijst bevatten, toon dan de inhoud op een veilige manier
        li.innerHTML = JSON.stringify(item);
      }
    }
    ul.appendChild(li);
  });
  return ul;
}

function renderArticles(articlesToRender) {
  const container = document.getElementById('articles');
  container.innerHTML = ''; // Leegmaken van de container
  
  articlesToRender.forEach(article => {
    const articleEl = document.createElement('article');
    articleEl.classList.add('article');
    
    // Titel + strafcategorie (met custom tooltip)
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
    
    // Beschrijving
    if (article.description) {
      const desc = document.createElement('p');
      desc.innerHTML = article.description; // innerHTML voor HTML-tags
      articleEl.appendChild(desc);
    }
    
    // Hoofd-lijstitems (article.list) met recursieve renderList functie
    if (article.list && Array.isArray(article.list)) {
      articleEl.appendChild(renderList(article.list));
    }
    
    // Subartikelen (article.subarticles)
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
          subDesc.innerHTML = sub.description;
          subarticleEl.appendChild(subDesc);
        }
        
        if (sub.list && Array.isArray(sub.list)) {
          subarticleEl.appendChild(renderList(sub.list));
        }
        articleEl.appendChild(subarticleEl);
      });
    }
    
    // Voeg het artikel toe aan de container
    container.appendChild(articleEl);
  });
}

// Eerst alle artikelen renderen
renderArticles(articles);

// Live zoekfunctionaliteit
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  
  const filteredArticles = articles.filter(article => {
    const inLabel = article.label.toLowerCase().includes(query);
    const inDescription = article.description && article.description.toLowerCase().includes(query);
    let inList = false;
    if (article.list && Array.isArray(article.list)) {
      inList = article.list.some(item => {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(query);
        } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
          return item.sublist.some(nestedItem => nestedItem.toLowerCase().includes(query));
        }
      });
    }
    
    let inSubarticles = false;
    if (article.subarticles) {
      inSubarticles = article.subarticles.some(sub => {
        const subLabel = sub.label.toLowerCase().includes(query);
        const subDescription = sub.description && sub.description.toLowerCase().includes(query);
        let subList = false;
        if (sub.list && Array.isArray(sub.list)) {
          subList = sub.list.some(item => {
            if (typeof item === 'string') {
              return item.toLowerCase().includes(query);
            } else if (typeof item === 'object' && item.sublist && Array.isArray(item.sublist)) {
              return item.sublist.some(nestedItem => nestedItem.toLowerCase().includes(query));
            }
          });
        }
        return subLabel || subDescription || subList;
      });
    }
    
    return inLabel || inDescription || inList || inSubarticles;
  });
  
  renderArticles(filteredArticles);
});
