function showLoading(){
    const loadingComponent = document.createElement('div');
    loadingComponent.classList.add('loading');

    const labelLoadingComponent = document.createElement('label');
    labelLoadingComponent.innerText = 'Carregando...';
    labelLoadingComponent.classList.add('loading-label');

    document.body.appendChild(loadingComponent);
    loadingComponent.appendChild(labelLoadingComponent);

    setTimeout(() => hideLoading(), 2000);
};

function hideLoading(){
    const allLoadings = document.getElementsByClassName('loading');
    if(allLoadings.length){
        allLoadings[0].remove();
    };
};