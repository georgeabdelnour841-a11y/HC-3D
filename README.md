# منصة المجسّمات ثلاثية الأبعاد — AR / VR

موقع ثابت (بدون خادم ولا قاعدة بيانات) لعرض مجسّمات GLB من Tripo و Blender:

| الصفحة | ماذا تفعل |
|---|---|
| `index.html` | المعرض + معاينة ملف من جهازك (لا يُرفع إلى أي مكان) |
| `view.html?m=<id>` | عرض 3D، الأبعاد الحقيقية، زر **AR**، مشاركة الرابط، رمز QR |
| `vr.html?m=<id>` | مشهد **VR** لنظارات مثل Meta Quest، مع وضع **AR** (Passthrough) |

## 1) تجهيز المجسّم في Blender

1. استورد ملف Tripo، واضبط **الحجم الحقيقي بالمتر** (Scene Properties → Units = Metric, Unit Scale = 1). مجسّم طوله 1.8 م يجب أن يكون 1.8 في Blender — هكذا يظهر بحجمه الحقيقي في AR.
2. ضع قاعدة المجسّم على الأرض (Z = 0).
3. `Ctrl+A → All Transforms` لتثبيت التحويلات.
4. File → Export → **glTF 2.0** بصيغة **glTF Binary (.glb)**. فعّل **Compression (Draco)** لتصغير الحجم.
5. حاول أن يبقى الملف **أقل من 10–15 MB** والقوام 2048px كحد أعلى، لأن الموبايل يحمّله عبر الإنترنت.

## 2) إضافة المجسّمات

1. انسخ ملفات `.glb` إلى مجلد `models/`.
2. (اختياري) صورة مصغّرة بنفس الاسم: `chair.webp` بجانب `chair.glb`.
3. (اختياري) ملف `chair.usdz` لـ iPhone — إن لم يوجد، يُنشأ تلقائياً من GLB.
4. شغّل:
   ```
   powershell -ExecutionPolicy Bypass -File tools\build-catalog.ps1
   ```
5. افتح `models/models.json` وعدّل `title` و `description` و `tags` بالعربي.
6. احذف مثال «رائد فضاء» من `models.json` عندما لا تحتاجه.

يمكن أيضاً أن يكون `src` رابطاً كاملاً لملف مستضاف في مكان آخر (يجب أن يسمح بـ CORS).

## 3) التجربة على الكمبيوتر

```
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```
ثم افتح `http://localhost:8080`. **لا تفتح `index.html` بالنقر المزدوج** — المتصفح يمنع تحميل القائمة.

## 4) النشر والمشاركة (رابط HTTPS مطلوب لـ AR و VR)

**الأسهل — Netlify Drop:** افتح `app.netlify.com/drop` واسحب مجلد `hc-3d-platform` كاملاً. ستحصل على رابط `https://….netlify.app` جاهز للمشاركة. لتحديث المجسّمات اسحب المجلد مرة أخرى من صفحة الموقع في Netlify (Deploys).

**بديل — GitHub Pages:** ارفع المجلد إلى مستودع، ثم Settings → Pages → Deploy from branch.

بعد النشر: شارك رابط `view.html?m=…` مباشرة، أو اعرض رمز QR من صفحة المجسّم.

## ماذا يحتاج كل جهاز

| الجهاز | AR | VR |
|---|---|---|
| Android (Chrome + Google Play Services for AR) | ✓ عبر Scene Viewer / WebXR | عرض 360° باللمس والحركة |
| iPhone / iPad (Safari) | ✓ عبر Quick Look | عرض 360° (Safari لا يدعم WebXR) |
| Meta Quest (المتصفح) | ✓ زر AR في صفحة VR (Passthrough) | ✓ كامل مع اليدين/أذرع التحكم |
| كمبيوتر | ✗ — امسح QR بالموبايل | عرض بالماوس |

## ملاحظات

- الألوان والخط حسب هوية مركز الرجاء المسيحي (الأحمر `#BE1F24` + الرماديات + Somar Sans). لتغيير الهوية إلى برنامج آخر (مثل LEAP) عدّل متغيرات `:root` في `assets/css/style.css` وبدّل الشعار.
- **ترخيص خط Somar Sans غير محسوم** للنشر العام على الويب — راجع `assets/fonts/LICENSE-NOTICE.md` قبل الإطلاق العام.
- المكتبات: `@google/model-viewer 3.5.0` و `A-Frame 1.6.0` و `qrcodejs 1.0.0` من CDN.
