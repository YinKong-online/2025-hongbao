// 总红包个数
const totalPackets = 7;

// 固定金额
const packetAmounts = [6.66,8.88,0.66,0.88,0.99,1.09,1.10];

// 所有红包金额
let allPackets = [...packetAmounts];

// 获取剩余红包数
let remainingPackets = parseInt(localStorage.getItem('remainingPackets')) || totalPackets;
document.getElementById('remainingPackets').textContent = remainingPackets;

// 随机选择红包金额
function getRandomPacket() {
    const randomIndex = Math.floor(Math.random() * allPackets.length);
    return allPackets[randomIndex];
}

// 将金额随机分成若干份
function splitAmount(amount, parts) {
    const result = [];
    let remainingAmount = amount;
    for (let i = 0; i < parts - 1; i++) {
        const random = (Math.random() * (remainingAmount / 2)).toFixed(2);
        result.push(parseFloat(random));
        remainingAmount -= parseFloat(random);
    }
    result.push(remainingAmount.toFixed(2));
    return result;
}

// 更新红包金额和剩余红包数
function updateUI() {
    // 随机选择一个红包金额
    const amount = getRandomPacket();
    document.getElementById('hongbaoAmount').textContent = `${amount.toFixed(2)}元`;

    // 设置领取按钮的点击事件
    document.getElementById('claimBtn').addEventListener('click', claimPacket);
}

// 领取红包
function claimPacket() {
    const amount = document.getElementById('hongbaoAmount').textContent;
    const packetIndex = allPackets.indexOf(parseFloat(amount));

    if (packetIndex !== -1 && remainingPackets > 0) {
        // 标记红包已领取
        allPackets[packetIndex] = '已领取'; 

        // 更新剩余红包数
        remainingPackets -= 1;
        localStorage.setItem('remainingPackets', remainingPackets);  // 保存到 localStorage

        // 记录用户领取的红包
        let claimedPackets = JSON.parse(localStorage.getItem('claimedPackets')) || {};
        const username = localStorage.getItem('username') || '匿名用户';
        claimedPackets[username] = (claimedPackets[username] || 0) + 1;
        localStorage.setItem('claimedPackets', JSON.stringify(claimedPackets));

        // 弹窗提示
        alert(`恭喜你领取了${amount}元红包！`);

        // 跳转到结束页面
        window.location.href = "endPage.html";  // 结束页面的地址
    }
}

// 初始化页面
updateUI();

// 获取用户名
const username = localStorage.getItem('username');
if (!username) {
    // 如果没有用户名，跳回首页
    window.location.href = 'main.html';
} else {
    document.getElementById('usernameDisplay').textContent = username;
}

// 获取剩余红包数
document.getElementById('remainingPackets').textContent = remainingPackets;
