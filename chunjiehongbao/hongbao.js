// 动态生成随机烟花
$(document).ready(function() {
    let fireworkCount = 6 + Math.floor(Math.random() * 5); // 随机生成6到10朵烟花
    for (let i = 0; i < fireworkCount; i++) {
        let firework = $('<div class="firework"></div>');
        
        // 随机颜色
        let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        firework.css('box-shadow', `0 0 20px ${color}, 0 0 15px 5px ${color}`);
        
        // 限制烟花位置只在上1/6区域
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * (window.innerHeight / 6); // 烟花只在上1/6区域生成
        firework.css({ top: y + 'px', left: x + 'px' });
        
        // 确保容器内的烟花正常显示
        $('.fireworks-container').append(firework);
    }

    // 3秒后跳转到发红包页面
    setTimeout(function() {
         window.location.href = "faHongbao.html";
    }, 3000);// 3秒钟后跳转
});
