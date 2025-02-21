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

    let icon, text, suggestion;

    // 根据《中国血液病诊疗指南2023》分层标准
    if (plateletCount < 20) {
        icon = '🔴';
        text = '高危风险（血小板减少）';
        suggestion = '立即卧床休息，禁止任何可能出血的活动，紧急联系医院血液科。';
    } else if (plateletCount >= 20 && plateletCount < 50) {
        icon = '🟠';
        text = '中度风险（血小板减少）';
        suggestion = '限制活动，避免磕碰，请联系医生评估是否需要输注血小板。';
    } else if (plateletCount >= 50 && plateletCount < 125) {
        icon = '🟡';
        text = '轻度风险（血小板减少）';
        suggestion = '保持观察，避免剧烈运动，建议多吃富含铁/维生素C的食物。';
    } else if (plateletCount >= 125 && plateletCount <= 350) {
        icon = '🟢';
        text = '正常范围';
        suggestion = '数值正常，保持定期复查，如有异常出血症状仍需就医。';
    } else {
        icon = '🟣';
        text = '血小板增多';
        suggestion = '需排查骨髓增殖性疾病（如原发性血小板增多症），建议血液科就诊。';
    }

    riskIcon.textContent = icon;
    riskText.innerHTML = `<span class="${icon === '🟣' ? 'purple' : ''}">${text}</span>`;
    advice.innerHTML = `<p>${suggestion}</p>`;
    resultSection.style.display = 'block';
});