document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnClick');
    const msg = document.getElementById('message');

    btn.addEventListener('click', () => {
        msg.textContent = '🎉 Chúc mừng bạn đã kết nối thành công với pipeline CI/CD!';
        msg.style.color = '#7bed9f';
    });
});

