// 获取领取记录
const claimedPackets = JSON.parse(localStorage.getItem('claimedPackets')) || {};

// 更新页面显示领取记录
const userList = document.getElementById('userList');
for (const [user, count] of Object.entries(claimedPackets)) {
    const li = document.createElement('li');
    li.textContent = `${user}：领取了 ${count} 个红包`;
    userList.appendChild(li);
}

// 获取剩余红包数
let remainingPackets = parseInt(localStorage.getItem('remainingPackets')) || 6;

// 更新剩余红包数
document.getElementById('remainingPackets').textContent = remainingPackets;
