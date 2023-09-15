let bg = document.querySelector('.bg');
    window.addEventListener('mousemove', function(e) {
        let y = e.clientY / window.innerHeight;  
        bg.style.transform = 'translateY(-' + y * 70 + 'px)';
    });