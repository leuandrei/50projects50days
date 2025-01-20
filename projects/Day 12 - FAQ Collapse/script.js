faqs = document.querySelectorAll('.faq')
faqToggle = document.querySelectorAll('.faq-toggle')

console.log(faqToggle);
for (let i in faqToggle) {
    faqToggle[i].addEventListener('click', () => {
        faqs[i].classList.contains("active") ? 
        faqs[i].classList.remove('active') :
        faqs[i].classList.add('active') ;

    })
}

// console.log(faqExtends);
// for (let i in faqExtends) {
//     faqExtends[i].addEventListener('click', () => {
//         faqs[i].classList.add('active');
//     })
// }

// for (let i in faqExtends) {
//     faqClosers[i].addEventListener('click', () => {
//         faqs[i].classList.remove('active');
//     })
// }