// مصفوفة لتخزين تاريخ التنقل (تساعدنا في زر الرجوع)
let navigationStack = [];

/**
 * الدالة الأساسية لعرض المحتوى
 */
function renderContent(contentKey, dataSource) {
    if (!dataSource || !dataSource[contentKey]) {
        console.error("المحتوى غير موجود:", contentKey);
        return;
    }

    const data = dataSource[contentKey];

    // تحديث العناوين والنصوص في الصفحة
    // تأكد أن الـ IDs هذه موجودة في ملف الـ HTML (main-title و content-area)
    const titleElement = document.getElementById('main-title');
    const contentElement = document.getElementById('content-area');

    if (titleElement) titleElement.innerHTML = data.title;
    if (contentElement) contentElement.innerHTML = data.text;

    // تسجيل الصفحة في التاريخ إذا لم تكن موجودة مسبقاً (لتجنب التكرار)
    if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1].key !== contentKey) {
        navigationStack.push({ key: contentKey, source: dataSource });
    }

    // تحديث ظهور زر الرجوع بشكل دائم وذكي
    updateBackButton();

    // التمرير لأعلى الصفحة عند تغيير المحتوى
    window.scrollTo(0, 0);
}

/**
 * دالة تحديث حالة زر الرجوع
 */
function updateBackButton() {
    const backBtn = document.getElementById('back-button');
    if (!backBtn) return;

    // المنطق: الزر يظهر طالما أن هناك أكثر من صفحة واحدة في التاريخ
    const currentKey = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].key : '';

    if (navigationStack.length > 1 && currentKey !== 'main') {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}

/**
 * دالة الرجوع للخلف
 */
function goBack() {
    if (navigationStack.length > 1) {
        // 1. نحذف الصفحة الحالية من السجل
        navigationStack.pop(); 
        
        // 2. نأخذ بيانات الصفحة السابقة
        const lastPage = navigationStack[navigationStack.length - 1];
        const prevKey = lastPage.key;
        const prevSource = lastPage.source;
        
        // 3. نحذفها مؤقتاً لأن renderContent ستعيد إضافتها للسجل
        navigationStack.pop(); 
        
        // 4. إعادة العرض
        renderContent(prevKey, prevSource);
    }
    updateBackButton();
}

/**
 * دالة البحث الشامل عن المحتوى (تستخدم داخل المربعات والأزرار)
 */
function showContent(key) {
    // الترتيب هنا مهم: يبحث في قوانين الوزارات أولاً إذا كانت موجودة
    if (typeof ministryRulesData !== 'undefined' && ministryRulesData[key]) {
        renderContent(key, ministryRulesData);
    } 
    else if (typeof cityRulesData !== 'undefined' && cityRulesData[key]) {
        renderContent(key, cityRulesData);
    } 
    else if (typeof gangRulesData !== 'undefined' && gangRulesData[key]) {
        renderContent(key, gangRulesData);
    } 
    else if (typeof discordRulesData !== 'undefined' && discordRulesData[key]) {
        renderContent(key, discordRulesData);
    }
    else if (typeof mainMenuData !== 'undefined' && mainMenuData[key]) {
        renderContent(key, mainMenuData);
    }
    
    updateBackButton();
}

/**
 * دوال الانتقال المباشر من الواجهة الرئيسية لمدينة كراون
 */
function loadCityRules() {
    if (typeof cityRulesData !== 'undefined') renderContent('city-main', cityRulesData);
}

function loadMinistryRules() {
    if (typeof ministryRulesData !== 'undefined') renderContent('ministry-main', ministryRulesData);
}

function loadGangRules() {
    if (typeof gangRulesData !== 'undefined') renderContent('gang-rules', gangRulesData);
}

function loadDiscordRules() {
    if (typeof discordRulesData !== 'undefined') renderContent('discord-main', discordRulesData);
}

// تشغيل الحالة الابتدائية عند تحميل الصفحة (اختياري)
window.onload = function() {
    updateBackButton();
};
