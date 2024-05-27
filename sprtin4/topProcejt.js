document.addEventListener('DOMContentLoaded', fetchNews);

function fetchNews() {
    const apiKey = '630916754d7b48eeb673d0ab22092b15';
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`;



    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true); // Use fullUrl if using the CORS proxy
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            const articles = response.articles;
            let output = '';

            articles.forEach(article => {
                const imageUrl = article.urlToImage ? article.urlToImage : 'placeholder.jpg'; // Eğer resim yoksa yerine bir placeholder koyabilirsiniz

                output += `
                    <div class="news-item">
                        <img src="${imageUrl}" alt="${article.title}">
                        <div class="news-item-content">
                            <h2>${article.title}</h2>
                            <p>${article.description}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        </div>
                    </div>
                `;
            });

            document.getElementById('news-container').innerHTML = output;
        } else {
            console.error('Error occurred!');
        }
    };
    xhr.send();
}
