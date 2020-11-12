/* eslint-disable no-undef */
let len = JSON.parse(localStorage.getItem('lib')).length;
document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();
    });
createList();
function createItem(number) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.id = number;
    bookList.appendChild(item);
    
    const link = document.createElement('a');
    link.classList.add('link');
    link.textContent = JSON.parse(localStorage.getItem('lib'))[number].title;
    item.appendChild(link);
    
    const buttonEdit = document.createElement('a');
    buttonEdit.classList.add('button');
    buttonEdit.textContent = 'Edit';
    item.appendChild(buttonEdit);
}
function createList() {
    for (let i = 0; i < len; i++) {
        createItem(i);
    }
}

const links = document.querySelectorAll('.link');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        links[i].href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html?id=${i}#preview`);
        pagePreview.style.display = 'block';
        bookTitle.textContent = JSON.parse(localStorage.getItem('lib'))[i].title;
        bookAuthor.textContent = JSON.parse(localStorage.getItem('lib'))[i].author;
        bookImage.textContent = JSON.parse(localStorage.getItem('lib'))[i].image;
        bookPlot.textContent = JSON.parse(localStorage.getItem('lib'))[i].plot;
        homePage.style.display = 'none';
    });
}

const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        buttons[i].href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html?id=${i}#edit`);
        pageEdit.style.display = 'block';
        homePage.style.display = 'none';        
        
        titleEdit.value = JSON.parse(localStorage.getItem('lib'))[i].title;
        authorEdit.value = JSON.parse(localStorage.getItem('lib'))[i].author;
        imageEdit.value = JSON.parse(localStorage.getItem('lib'))[i].image;
        plotEdit.value = JSON.parse(localStorage.getItem('lib'))[i].plot;


        titleEdit.addEventListener('focus', function() {
            titleEdit.value = '';
        });
        authorEdit.addEventListener('focus', function() {
            authorEdit.value = '';
        });
        imageEdit.addEventListener('focus', function() {
            imageEdit.value = '';
        });
        plotEdit.addEventListener('focus', function() {
            plotEdit.value = '';
        });
        titleEdit.addEventListener('blur', function() {
            library[i].title = titleEdit.value;
        });
        authorEdit.addEventListener('blur', function() {
            library[i].author = authorEdit.value;
        });
        imageEdit.addEventListener('blur', function() {
            library[i].image = imageEdit.value;
        });
        plotEdit.addEventListener('blur', function() {
            library[i].plot = plotEdit.value;
        });
    }); 
}

const magicSec = 300;

buttonSave.addEventListener('click', function(e) {
    e.preventDefault();
    buttonSave.href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html`);
    localStorage.setItem('lib', JSON.stringify(library));
    pageEdit.style.display = 'none';
    homePage.style.display = 'block';
    setTimeout(function() {
        alert('Book successfully upload');
    }, magicSec);
});
buttonClose.addEventListener('click', function(e) {
    e.preventDefault();
    buttonClose.href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html`);
    pageEdit.style.display = 'none';
    homePage.style.display = 'block';
    setTimeout(function() {
        alert('Discard changes?');
    }, magicSec);
});

addButton.addEventListener('click', function() {
    addButton.href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html#add`);
    homePage.style.display = 'none';
    pageAdd.style.display = 'block';
    len++;
});

let newBook = {};
titleAdd.addEventListener('blur', function() {
    newBook.title = titleAdd.value;
});
authorAdd.addEventListener('blur', function() {
    newBook.author = authorAdd.value;
});
imageAdd.addEventListener('blur', function() {
    newBook.image = imageAdd.value;
});
plotAdd.addEventListener('blur', function() {
    newBook.plot = plotAdd.value;
});
library.push(newBook);

buttonSaveChanges.addEventListener('click', function(e) {
    e.preventDefault();
    buttonSaveChanges.href = new URL(`http://127.0.0.1:5500/FL14_HW16/homework/index.html`)
    localStorage.setItem('lib', JSON.stringify(library));
    pageAdd.style.display = 'none';
    homePage.style.display = 'block';
});