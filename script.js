document.addEventListener('DOMContentLoaded', () => {
    // Chọn container để thêm trái tim vào
    const heartContainer = document.querySelector('.heart-container');

    // Hàm tạo một trái tim
    function createHeart() {
        const heart = document.createElement('div');  // Tạo một div cho trái tim
        heart.classList.add('heart');  // Thêm class 'heart' để áp dụng CSS

        // Đặt vị trí ngang ngẫu nhiên
        heart.style.left = Math.random() * 100 + 'vw';  
        
        // Đặt thời gian bay ngẫu nhiên từ 7 đến 10 giây
        heart.style.animationDuration = Math.random() * 3 + 7 + 's'; 
        
        // Thêm trái tim vào container
        heartContainer.appendChild(heart);

        // Xóa trái tim sau khi hoàn thành bay
        setTimeout(() => {
            heart.remove();  // Xóa khỏi DOM sau 10 giây
        }, 10000);  // Sau 10 giây
    }

    function createHeart() {
        const heartCount = Math.floor(Math.random() * 4) + 2;  // Tạo từ 2 đến 5 trái tim
    
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 7 + 's';
            heartContainer.appendChild(heart);
    
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
    }

    // Cứ mỗi 0.5 giây tạo ra một trái tim mới
    setInterval(createHeart, 1);
});

