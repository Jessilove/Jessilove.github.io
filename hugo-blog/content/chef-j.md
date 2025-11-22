---
title: "Chef J"
date: 2019-10-05
type: page
icon: bookmark
weight: 2
menu: main
markup: html
---

<style>
/* Chef J 图片网格样式 */
.chef-j-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8fd; /* 恢复白色背景底 */
    box-shadow: 0 1px 2px rgba(0,0,0,0.4), 0 0 30px rgba(10,10,0,0.1) inset; /* 添加阴影效果 */
}

.chef-j-page .gallery-section {
    margin-bottom: 50px;
}

.chef-j-page .gallery-section h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 4px solid #4d6dad;
}

.chef-j-page .gallery-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.chef-j-page .gallery-item {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.chef-j-page .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.chef-j-page .gallery-item .image-container {
    width: 100%;
    padding-top: 100%; /* 正方形比例 */
    position: relative;
    overflow: hidden;
    background: #f5f5f5;
}

.chef-j-page .gallery-item .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.chef-j-page .gallery-item .item-info {
    padding: 12px;
}

.chef-j-page .gallery-item .item-info .item-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chef-j-page .gallery-item .item-info .item-description {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 增加到3行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word; /* 确保长单词换行 */
}

.chef-j-page .gallery-item .item-info .item-recipe {
    font-size: 12px;
    color: #999;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #f0f0f0;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 增加到3行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word; /* 确保长单词换行 */
}

/* 响应式设计 */
@media screen and (max-width: 1400px) {
    .chef-j-page .gallery-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 1024px) {
    .chef-j-page .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .chef-j-page {
        padding: 10px;
    }

    .chef-j-page .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    .chef-j-page .gallery-item .item-info {
        padding: 8px;
    }

    .chef-j-page .gallery-item .item-info .item-name {
        font-size: 14px;
    }

    .chef-j-page .gallery-item .item-info .item-description {
        font-size: 12px;
    }

    .chef-j-page .gallery-item .item-info .item-recipe {
        font-size: 11px;
    }
}

@media screen and (max-width: 480px) {
    .chef-j-page .gallery-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>

<div class="chef-j-page">
    <h1>Chef J</h1>
    <div style="margin-bottom: 20px; color: #666; font-size: 16px;">
        来来来，佳佳的小饭馆开业啦（挂上小招牌），支持点单~<br>
        你好，我是你们的服务员兼洗碗工兼收银员扯扯，请问要点些什么呢？
    </div>

    <div class="gallery-section">
        <h2>荤菜热炒</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_hongshaorou.jpg" alt="红烧肉">
                </div>
                <div class="item-info">
                    <div class="item-name">红烧肉</div>
                    <div class="item-description">本馆招牌，用最上等的五花，肥而不腻，一块下去满口香</div>
                    <div class="item-recipe">做法：买肉 → 洗完了炒 → （我只是一个洗碗工，并不知道怎么做）</div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_paigu.jpg" alt="红烧排骨">
                </div>
                <div class="item-info">
                    <div class="item-name">红烧排骨</div>
                    <div class="item-description">本馆招牌，用最好的肋排，鲜嫩多汁，微甜辣的口感刺激味蕾，让人想再嚼一大口米饭</div>
                    <div class="item-recipe">做法：我佳做了很多很多菜 → 做法我都不知道 → 等她填坑</div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_kaoji.jpg" alt="佳佳烤鸡">
                </div>
                <div class="item-info">
                    <div class="item-name">佳佳烤鸡</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_hongshaozhouzi.jpg" alt="红烧肘子">
                </div>
                <div class="item-info">
                    <div class="item-name">红烧肘子</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_hongshaochigen.jpg" alt="红烧翅根">
                </div>
                <div class="item-info">
                    <div class="item-name">红烧翅根</div>
                    <div class="item-description"></div>
                    <div class="item-recipe">做法：备好调料，鸡翅根划刀，盐和酱油腌制15分钟 → 凉水入锅，水开捞出。煸炒干表面水分后备用 → 按照1：2：3：4的比例配置耗油、酱油、料酒、糖，加入油 → 小火煎鸡翅根至金黄后，加入葱、姜、辣椒、蒜翻炒。将配置好的料加入锅内 → 翻炒后加入水、八角、葱花，小火收汁，时刻关注锅内，不要收汁收过</div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_kaojichigen.jpg" alt="烤翅根">
                </div>
                <div class="item-info">
                    <div class="item-name">烤翅根</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_dajiangjidan.jpg" alt="大酱鸡蛋">
                </div>
                <div class="item-info">
                    <div class="item-name">大酱鸡蛋</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_zhajiliu.jpg" alt="炸鸡柳">
                </div>
                <div class="item-info">
                    <div class="item-name">炸鸡柳</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>素菜热炒</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_chaosijidou.jpg" alt="炒四季豆">
                </div>
                <div class="item-info">
                    <div class="item-name">炒四季豆</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_chaotudousi.jpg" alt="炒土豆丝">
                </div>
                <div class="item-info">
                    <div class="item-name">炒土豆丝</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_chaodouyajpg.jpg" alt="炒豆芽">
                </div>
                <div class="item-info">
                    <div class="item-name">炒豆芽</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_duojiaojidan.jpg" alt="炒金针菇">
                </div>
                <div class="item-info">
                    <div class="item-name">炒金针菇</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_duojiaojinzhengu.jpg" alt="剁椒金针菇">
                </div>
                <div class="item-info">
                    <div class="item-name">剁椒金针菇</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>冷盘</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_zhengnangua.jpg" alt="蒸南瓜">
                </div>
                <div class="item-info">
                    <div class="item-name">蒸南瓜</div>
                    <div class="item-description">精髓在于佳佳秘制酱~</div>
                    <div class="item-recipe">做法：秘制酱汁不外传</div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>热汤</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_bocaitang.jpg" alt="菠菜蛋汤">
                </div>
                <div class="item-info">
                    <div class="item-name">菠菜蛋汤</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_jiaoguatang.jpg" alt="角瓜蛋汤">
                </div>
                <div class="item-info">
                    <div class="item-name">角瓜蛋汤</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_xiaobaicaitang.jpg" alt="小白菜汤">
                </div>
                <div class="item-info">
                    <div class="item-name">小白菜汤</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>主食</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_jiaozi.jpg" alt="饺子">
                </div>
                <div class="item-info">
                    <div class="item-name">饺子</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_kaolengmian.jpg" alt="烤冷面">
                </div>
                <div class="item-info">
                    <div class="item-name">烤冷面</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_fangbianmian.jpg" alt="方便面">
                </div>
                <div class="item-info">
                    <div class="item-name">方便面</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_chunbing.jpg" alt="春饼">
                </div>
                <div class="item-info">
                    <div class="item-name">春饼</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_nanguabing.jpg" alt="南瓜饼">
                </div>
                <div class="item-info">
                    <div class="item-name">南瓜饼</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_jiajiasanmingzhi.jpg" alt="佳佳三明治">
                </div>
                <div class="item-info">
                    <div class="item-name">佳佳三明治</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_dabaimantou.jpg" alt="大白馒头">
                </div>
                <div class="item-info">
                    <div class="item-name">大白馒头</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>甜品</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_jidanzai.jpg" alt="鸡蛋仔">
                </div>
                <div class="item-info">
                    <div class="item-name">鸡蛋仔</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_bingguner.jpg" alt="冰棍儿">
                </div>
                <div class="item-info">
                    <div class="item-name">冰棍儿</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>

            <div class="gallery-item">
                <div class="image-container">
                    <img src="/pic/chefj_danta.jpg" alt="蛋挞">
                </div>
                <div class="item-info">
                    <div class="item-name">蛋挞</div>
                    <div class="item-description"></div>
                    <div class="item-recipe"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="gallery-section">
        <h2>饮料</h2>
        <div class="gallery-grid">
        </div>
    </div>
</div>