const images = [
'充電器.jpg','平板.jpg','桌子.jpg','相機.jpg','耳機.jpg','鏡子.jpg',
'冰箱.jpg','床.jpg','椅子.jpg','碗.jpg','膠帶.jpg','鑰匙.jpg',
'刷子.jpg','手機.jpg','樹.jpg','窗簾.jpg','螺絲刀.jpg','雲.jpg',
'剪刀.jpg','星星.jpg','沙發.jpg','筷子.jpg','遊戲機.jpg','電腦.jpg',
'土壤.jpg','月亮.jpg','河流.jpg','紙.jpg','錘子.jpg','電視.jpg',
'尺子.jpg','杯子.jpg','燈.jpg','繩子.jpg','錢包.jpg','顯示器.jpg'
];

const urlParams = new URLSearchParams(window.location.search);
const NUM_WORDS = parseInt(urlParams.get('num')) || 10;

