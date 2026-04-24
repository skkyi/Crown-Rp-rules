// مصفوفة لتخزين تاريخ التنقل (تساعدنا في زر الرجوع)
let navigationStack = [];

/**
 * الدالة الأساسية لعرض المحتوى
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

    // إذا كنا في الصفحة الرئيسية تماماً (main) أو المصفوفة فارغة، نخفي الزر
    // ملاحظة: تأكد أن مفتاح القائمة الرئيسية في mainMenuData هو 'main'
    const currentKey = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].key : '';

    if (navigationStack.length <= 1 || currentKey === 'main') {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block'; // يظهر الزر في كل الخانات الأخرى
    }
}

/**
 * دالة الرجوع للخلف
 */
function goBack() {
    if (navigationStack.length > 1) {
        navigationStack.pop(); // حذف الصفحة الحالية
        const lastPage = navigationStack[navigationStack.length - 1];
        
        // إعادة عرض الصفحة السابقة
        renderContent(lastPage.key, lastPage.source);
        
        // حذف التكرار الناتج عن renderContent
        navigationStack.pop(); 
    }
    updateBackButton();
}

/**
 * دالة البحث الشامل عن المحتوى (تستخدم داخل المربعات)
 */
function showContent(key) {
    // البحث في جميع الملفات المتوفرة
    if (typeof cityRulesData !== 'undefined' && cityRulesData[key]) {
        renderContent(key, cityRulesData);
    } 
    else if (typeof gangRulesData !== 'undefined' && gangRulesData[key]) {
        renderContent(key, gangRulesData);
    } 
    else if (typeof ministryRulesData !== 'undefined' && ministryRulesData[key]) {
        renderContent(key, ministryRulesData);
    } 
    else if (typeof discordRulesData !== 'undefined' && discordRulesData[key]) {
        renderContent(key, discordRulesData);
    }
    else if (typeof mainMenuData !== 'undefined' && mainMenuData[key]) {
        renderContent(key, mainMenuData);
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
    renderContent('gang-rules', gangRulesData);
}

function loadDiscordRules() {
    renderContent('discord-main', discordRulesData);
}
