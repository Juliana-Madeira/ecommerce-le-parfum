const fakeFloralProducts = [
    {
        img1: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw8b199f28/images/hi-res-BR/3432240504807.1_1000px.jpg?sw=556&sh=680&sm=fit',
        brand: 'Cartier',
        name: 'PERFUME CARTIER RIVIERES INSOUCIANCE UNISSEX EAU DE TOILETTE',
        category: 'floral'
    }, 
    {
        img1: 'https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw8b199f28/images/hi-res-BR/3432240504807.1_1000px.jpg?sw=556&sh=680&sm=fit',
        brand: 'Produto 2',
        name: 'PERFUME produto 2',
        category: 'floral'        
    }
]

//função para pegar os produtos do backend
function findProducts(){
    firebase.firestore()
    .collection('perfumes')
    .get()
    .then(snapshot => {
        const floralProducts = snapshot.docs.map(doc => doc.data());
        floralPerfumes(floralProducts);
        });
};
findProducts();

//função para mostrar os produtos do backend na tela
function floralPerfumes(products){
    const productCard = document.getElementById('section-products');

    const productsFiltered = products.filter(item => item.category == 'floral')

    productsFiltered.map(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        productCard.appendChild(card);

        const img1 = document.createElement('img');
        img1.setAttribute('src', `${product.img1}`);
        img1.setAttribute('alt', 'imagem do produto');
        img1.classList.add('shop-item-image');
        card.appendChild(img1);

        const name = document.createElement('p');
        name.classList.add('description-title');
        name.innerText = product.name;
        card.appendChild(name);

        const brand = document.createElement('h3');
        brand.classList.add('description-name');
        brand.innerText = product.brand;
        card.appendChild(brand);

        const size = document.createElement('p');
        size.classList.add('description-size');
        size.innerText = product.size;
        card.appendChild(size);

        
    });
};


`
<div class="product-card">
    <img src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dw8b199f28/images/hi-res-BR/3432240504807.1_1000px.jpg?sw=556&sh=680&sm=fit" alt="imagem do produto" class="shop-item-image">
    <p class="description-title">PERFUME CARTIER RIVIERES INSOUCIANCE UNISSEX EAU DE TOILETTE</p>
    <div class="divSizeName">
        <h3 class="description-name shop-item-title">Cartier</h3>
        <p class="description-size">100ml</p>
    </div>
    <h3 class="description-price shop-item-price">R$ 1179</h3>
    <div class="buttons">
        <button class="btn-buy">Detalhes</button>
        <button class="btn-buy shop-item-button">Comprar</button>
    </div>
</div>
`