// مصفوفة لتخزين تاريخ التنقل
let navigationHistory = ['main']; 

function renderContent(contentId, dataObject) {
    const content = dataObject[contentId];
    if (!content) return;

    // حفظ الصفحة الحالية في التاريخ قبل الانتقال (إذا لم تكن هي نفسها الأخيرة)
    if (navigationHistory[navigationHistory.length - 1] !== contentId) {
        navigationHistory.push(contentId);
    }

    // هنا الكود الخاص بك الذي يعرض البيانات في الـ UI
    document.getElementById('title-id').innerHTML = content.title;
    document.getElementById('text-id').innerHTML = content.text;
    
    // إظهار زر الرجوع فقط إذا لم نكن في الواجهة الرئيسية
    const backBtn = document.getElementById('back-button');
    if (navigationHistory.length > 1) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}

// دالة الرجوع الذكية
function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // حذف الصفحة الحالية
        const previousPage = navigationHistory[navigationHistory.length - 1];
        
        // فحص أي كائن بيانات نستخدم بناءً على اسم الصفحة
        if (previousPage === 'main') {
            renderContent('main', mainMenuData);
        } else if (previousPage === 'city-main') {
            renderContent('city-main', cityRulesData);
        } else if (previousPage === 'ministry-main') {
            renderContent('ministry-main', ministryRulesData);
        }
        // ... وهكذا لبقية القوائم الرئيسية
    }
}
