// 網頁進入時自動彈出「免費子網域安全提醒」
window.addEventListener('DOMContentLoaded', () => {
  const noticeModal = document.getElementById('noticeModal');
  if (noticeModal) {
    noticeModal.classList.add('active');
  }
});

// 關閉進入首頁的提醒視窗
function closeNoticeModal() {
  const noticeModal = document.getElementById('noticeModal');
  if (noticeModal) {
    noticeModal.classList.remove('active');
  }
}

// Eaglercraft 各版本資料、導向網址與教學須知
const versionInfo = {
  '1.20.6': {
    title: 'Eaglercraft 1.20.6 啟動須知',
    url: 'https://enchantment-niko.github.io/webmc/1.20.6/chinese.html',
    desc: `【遊戲版本】：1.20.6 (Trails & Tales 中文移植版)

⚠️【關於 Eaglercraft 載入畫面須知】：
1. 進入遊戲時，Eaglercraft 會有一個「奇怪/詭異的載入畫面」（這是 Eaglercraft 的經典傳統彩蛋），請不用擔心，它不是中毒也沒有 Jump scare，只是正常的資源加載動畫！
2. 進入後請稍候 3~10 秒等待 WebGL 遊戲資源解壓完成。

【連線與遊玩提示】：
・單人模式：可直接創建世界（存檔儲存於瀏覽器本地）。
・多人模式：點擊多人遊戲並輸入支援的 Eaglercraft WebSocket 伺服器網址 (wss://)。
・按鍵操作：WASD 移動、按 ESC 可鎖定/釋放滑鼠游標。`
  },
  '1.21.11': {
    title: 'Eaglercraft 1.21.11 啟動須知',
    url: 'https://enchantment-niko.github.io/webmc/1.21.11/desktop.html',
    desc: `【遊戲版本】：1.21.11 (Mounts of Mayhem 桌面版)

🚨【重要操作提示】：
進入遊戲介面後，必須先「上傳 Skin（皮膚外觀）」才能點擊開始按鈕進入世界！

⚠️【關於 Eaglercraft 載入畫面須知】：
1. 載入時出現的特殊畫面為 Eaglercraft 正常彩蛋載入效果，請安心等待。
2. 首次加載材質包需要數秒時間，請保持網路連線穩定。

【連線與遊玩提示】：
・支援匯出/匯入 EPK 世界存檔。
・建議使用 Chromium 核心瀏覽器 (Chrome / Edge / Brave) 並開啟硬體加速。`
  },
  '26.2': {
    title: 'Eaglercraft 26.2 啟動須知 (最新版本)',
    url: 'https://eaglercraft-26-2-client.u2471966200.workers.dev/?=v0.5',
    desc: `【遊戲版本】：26.2 (Chaos Cubed - 最新正式版)

⚠️【關於 Eaglercraft 載入畫面須知】：
1. 進入遊戲時，Eaglercraft 會有一個「奇怪/詭異的載入畫面」（這是 Eaglercraft 的經典傳統彩蛋），請不用擔心，它不是中毒也沒有 Jump scare，只是正常的資源加載動畫！
2. 最新引擎將在背景完成 WebAssembly 編譯與著色器配置。

【連線與遊玩提示】：
・預設操作：WASD 移動、空白鍵跳躍、E 鍵背包、F 鍵副手。
・若畫面延遲，可在遊戲設定中調低視距以獲得更高 FPS。`
  }
};

let currentTargetUrl = '';

// 點擊遊玩按鈕觸發說明彈窗
function launchGame(versionKey) {
  const modal = document.getElementById('launchModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const launchBtn = document.getElementById('launchBtn');

  const data = versionInfo[versionKey];
  if (!data) return;

  currentTargetUrl = data.url;

  modalTitle.innerText = data.title;
  modalDesc.innerText = data.desc;
  launchBtn.innerText = `進入 ${versionKey} 遊戲`;

  modal.classList.add('active');
}

// 點擊彈窗內的進入按鈕跳轉至對應網址
function proceedToGame() {
  if (currentTargetUrl) {
    window.open(currentTargetUrl, '_blank');
  }
  closeModal();
}

// 關閉遊玩說明彈窗
function closeModal() {
  document.getElementById('launchModal').classList.remove('active');
}

// 點擊背景空白處關閉
document.getElementById('launchModal').addEventListener('click', (e) => {
  if (e.target.id === 'launchModal') {
    closeModal();
  }
});
