<?php
$urls = array(
    'http://www.eecn.cc',
'http://www.eecn.cc/app-android.html',
'http://www.eecn.cc/help-hezuo.html',
'http://www.eecn.cc/help-jishu.html',
'http://www.eecn.cc/home-detail-107.html',
'http://www.eecn.cc/activity-detail-6.html',
'http://www.eecn.cc/company-49.html',
'http://www.eecn.cc/passport.html',
'http://www.eecn.cc/about-jobs.html',
'http://www.eecn.cc/help-fwlc.html',
'http://www.eecn.cc/home-map.html',
'http://www.eecn.cc/index.html',
'http://www.eecn.cc/help-zxb.html',
'http://www.eecn.cc/case-detail-89.html',
'http://www.eecn.cc/ask-detail-259.html',
'http://www.eecn.cc/activity-detail-1.html',
'http://www.eecn.cc/diary-detail-11.html',
'http://www.eecn.cc/gs.html',
'http://www.eecn.cc/news-detail-2.html',
'http://www.eecn.cc/case-detail-92.html',
'http://www.eecn.cc/ask-detail-254.html',
'http://www.eecn.cc/ask.html',
'http://www.eecn.cc/company-50.html',
'http://www.eecn.cc/help-tupian.html',
'http://www.eecn.cc/youhui.html',
'http://www.eecn.cc/case/album-0-0-0-71-0-0-1.html',
'http://www.eecn.cc/company-60.html',
'http://www.eecn.cc/news-detail-3.html',
'http://www.eecn.cc/ask-detail-251.html',
'http://www.eecn.cc/help-jiaju.html',
'http://www.eecn.cc/company-47.html',
'http://www.eecn.cc/zxb.html',
'http://www.eecn.cc/tools-bizhi.html',
'http://www.eecn.cc/blog-266.html',
'http://www.eecn.cc/case/album-0-0-0-0-78-0-1.html',
'http://www.eecn.cc/home-detail-108.html',
'http://www.eecn.cc/case/album-0-0-0-74-0-0-1.html',
'http://www.eecn.cc/help-yuyue.html',
'http://www.eecn.cc/ask-detail-257.html',
'http://www.eecn.cc/about-youqinglj.html',
'http://www.eecn.cc/case-detail-90.html',
'http://www.eecn.cc/blog-269.html',
'http://www.eecn.cc/tools-chuanlian.html',
'http://www.eecn.cc/company-56.html',
'http://www.eecn.cc/help-cailiao.html',
'http://www.eecn.cc/article-detail-109.html',
'http://www.eecn.cc/trade/cart.html',
'http://www.eecn.cc/article-detail-113.html',
'http://www.eecn.cc/about-contact.html',
'http://www.eecn.cc/tools-tuliao.html',
'http://www.eecn.cc/company-53.html',
'http://www.eecn.cc/case/album-0-0-0-73-0-0-1.html',
'http://www.eecn.cc/case.html',
'http://www.eecn.cc/tools-qiangzhuan.html',
'http://www.eecn.cc/about-mobile.html',
'http://www.eecn.cc/diary.html',
'http://www.eecn.cc/article-detail-106.html',
'http://www.eecn.cc/help-register.html',
'http://www.eecn.cc/help-houtai.html',
'http://www.eecn.cc/ask-detail-256.html',
'http://www.eecn.cc/help-tiaokuan.html',
'http://www.eecn.cc/article-detail-176.html',
'http://www.eecn.cc/activity-detail-5.html',
'http://www.eecn.cc/home-tuan.html',
'http://www.eecn.cc/article-detail-175.html',
'http://www.eecn.cc/home-tuanDetail-9.html',
'http://www.eecn.cc/case-detail-94.html',
'http://www.eecn.cc/help-zhunbei.html',
'http://www.eecn.cc/article-detail-116.html',
'http://www.eecn.cc/article.html',
'http://www.eecn.cc/blog-271.html',
'http://www.eecn.cc/diary-detail-12.html',
'http://www.eecn.cc/ask-detail-255.html',
'http://www.eecn.cc/site.html',
'http://www.eecn.cc/article-detail-174.html',
'http://www.eecn.cc/diary-detail-9.html',
'http://www.eecn.cc/app.html',
'http://www.eecn.cc/article-detail-177.html',
'http://www.eecn.cc/help-zxgs.html',
'http://www.eecn.cc/case-detail-91.html',
'http://www.eecn.cc/activity.html',
'http://www.eecn.cc/case/album-0-0-0-72-0-0-1.html',
'http://www.eecn.cc/app-iphone.html',
'http://www.eecn.cc/mechanic.html',
'http://www.eecn.cc/about-flfg.html',
'http://www.eecn.cc/article-detail-172.html',
'http://www.eecn.cc/home-detail-109.html',
'http://www.eecn.cc/help-liucheng.html',
'http://www.eecn.cc/help-yonghuxieyi.html',
'http://www.eecn.cc/case/album-0-0-0-76-0-0-1.html',
'http://www.eecn.cc/article-detail-171.html',
'http://www.eecn.cc/news-detail-4.html',
'http://www.eecn.cc/ask-detail-253.html',
'http://www.eecn.cc/company-52.html',
'http://www.eecn.cc/company-51.html',
'http://www.eecn.cc/tools-dizhuan.html',
'http://www.eecn.cc/home-tuanDetail-10.html',
'http://www.eecn.cc/home.html',
'http://www.eecn.cc/blog-270.html',

);
$api = 'http://data.zz.baidu.com/urls?site=www.eecn.cc&token=D4V5FlFGHIYBGYUK';
$ch = curl_init();
$options =  array(
    CURLOPT_URL => $api,
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => implode("\n", $urls),
    CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),
);
curl_setopt_array($ch, $options);
$result = curl_exec($ch);
echo $result;
?>