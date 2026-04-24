const ministryRulesData = {
    // 1. القائمة الفرعية للوزارات
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
                <div class="card sub-card" onclick="showContent('health-ministry')">👨‍⚕️ وزارة الصحة</div>
            </div>`
    },

    // 2. نظام وزارة الصحة
    'health-ministry': {
        title: "👨‍⚕️ وزارة الصحة",
        text: `<div class="rules-section">.1 - يمنع خطف أو قتل المسعف.<br>.2 - المسعف شخصية محايدة تماماً.</div>`
    },

    // 3. تعريف باقي الأقسام (عشان ما يعلق الموقع لو ضغطت عليها)
    'civil-system': {
        title: "⚖️ النظام المدني",
        text: `<div class="rules-section">قوانين النظام المدني لمدينة كراون تظهر هنا...</div>`
    },

    'min-system': {
        title: "📋 النظام الوزاري",
        text: `<div class="rules-section">تفاصيل النظام الوزاري تظهر هنا...</div>`
    },

    'state-const': {
        title: "📜 دستور الدولة",
        text: `<div class="rules-section">بنود دستور الدولة تظهر هنا...</div>`
    },

    'immunity': {
        title: "🛡️ نظام الحصانات",
        text: `<div class="rules-section">تفاصيل نظام الحصانات تظهر هنا...</div>`
    },

    'public-security': {
        title: "👮🏻 مديرية الأمن العام",
        text: `<div class="rules-section">قوانين مديرية الأمن العام تظهر هنا...</div>`
    },

    'royal-guard': {
        title: "👑 الحرس الملكي",
        text: `<div class="rules-section">قوانين وضوابط الحرس الملكي تظهر هنا...</div>`
    }
}; // هذه القفلة هي أهم شيء!
