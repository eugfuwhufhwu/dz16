const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    );

const list = document.querySelector('.itemsList');

list.addEventListener('click', async () => {
    try {
        const data = await getData("http://localhost:3000/ITEMS");

        Object.entries(data).forEach(([key, el]) => {
            if (el.photo && el.name && el.price && el.inStok) {
                list.insertAdjacentHTML(
                    'beforeend',
                    `
                    <li>
                        <img src="${el.photo}" alt="" width="100px"srcset="">
                        <p class="title">${el.name}</p>
                        <p class="price">цена:${el.price} руб.</p>
                        <p class="title">в наличии ${el.inStok} штук</p>
                    </li>
                    `
                );
            }
        });
    } catch (error) {
        console.error(error);
    }
}); 