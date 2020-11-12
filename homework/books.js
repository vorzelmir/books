let library = [
    {
        'title': 'title first book',
        'author': 'author first book',
        'image': 'image first book',
        'plot': 'plot first book'
    },
    {
        'title': 'title second book',
        'author': 'author second book',
        'image': 'image second book',
        'plot': 'plot second book'
    },
    {
        'title': 'title third book',
        'author': 'author third book',
        'image': 'image third book',
        'plot': 'plot third book'
    }
];
localStorage.setItem('lib', JSON.stringify(library));

const root = document.getElementById('root');

const homePage = document.createElement('div');
homePage.classList.add('home-page');
root.appendChild(homePage);

const bookList = document.createElement('ul');
bookList.classList.add('book-list');
homePage.appendChild(bookList);


const addButton = document.createElement('a');
addButton.textContent = 'Add';
addButton.classList.add('button-add');
homePage.appendChild(addButton);


const pagePreview = document.createElement('div');
pagePreview.classList.add('page-preview');
pagePreview.hash = 'preview';
root.appendChild(pagePreview);

let aboutBook = document.createElement('ul');
aboutBook.classList.add('about-book');
pagePreview.appendChild(aboutBook);

let bookTitle = document.createElement('li');
bookTitle.classList.add('book-data');
aboutBook.appendChild(bookTitle);

let bookAuthor = document.createElement('li');
bookAuthor.classList.add('book-data');
aboutBook.appendChild(bookAuthor);

let bookImage = document.createElement('li');
bookImage.classList.add('book-data');
aboutBook.appendChild(bookImage);

let bookPlot = document.createElement('li');
bookPlot.classList.add('book-data');
aboutBook.appendChild(bookPlot);


const pageEdit = document.createElement('form');
pageEdit.classList.add('page-edit');
root.appendChild(pageEdit);

const titleEdit = document.createElement('input');
titleEdit.value = '';
titleEdit.classList.add('input');
pageEdit.appendChild(titleEdit);

const authorEdit = document.createElement('input');
authorEdit.value = '';
authorEdit.classList.add('input');
pageEdit.appendChild(authorEdit);

const imageEdit = document.createElement('input');
imageEdit.value = '';
imageEdit.classList.add('input');
pageEdit.appendChild(imageEdit);

const plotEdit = document.createElement('input');
plotEdit.value = '';
plotEdit.classList.add('input');
pageEdit.appendChild(plotEdit);

const buttonSave = document.createElement('a');
buttonSave.classList.add('button-save');
buttonSave.textContent = 'Save';
pageEdit.appendChild(buttonSave);

const buttonClose = document.createElement('a');
buttonClose.classList.add('button-close');
buttonClose.textContent = 'Close';
pageEdit.appendChild(buttonClose);


const pageAdd = document.createElement('form');
pageAdd.classList.add('page-add');
root.appendChild(pageAdd);

const titleAdd = document.createElement('input');
titleAdd.value = '';
titleAdd.classList.add('input');
pageAdd.appendChild(titleAdd);

const authorAdd = document.createElement('input');
authorAdd.value = '';
authorAdd.classList.add('input');
pageAdd.appendChild(authorAdd);

const imageAdd = document.createElement('input');
imageAdd.value = '';
imageAdd.classList.add('input');
pageAdd.appendChild(imageAdd);

const plotAdd = document.createElement('input');
plotAdd.value = '';
plotAdd.classList.add('input');
pageAdd.appendChild(plotAdd);

const buttonSaveChanges = document.createElement('button');
buttonSaveChanges.classList.add('button-save-add');
buttonSaveChanges.textContent = 'Save changes';
pageAdd.appendChild(buttonSaveChanges);