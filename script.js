window.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel .item');


    let popupContainer = document.createElement('div');
    popupContainer.id = 'popup-image-container';
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '60px'; // Adjust as per navbar height
    popupContainer.style.right = '450px';
    popupContainer.style.zIndex = '9999';
    popupContainer.style.display = 'none';
    document.body.appendChild(popupContainer);

    // Clicking slideshow image changes big carousel and pops out image
    document.querySelectorAll('#slideshow .content-crrousel img').forEach(function(img, idx) {
        img.addEventListener('click', function() {
            carouselItems.forEach((item, i) => {
                if (i === idx) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Show popup image
            popupContainer.innerHTML = `
                <div style="padding:10px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.15); position:relative;">
                    <img src="${img.src}" style="max-width:200px; max-height:200px; display:block;">
                    <button id="close-popup-btn" style="position:absolute; top:5px; right:5px;background-color:transparent;border-color:transparent">&times;</button>
                </div>
            `;
            popupContainer.style.display = 'block';

            // Close button handler
            document.getElementById('close-popup-btn').onclick = function() {
                popupContainer.style.display = 'none';
            };
        });
    });
});
