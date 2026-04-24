const ministryRulesData = {
    'ministry-main': {
        title: "👑 قـوانين الـوزارات",
        text: `
            <div class="grid-container">
                <div class="card sub-card" onclick="showContent('civil-system')">⚖️ النظام المدني</div>
                <div class="card sub-card" onclick="showContent('min-system')">📋 النظام الوزاري</div>
                <div class="card sub-card" onclick="showContent('state-const')">📜 دستور الدولة</div>
                <div class="card sub-card" onclick="showContent('immunity')">🛡️ نظام الحصانات</div>
                <div class="card sub-card" onclick="showContent('public-security')">👮🏻 مديرية الأمن العام</div>
                <div class="card sub-card" onclick="showContent('royal-guard')">👑 الحرس الملكي</div>
<button class="back-btn" onclick="goBack()">⬅️ العودة للقائمة الرئيسية</button> 
            </div>`
    }
};
