const projects = [
    "學習JavaScript基本語法: console.log(\"Hello JavaScript\");",
    "實作一個簡單的計算機"
];

let currentIndex = 0; // 當前項目的索引

// 顯示下個項目
document.getElementById('random-project').addEventListener('click', () => {
    const selectedProject = projects[currentIndex];

    document.getElementById('project-output').textContent = selectedProject;

    // 檢查是否選擇了計算機
    if (selectedProject === "實作一個簡單的計算機") {
        document.getElementById('calculator').style.display = 'block'; // 顯示計算機
    } else {
        document.getElementById('calculator').style.display = 'none'; // 隱藏計算機
    }

    // 更新索引
    currentIndex++;
    if (currentIndex >= projects.length) {
        currentIndex = 0; // 重置索引
    }
});

// 顯示/隱藏導航
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 計算機功能
const calculateButton = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDisplay.textContent = '不能除以零！';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDisplay.textContent = '請選擇有效的運算符！';
            return;
    }

    resultDisplay.textContent = `答案是: ${result}`;
});
