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

    const titleElement = document.getElementById('main-title');
    const contentElement = document.getElementById('content-area');

    if (titleElement) titleElement.innerHTML = data.title;
    if (contentElement) contentElement.innerHTML = data.text;

    // تسجيل الصفحة في التاريخ إذا لم تكن موجودة مسبقاً
    if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1].key !== contentKey) {
        navigationStack.push({ key: contentKey, source: dataSource });
    }

    updateBackButton();
    window.scrollTo(0, 0);
}

/**
 * دالة تحديث حالة زر الرجوع
 */
function updateBackButton() {
    const backBtn = document.getElementById('back-button');
    if (!backBtn) return;

    // الزر يظهر طالما أننا لسنا في الصفحة الرئيسية (main)
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
        navigationStack.pop(); 
        const lastPage = navigationStack[navigationStack.length - 1];
        
        // نحذفها مؤقتاً لأن renderContent ستعيد إضافتها للسجل
        const prevKey = lastPage.key;
        const prevSource = lastPage.source;
        navigationStack.pop(); 
        
        renderContent(prevKey, prevSource);
    }
}

/**
 * دالة البحث الشامل عن المحتوى
 */
function showContent(key) {
    // أضفنا escapeRulesData هنا ليدعم البحث والانتقال
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
    else if (typeof escapeRulesData !== 'undefined' && escapeRulesData[key]) {
        renderContent(key, escapeRulesData);
    }
    else if (typeof mainMenuData !== 'undefined' && mainMenuData[key]) {
        renderContent(key, mainMenuData);
    }
    
    updateBackButton();
}

/**
 * دوال الانتقال المباشر من الواجهة الرئيسية
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

// الدالة الجديدة لقوانين الهروب
function loadEscapeRules() {
    if (typeof escapeRulesData !== 'undefined') renderContent('escape-main', escapeRulesData);
}

/**
 * تشغيل الحالة الابتدائية
 */
window.onload = function() {
    // عرض القائمة الرئيسية فور التحميل
    if (typeof mainMenuData !== 'undefined') {
        renderContent('main', mainMenuData);
    }
    updateBackButton();
};
