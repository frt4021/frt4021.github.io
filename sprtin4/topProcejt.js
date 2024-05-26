document.addEventListener('DOMContentLoaded', fetchNews);

function fetchNews() {
    const apiKey = 'cf0238b67c2c4d1d96eb05960fc4ff5a';
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            const articles = response.articles;
            let output = '';

            articles.forEach(article => {
                // Haberlerde resim var mı kontrol et
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
