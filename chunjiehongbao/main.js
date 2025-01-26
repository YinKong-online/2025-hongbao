window.onload = function () {
    // 获取注册按钮和弹出框元素
    const registerBtn = document.getElementById('registerBtn');
    const registerModal = document.getElementById('registerModal');
    const saveNameBtn = document.getElementById('saveNameBtn');
    const usernameInput = document.getElementById('usernameInput');
    
    // 目标时间：2025年1月29日 00:00:00
    const targetDate = new Date('2025-01-25T00:00:00');
    
    // 获取红包链接元素
    const hongbaoLink = document.getElementById('hongbaoLink');

    // 判断时间是否到达目标时间
    const currentDate = new Date();
    if (currentDate >= targetDate) {
        hongbaoLink.href = 'hongbao.html';  // 如果时间到了，跳转到红包页面
    }

    // 显示注册弹出框
    registerBtn.addEventListener('click', function() {
        registerModal.style.display = 'block'; // 显示弹出框
    });

    // 保存用户名到 localStorage
    saveNameBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);  // 保存用户名
            alert('注册成功！');
            registerModal.style.display = 'none';  // 关闭弹出框
        } else {
            alert('请输入有效的名字！');
        }
    });

    // 如果已经注册过，跳过弹出框
    if (localStorage.getItem('username')) {
        registerModal.style.display = 'none';  // 如果已经注册过，直接隐藏弹出框
    }

    // 倒计时函数
    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.getElementById('countdownTimer').textContent = '春节已经到来！';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdownTimer').textContent = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }

    // 初始化倒计时
    updateCountdown();
    setInterval(updateCountdown, 1000);
};

