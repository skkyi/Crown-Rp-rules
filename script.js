// مصفوفة لتخزين تاريخ التنقل (تساعدنا في زر الرجوع)
let navigationStack = [];

/**
 * الدالة الأساسية لعرض المحتوى
 * @param {string} contentKey - المفتاح المطلوب عرضه (مثل 'main' أو 'city-rules')
 * @param {Object} dataSource - كائن البيانات الذي يحتوي على هذا المفتاح
 */
function renderContent(contentKey, dataSource) {
    const data = dataSource[contentKey];
    
    if (!data) {
        console.error("المحتوى غير موجود:", contentKey);
        return;
    }

    // تحديث العناوين والنصوص في الصفحة
    document.getElementById('main-title').innerHTML = data.title;
    document.getElementById('content-area').innerHTML = data.text;

    // تسجيل الصفحة في التاريخ إذا لم تكن موجودة مسبقاً (لتجنب التكرار)
    if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1].key !== contentKey) {
        navigationStack.push({ key: contentKey, source: dataSource });
    }

    // إظهار أو إخفاء زر الرجوع
    const backBtn = document.getElementById('back-button');
    if (navigationStack.length > 1) {
        backBtn.style.display = 'inline-block';
    } else {
        backBtn.style.display = 'none';
    }

    // التمرير لأعلى الصفحة عند تغيير المحتوى
    document.getElementById('content-area').scrollTop = 0;
}

/**
 * دالة الرجوع للخلف
 */
function goBack() {
    if (navigationStack.length > 1) {
        navigationStack.pop(); // حذف الصفحة الحالية من التاريخ
        const lastPage = navigationStack[navigationStack.length - 1];
        
        // إعادة عرض الصفحة السابقة بدون إضافتها للتاريخ مجدداً
        // (سيتم التعامل مع الإضافة داخل renderContent تلقائياً مع فحص التكرار)
        renderContent(lastPage.key, lastPage.source);
        
        // بما أن renderContent ستضيفها مرة أخرى، نحذف التكرار الناتج
        navigationStack.pop(); 
    }
}

/**
 * دوال الانتقال المباشر من الواجهة الرئيسية
 */
function loadCityRules() {
    renderContent('city-main', cityRulesData);
}

function loadMinistryRules() {
    renderContent('ministry-main', ministryRulesData);
}

function loadGangRules() {
    // بما أن قوانين العصابات صفحة واحدة، ننتقل لها مباشرة
    renderContent('gang-rules', gangRulesData);
}

function loadDiscordRules() {
    renderContent('discord-main', discordRulesData);
}

/**
 * دالة مساعدة لاستخدامها داخل المربعات (مثل الانتقال من قائمة المدينة لقانون معين)
 */
function showContent(key) {
    // البحث عن المفتاح في جميع ملفات البيانات المتاحة
    if (cityRulesData[key]) renderContent(key, cityRulesData);
    else if (gangRulesData[key]) renderContent(key, gangRulesData);
    else if (ministryRulesData[key]) renderContent(key, ministryRulesData);
    else if (discordRulesData[key]) renderContent(key, discordRulesData);
}
