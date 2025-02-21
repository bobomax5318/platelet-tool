document.getElementById('check-button').addEventListener('click', function () {
    const plateletCount = parseInt(document.getElementById('platelet-count').value);
    const resultSection = document.getElementById('result-section');
    const riskIcon = document.getElementById('risk-icon');
    const riskText = document.getElementById('risk-text');
    const advice = document.getElementById('advice');

    if (isNaN(plateletCount) || plateletCount < 0 || plateletCount > 1000) {
        alert('请输入有效的血小板数值（0-1000）');
        return;
    }

    let riskLevel, icon, text, suggestion;

    if (plateletCount > 50) {
        riskLevel = '轻度风险';
        icon = '🟢';
        text = '轻度风险';
        suggestion = '保持观察，避免剧烈运动，建议多吃富含铁/维生素C的食物。';
    } else if (plateletCount >= 20 && plateletCount <= 50) {
        riskLevel = '中度风险';
        icon = '🟡';
        text = '中度风险';
        suggestion = '限制活动，避免磕碰，联系医生评估是否需要输注血小板。';
    } else {
        riskLevel = '高危风险';
        icon = '🔴';
        text = '高危风险';
        suggestion = '立即卧床休息，禁止任何可能出血的活动，紧急联系医院。';
    }

    riskIcon.textContent = icon;
    riskText.textContent = text;
    advice.innerHTML = `<p>${suggestion}</p>`;
    resultSection.style.display = 'block';
});