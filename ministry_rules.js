const ministryRulesData = {
    // القائمة الرئيسية للوزارات (التي تظهر الكروت)
    'ministry-main': {
        title: "👑 قـوانين الـوزارات",
        text: `
            <div class="grid-container">
                <div class="card sub-card" onclick="showContent('min-system')">النظام الوزاري ⤥</div>
                <div class="card sub-card" onclick="showContent('civil-system')">النظام المدني ⤥</div>
                <div class="card sub-card" onclick="showContent('state-const')">دستور الدولة ⤥</div>
                <div class="card sub-card" onclick="showContent('immunity')">الحصانات ⤥</div>
                <div class="card sub-card" onclick="showContent('public-security')">الامن العام ⤥</div>
                <div class="card sub-card" onclick="showContent('health-min')">وزارة الصحة ⤥</div>
            </div>`
    },

    // تفاصيل كل وزارة (يمكنك ملء النصوص لاحقاً بين علامتي الـ ` `)
    'min-system': {
        title: "النظام الوزاري",
        text: `<div class="rules-section"> (أضف تفاصيل النظام الوزاري هنا) </div>`
    },

    'civil-system': {
        title: "النظام المدني",
        text: `<div class="rules-section"> (أضف تفاصيل النظام المدني هنا) </div>`
    },

    'state-const': {
        title: "دستور الدولة",
        text: `<div class="rules-section"> (أضف تفاصيل دستور الدولة هنا) </div>`
    },

    'immunity': {
        title: "الحصانات",
        text: `<div class="rules-section"> (أضف تفاصيل الحصانات هنا) </div>`
    },

    'public-security': {
        title: "الأمن العام",
        text: `<div class="rules-section"> (أضف تفاصيل الأمن العام هنا) </div>`
    },

    'health-min': {
        title: "وزارة الصحة",
        text: `<div class="rules-section"> (أضف تفاصيل وزارة الصحة هنا) </div>`
    }
};
