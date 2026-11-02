// Arabic / English text for every page.
// The language is picked before first paint by assets/js/lang-boot.js (?lang= → saved choice → browser language)
// and is read here from <html lang>. Static text uses data-i18n="key" (innerHTML) and
// data-i18n-attr="attr:key; attr:key"; script text uses t('key').

export const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
export const locale = lang === 'ar' ? 'ar-SY' : 'en-GB';

const dict = {
  ar: {
    'site.name': 'مركز الرجاء المسيحي',
    'site.home': 'مركز الرجاء المسيحي — الصفحة الرئيسية',
    'header.title': 'معرض <bdi>3D</bdi> · <bdi>AR</bdi> · <bdi>VR</bdi>',
    'lang.switch': 'English',
    'lang.switchLabel': 'Switch to English',
    'auth.login': 'تسجيل الدخول',
    'auth.upload': 'رفع نموذج',

    'index.pageTitle': 'معرض المجسّمات ثلاثية الأبعاد',
    'index.description': 'اعرض المجسّمات ثلاثية الأبعاد بالواقع المعزّز (AR) والواقع الافتراضي (VR) من الموبايل أو نظارة VR.',
    'index.h1': 'معرض المجسّمات ثلاثية الأبعاد',
    'index.lead': 'اختر مجسّماً لتشاهده من كل الزوايا، ثم ضعه في مكانك الحقيقي عبر كاميرا الموبايل (<bdi>AR</bdi>)، أو ادخل إليه بنظارة الواقع الافتراضي (<bdi>VR</bdi>). يمكنك مشاركة رابط أي مجسّم مع الآخرين.',
    'index.kicker': 'معرض <bdi>3D</bdi> · واقع معزّز وافتراضي',
    'index.heroH': 'شاهد المجسّمات في مكانك الحقيقي',
    'index.heroLead': 'افتح أي مجسّم بكاميرا موبايلك لتراه بحجمه الطبيعي داخل غرفتك، أو ادخل إليه بنظارة الواقع الافتراضي — دون تثبيت أي تطبيق.',
    'index.dragHint': 'اسحب للتدوير · قرّب بإصبعين',
    'index.stepsH': 'كيف تعمل',
    'index.step1H': 'اختر مجسّماً',
    'index.step1': 'تصفّح المعرض وافتح أي مجسّم لتراه من كل الزوايا.',
    'index.step2H': 'وجّه الكاميرا',
    'index.step2': 'اضغط «ضعه في مكانك» ووجّه كاميرا الموبايل نحو الأرض.',
    'index.step3H': 'شاهده بحجمه الحقيقي',
    'index.step3': 'يظهر المجسّم بأبعاده الفعلية؛ تجوّل حوله وشارك الرابط مع غيرك.',
    'index.devices': 'يعمل على <bdi>Android</bdi> و<bdi>iPhone</bdi> ونظارات <bdi>Meta Quest</bdi> من المتصفح مباشرة.',
    'index.count': '{n} مجسّم',
    'index.qrH': 'افتحه على موبايلك',
    'index.qrText': 'امسح الرمز بكاميرا الموبايل، ثم اضغط «ضعه في مكانك» لترى المجسّم بحجمه الحقيقي.',
    'index.close': 'إغلاق',
    'index.featured': 'نموذج مميّز',
    'index.tryDemo': 'جرّب المثال',
    'demo.title': 'كرسي خشبي — مثال تجريبي',
    'demo.description': 'مجسّم بسيط بحجمه الحقيقي لتجربة المنصة: ضعه في غرفتك بالواقع المعزّز، أو ادخل إليه بنظارة الواقع الافتراضي.',
    'demo.tag': 'مثال',
    'index.emptyDemo': 'لم تُنشر مجسّمات بعد. جرّب المثال أعلاه لتتعرّف على الفكرة.',
    'index.details': 'التفاصيل والمشاركة',
    'index.allH': 'كل المجسّمات',
    'index.tryH': 'جرّب ملفاً من جهازك',
    'index.tryLead': 'اسحب ملف <bdi>GLB</bdi> المُصدَّر من <bdi>Tripo</bdi> أو <bdi>Blender</bdi> هنا لمعاينته فوراً على هذا الجهاز فقط. الملف لا يُرفع إلى أي مكان؛ لنشره للآخرين سجّل الدخول واستخدم صفحة «رفع نموذج».',
    'index.dropMain': 'اسحب الملف هنا أو اضغط للاختيار',
    'index.dropHint': '<bdi>.glb</bdi> · <bdi>.gltf</bdi> (ملف واحد مدمج)',
    'index.localAlt': 'معاينة الملف المحلي',
    'index.emptyBackend': 'لا توجد مجسّمات بعد. سجّل الدخول ثم اضغط «رفع نموذج».',
    'index.emptyStatic': 'لا توجد مجسّمات بعد. أضف ملفات <bdi>GLB</bdi> إلى مجلد <bdi>models</bdi> ثم شغّل <bdi>tools/build-catalog.ps1</bdi>.',
    'index.loadError': 'تعذّر تحميل قائمة المجسّمات. افتح الموقع عبر خادم (<bdi>tools/serve.ps1</bdi>) أو بعد نشره، وليس بفتح الملف مباشرة.',

    'ar.short': 'عرض في مكانك (<bdi>AR</bdi>)',
    'ar.place': 'ضعه في مكانك (<bdi>AR</bdi>)',
    'vr.enter': 'الواقع الافتراضي (<bdi>VR</bdi>)',
    'share.btn': 'مشاركة الرابط',
    'share.short': 'مشاركة',
    'share.copied': 'تم نسخ الرابط',
    'share.prompt': 'انسخ الرابط:',

    'view.pageTitle': 'عرض المجسّم',
    'view.back': 'كل المجسّمات',
    'view.dims': 'الأبعاد الحقيقية',
    'dim.w': 'العرض',
    'dim.h': 'الارتفاع',
    'dim.d': 'العمق',
    'view.fixed': 'تثبيت الحجم الحقيقي في <bdi>AR</bdi> (منع التكبير والتصغير)',
    'view.qr': 'امسح الرمز بكاميرا الموبايل لفتح هذا المجسّم على هاتفك ووضعه في مكانك الحقيقي.',
    'view.notFound': 'هذا المجسّم غير موجود أو تم حذفه. <a href="./">العودة إلى المعرض</a>',
    'view.noAR': 'هذا الجهاز لا يدعم الواقع المعزّز. افتح الرابط من موبايل (<bdi>Android</bdi> مع <bdi>ARCore</bdi> أو <bdi>iPhone</bdi>) عبر رمز <bdi>QR</bdi> أدناه.',
    'view.loadError': 'تعذّر تحميل ملف المجسّم:',
    'view.kicker': 'مجسّم ثلاثي الأبعاد · <bdi>AR</bdi> · <bdi>VR</bdi>',
    'view.arNote': 'وجّه الكاميرا نحو الأرض وحرّك الهاتف ببطء حتى يظهر المجسّم.',
    'view.openOnPhone': 'افتحه على موبايلك (<bdi>AR</bdi>)',
    'view.noARShort': 'هذا الجهاز لا يدعم الواقع المعزّز؛ امسح رمز <bdi>QR</bdi> بموبايلك.',
    'view.more': 'مجسّمات أخرى',
    'view.allModels': 'كل المجسّمات',
    'unit.m': 'م',
    'unit.cm': 'سم',

    'vr.pageTitle': 'الواقع الافتراضي',
    'vr.back': 'رجوع',
    'vr.notFound': 'المجسّم غير موجود',
    'vr.loadError': 'تعذّر تحميل الملف',
    'vr.dismiss': 'اضغط للإخفاء',
    'vr.help': '<b>كيف تستخدم هذه الصفحة</b>على نظارة <bdi>VR</bdi> (مثل <bdi>Meta Quest</bdi>): اضغط زر <bdi>VR</bdi> للدخول، أو زر <bdi>AR</bdi> لرؤية المجسّم داخل غرفتك. حرّك عصا التحكم اليمنى لتدوير المجسّم، واليسرى لتغيير حجمه. على الموبايل أو الكمبيوتر: اسحب لتنظر حولك.',

    'login.pageTitle': 'تسجيل الدخول',
    'login.h1': 'تسجيل الدخول',
    'login.lead': 'لرفع النماذج وإدارتها. الحسابات بدعوة فقط — اطلب دعوة من مسؤول المنصة.',
    'login.email': 'البريد الإلكتروني',
    'login.password': 'كلمة المرور',
    'login.submit': 'دخول',
    'login.forgot': 'نسيت كلمة المرور',
    'login.setTitle': 'اختر كلمة المرور',
    'login.resetTitle': 'كلمة مرور جديدة',
    'login.setLead': 'ستستخدمها مع بريدك لتسجيل الدخول لاحقاً.',
    'login.newPassword': 'كلمة المرور الجديدة',
    'login.minLength': '8 أحرف على الأقل.',
    'login.save': 'حفظ والمتابعة',
    'login.notConfigured': 'تسجيل الدخول غير مفعّل بعد: أضف بيانات مشروع <bdi>Supabase</bdi> في <bdi>assets/js/config.js</bdi>.',
    'login.linkExpired': 'انتهت صلاحية الرابط أو استُخدم من قبل. اطلب رابطاً جديداً.',
    'login.linkInvalid': 'الرابط غير صالح أو منتهي الصلاحية.',
    'login.badCredentials': 'البريد أو كلمة المرور غير صحيحة.',
    'login.emailFirst': 'اكتب بريدك الإلكتروني أولاً.',
    'login.sendFailed': 'تعذّر الإرسال، حاول بعد قليل.',
    'login.resetSent': 'أرسلنا رابط إعادة التعيين إلى بريدك',
    'login.saveFailed': 'تعذّر حفظ كلمة المرور:',

    'upload.pageTitle': 'رفع نموذج',
    'upload.logout': 'خروج',
    'upload.back': 'المعرض',
    'upload.h1': 'رفع نموذج جديد',
    'upload.lead': 'ملف <bdi>GLB</bdi> واحد حتى <bdi>50 MB</bdi>، مُصدَّر من <bdi>Blender</bdi> بالحجم الحقيقي بالمتر. تُلتقط الصورة المصغّرة تلقائياً من المعاينة.',
    'upload.glb': 'ملف النموذج (<bdi>.glb</bdi>)',
    'upload.title': 'الاسم',
    'upload.description': 'الوصف (اختياري)',
    'upload.tags': 'وسوم (اختياري)',
    'upload.tagsPlaceholder': 'مثال: أثاث، تعليمي',
    'upload.tagsHint': 'افصل بينها بفاصلة.',
    'upload.usdz': 'ملف <bdi>USDZ</bdi> لأجهزة <bdi>iPhone</bdi> (اختياري)',
    'upload.usdzHint': 'إن لم تضفه، يُنشأ تلقائياً على <bdi>iPhone</bdi> من ملف <bdi>GLB</bdi>.',
    'upload.submit': 'رفع ونشر',
    'upload.previewAlt': 'معاينة النموذج',
    'upload.mine': 'نماذجي',
    'upload.notGlb': 'الملف يجب أن يكون بصيغة GLB.',
    'upload.tooBig': 'حجم الملف {size} MB، والحد الأقصى 50 MB. فعّل ضغط Draco عند التصدير من Blender.',
    'upload.scaleWarn': 'تحقّق من الحجم: أكبر بُعد هو {size}. إذا لم يكن هذا الحجم الحقيقي فاضبط المقياس في <bdi>Blender</bdi> قبل الرفع، وإلا سيظهر بحجم خاطئ في <bdi>AR</bdi>.',
    'upload.readError': 'تعذّر قراءة الملف. تأكد أنه GLB سليم.',
    'upload.pickGlb': 'اختر ملف GLB.',
    'upload.eachUnder': 'كل ملف يجب أن يكون أصغر من 50 MB.',
    'upload.needTitle': 'اكتب اسماً للنموذج.',
    'upload.waitPreview': 'انتظر حتى تظهر المعاينة.',
    'upload.stGlb': 'رفع ملف النموذج…',
    'upload.stPoster': 'حفظ الصورة المصغّرة…',
    'upload.stUsdz': 'رفع ملف USDZ…',
    'upload.stSave': 'حفظ البيانات…',
    'upload.published': 'تم النشر',
    'upload.failed': 'فشل الرفع:',
    'upload.listError': 'تعذّر تحميل القائمة.',
    'upload.noneYet': 'لم ترفع أي نموذج بعد.',
    'upload.view': 'عرض',
    'upload.delete': 'حذف',
    'upload.confirmDelete': 'حذف «{title}» نهائياً؟ سيتوقف رابطه عن العمل.',
    'upload.deleteFailed': 'تعذّر الحذف',
    'upload.deleted': 'تم الحذف',
  },

  en: {
    'site.name': 'Christian Hope Center',
    'site.home': 'Christian Hope Center — Home',
    'header.title': '3D · AR · VR Gallery',
    'lang.switch': 'العربية',
    'lang.switchLabel': 'التبديل إلى العربية',
    'auth.login': 'Sign in',
    'auth.upload': 'Upload model',

    'index.pageTitle': '3D Model Gallery',
    'index.description': 'View 3D models in augmented reality (AR) and virtual reality (VR) from a phone or a VR headset.',
    'index.h1': '3D Model Gallery',
    'index.lead': 'Pick a model to look at it from every angle, place it in your real space with your phone camera (AR), or step into it with a VR headset. You can share any model’s link with others.',
    'index.kicker': '3D gallery · AR & VR',
    'index.heroH': 'See our models in your own space',
    'index.heroLead': 'Open any model with your phone camera to see it at real size in your room, or step into it with a VR headset — no app to install.',
    'index.dragHint': 'Drag to rotate · pinch to zoom',
    'index.stepsH': 'How it works',
    'index.step1H': 'Pick a model',
    'index.step1': 'Browse the gallery and open any model to see it from every angle.',
    'index.step2H': 'Point your camera',
    'index.step2': 'Tap “Place it in your space” and point your phone at the floor.',
    'index.step3H': 'See it at real size',
    'index.step3': 'The model appears at its true dimensions — walk around it and share the link.',
    'index.devices': 'Works on Android, iPhone and Meta Quest headsets, straight from the browser.',
    'index.count': '{n} models',
    'index.qrH': 'Open it on your phone',
    'index.qrText': 'Scan the code with your phone camera, then tap “Place it in your space” to see the model at real size.',
    'index.close': 'Close',
    'index.featured': 'Featured model',
    'index.tryDemo': 'Try the example',
    'demo.title': 'Wooden chair — demo',
    'demo.description': 'A simple model at real size to try the platform: place it in your room with AR, or step into it with a VR headset.',
    'demo.tag': 'Example',
    'index.emptyDemo': 'No models published yet. Try the example above to get the idea.',
    'index.details': 'Details & sharing',
    'index.allH': 'All models',
    'index.tryH': 'Try a file from your device',
    'index.tryLead': 'Drop a GLB exported from Tripo or Blender here to preview it on this device only. The file is not uploaded anywhere; to publish it for others, sign in and use “Upload model”.',
    'index.dropMain': 'Drop the file here or click to choose',
    'index.dropHint': '.glb · .gltf (single embedded file)',
    'index.localAlt': 'Preview of your local file',
    'index.emptyBackend': 'No models yet. Sign in, then choose “Upload model”.',
    'index.emptyStatic': 'No models yet. Add GLB files to the models folder, then run tools/build-catalog.ps1.',
    'index.loadError': 'Could not load the model list. Open the site through a server (tools/serve.ps1) or once published, not by opening the file directly.',

    'ar.short': 'View in your space (AR)',
    'ar.place': 'Place it in your space (AR)',
    'vr.enter': 'Virtual reality (VR)',
    'share.btn': 'Share link',
    'share.short': 'Share',
    'share.copied': 'Link copied',
    'share.prompt': 'Copy the link:',

    'view.pageTitle': 'View model',
    'view.back': 'All models',
    'view.dims': 'Real-world size',
    'dim.w': 'Width',
    'dim.h': 'Height',
    'dim.d': 'Depth',
    'view.fixed': 'Lock real-world size in AR (no pinch to resize)',
    'view.qr': 'Scan with your phone camera to open this model on your phone and place it in your space.',
    'view.notFound': 'This model doesn’t exist or was deleted. <a href="./">Back to the gallery</a>',
    'view.noAR': 'This device doesn’t support AR. Open the link on a phone (Android with ARCore, or iPhone) using the QR code below.',
    'view.loadError': 'Could not load the model file:',
    'view.kicker': '3D model · AR · VR',
    'view.arNote': 'Point your camera at the floor and move your phone slowly until the model appears.',
    'view.openOnPhone': 'Open on your phone (AR)',
    'view.noARShort': 'This device doesn’t support AR — scan the QR code with your phone.',
    'view.more': 'More models',
    'view.allModels': 'All models',
    'unit.m': 'm',
    'unit.cm': 'cm',

    'vr.pageTitle': 'Virtual reality',
    'vr.back': 'Back',
    'vr.notFound': 'Model not found',
    'vr.loadError': 'Could not load the file',
    'vr.dismiss': 'Click to hide',
    'vr.help': '<b>How to use this page</b>On a VR headset (such as Meta Quest): press VR to enter, or AR to see the model inside your room. Move the right thumbstick to rotate the model and the left one to resize it. On a phone or computer: drag to look around.',

    'login.pageTitle': 'Sign in',
    'login.h1': 'Sign in',
    'login.lead': 'To upload and manage models. Accounts are by invitation only — ask the platform administrator for an invite.',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Sign in',
    'login.forgot': 'Forgot password',
    'login.setTitle': 'Choose your password',
    'login.resetTitle': 'New password',
    'login.setLead': 'You’ll use it with your email to sign in from now on.',
    'login.newPassword': 'New password',
    'login.minLength': 'At least 8 characters.',
    'login.save': 'Save and continue',
    'login.notConfigured': 'Sign-in isn’t set up yet: add the Supabase project details to assets/js/config.js.',
    'login.linkExpired': 'This link has expired or was already used. Ask for a new one.',
    'login.linkInvalid': 'The link is invalid or has expired.',
    'login.badCredentials': 'Wrong email or password.',
    'login.emailFirst': 'Enter your email first.',
    'login.sendFailed': 'Could not send, please try again shortly.',
    'login.resetSent': 'We sent a reset link to your email',
    'login.saveFailed': 'Could not save the password:',

    'upload.pageTitle': 'Upload model',
    'upload.logout': 'Sign out',
    'upload.back': 'Gallery',
    'upload.h1': 'Upload a new model',
    'upload.lead': 'One GLB file up to 50 MB, exported from Blender at real-world size in metres. The thumbnail is captured automatically from the preview.',
    'upload.glb': 'Model file (.glb)',
    'upload.title': 'Name',
    'upload.description': 'Description (optional)',
    'upload.tags': 'Tags (optional)',
    'upload.tagsPlaceholder': 'e.g. furniture, education',
    'upload.tagsHint': 'Separate with commas.',
    'upload.usdz': 'USDZ file for iPhone (optional)',
    'upload.usdzHint': 'If you leave it out, iPhone generates one from the GLB automatically.',
    'upload.submit': 'Upload and publish',
    'upload.previewAlt': 'Model preview',
    'upload.mine': 'My models',
    'upload.notGlb': 'The file must be a GLB.',
    'upload.tooBig': 'The file is {size} MB; the limit is 50 MB. Turn on Draco compression when exporting from Blender.',
    'upload.scaleWarn': 'Check the size: the largest side is {size}. If that isn’t the real size, fix the scale in Blender before uploading, or it will show at the wrong size in AR.',
    'upload.readError': 'Could not read the file. Make sure it is a valid GLB.',
    'upload.pickGlb': 'Choose a GLB file.',
    'upload.eachUnder': 'Each file must be under 50 MB.',
    'upload.needTitle': 'Enter a name for the model.',
    'upload.waitPreview': 'Wait until the preview appears.',
    'upload.stGlb': 'Uploading the model file…',
    'upload.stPoster': 'Saving the thumbnail…',
    'upload.stUsdz': 'Uploading the USDZ file…',
    'upload.stSave': 'Saving details…',
    'upload.published': 'Published',
    'upload.failed': 'Upload failed:',
    'upload.listError': 'Could not load the list.',
    'upload.noneYet': 'You haven’t uploaded any models yet.',
    'upload.view': 'View',
    'upload.delete': 'Delete',
    'upload.confirmDelete': 'Permanently delete “{title}”? Its link will stop working.',
    'upload.deleteFailed': 'Could not delete',
    'upload.deleted': 'Deleted',
  },
};

export function t(key, vars) {
  let s = dict[lang][key] ?? dict.ar[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
  return s;
}

export function formatLength(m) {
  return m >= 1 ? m.toFixed(2) + ' ' + t('unit.m') : Math.round(m * 100) + ' ' + t('unit.cm');
}

// Page title: "<page> — <site name>". Pass a model title to use it instead of the page key.
export function setTitle(keyOrText, isText = false) {
  document.title = (isText ? keyOrText : t(keyOrText)) + ' — ' + t('site.name');
}

export function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
}

// Button that reloads the page in the other language and remembers the choice.
export function mountLangSwitch(el) {
  if (!el) return;
  const other = lang === 'ar' ? 'en' : 'ar';
  el.textContent = t('lang.switch');
  el.lang = other;
  el.setAttribute('aria-label', t('lang.switchLabel'));
  el.addEventListener('click', () => {
    try { localStorage.setItem('hc-lang', other); } catch {}
    const url = new URL(location.href);
    url.searchParams.set('lang', other);
    location.replace(url);
  });
}

applyI18n();
mountLangSwitch(document.getElementById('lang-switch'));
const pageTitle = document.documentElement.dataset.titleKey;
if (pageTitle) setTitle(pageTitle);
document.documentElement.classList.remove('i18n-pending');
