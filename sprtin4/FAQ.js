// Akordeon işlevselliğini sağlayan JavaScript kodu
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Tıklanan sorunun cevabını bul
        const answer = question.nextElementSibling;
        
        // Diğer tüm cevapları kapat
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = 0;
            }
        });

        // Tıklanan sorunun cevabını aç
        if (!question.classList.contains('active')) {
            question.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            question.classList.remove('active');
            answer.style.maxHeight = 0;
        }
    });
});