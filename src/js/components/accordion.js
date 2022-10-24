function accordion(trigger, activeClass, allContents) {
    const items = document.querySelectorAll(trigger);
    const contents = document.querySelectorAll(allContents);

    if (items) {
        const accordionRemoveItemElems = () => {
            items.forEach(item => item.parentElement.classList.remove(activeClass));
            contents.forEach(content => content.classList.remove('accordion__answer--show'));
        }

        items.forEach((elem, i) => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                if (elem.parentElement.classList.contains(activeClass)) {
                    accordionRemoveItemElems();
                } else {
                    accordionRemoveItemElems();
                    elem.parentElement.classList.add(activeClass);
                    contents[i].classList.add('accordion__answer--show');
                }
                document.querySelector(elem.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        });
    }
};

accordion('.accordion__question', 'accordion__item--active', '.accordion-contents .accordion__answer');