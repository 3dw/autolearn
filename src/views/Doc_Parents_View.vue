<template lang="pug">
  .courses.ui.container
    h1.ui.header 自主學習準備課程-家長篇
      .sub.header 深入瞭解自主學習的重要性，並為自己設定學習目標

    img.card-img(src="@/assets/CC-BY-NC-SA.png")

    .ui.segment
      h2.ui.header 課程基本資訊
      .ui.list
        .item
          i.users.icon
          .content 人數：7~24人
        .item
          i.clock.icon
          .content 時間：三小時一堂
        .item
          i.calendar.icon
          .content 期程：16堂課一期
        .item
          i.sync.alternate.icon
          .content 課程進行方式：互動討論式、分組進行(大組、小組)

    .ui.segments
      .ui.segment
        h2.ui.header 一、自我介紹(白紙操作)
        .ui.bulleted.list
          .item 畫一張你、伴侶和孩子的圖係圖(圖像)
          .item 人為什麼要活著？你為什麼活著？(文字)
          .item 為什麼你決定生養人類的孩子？(文字)
          .item 你對當父母這件事有過困惑、挫折或其他負面情緒嗎？
          .item 分享交流
          .item 作用：自我鏡照，並作為後續建立學習檔案之資料

      .ui.segment
        h2.ui.header 二、建立討論文化(一)
        h3.ui.header 組內討論角色分配與功能
        .ui.list
          .item
            i.user.icon
            .content 主持人
          .item
            i.pencil.alternate.icon
            .content 記錄
          .item
            i.hourglass.half.icon
            .content 時間精靈
          .item
            i.heart.icon
            .content 心靈天使
          .item
            i.bullhorn.icon
            .content 報告人
          .item
            i.users.icon
            .content 參與者
        p 建立課堂共識(實作)

      .ui.segment
        h2.ui.header 三、建立討論文化(二)
        p 了解討論文化的七項要素(講解)
        .ui.ordered.list
          .item 聆聽
          .item 尊重感受
          .item 合作的態度(協同思考而非辯論)
          .item 提意見要附理由
          .item 用詞定義釐清
          .item 界線清楚
          .item 結論開放
        p 界限概念與釐清實作

      .ui.segment
        h2.ui.header 四、家庭動力系統(一)
        .ui.bulleted.list
          .item 冰山理論
          .item 缺點都是誤用的優點
          .item 檢自己對孩子的觀點
          .item 小組分享與討論

      .ui.segment
        h2.ui.header 五、家庭動力系統(二)
        .ui.bulleted.list
          .item 薩提爾理論中的對應模式
          .item 家庭對應模式檢視
          .item 以對應模式的角度註記關係圖
          .item 自由分享與討論

      .ui.segment
        h2.ui.header 六、家庭動力系統(三)
        .ui.bulleted.list
          .item 對應習慣檢視(情境摹擬)
          .item 階層文化與成長文化的釐清討論
          .item 成長規約的反思與解構

      .ui.segment
        h2.ui.header 七、瞭解並建立學習知能(一)
        h3.ui.header 多元智能與學習風格
        .ui.bulleted.list
          .item 語言文字
          .item 數學邏輯
          .item 空間
          .item 肢體動覺
          .item 聲音
          .item 人際
          .item 內省
          .item 自然
          .item 存在
        p 學習風格線上測驗

      .ui.segment
        h2.ui.header 八、瞭解並建立學習知能(二)
        h3.ui.header 學習的基本能力與配備
        p 自主學習的四個階段
        .ui.bulleted.list
          .item 解放 => 安全感
          .item 自我中心 => 界限
          .item 眼高手低 => 小階梯與成功經驗
          .item 自主成熟 => 知、行、悟的螺旋向上

        p 如何建立家庭中共同面對學習的正向態度
        .ui.bulleted.list
          .item 加分概念
          .item
            | PDCA循環
            .ui.ordered.list
              .item Plan => 計畫
              .item Do => 執行
              .item Check => 檢查
              .item Action(增, 減, 停) => 行動(增加、減少、停止)
          .item 習慣的力量(覺察、評估、改變、自我酬賞)

      .ui.segment
        h2.ui.header 九、瞭解並建立學習知能(三)
        .ui.bulleted.list
          .item 學習階梯的概念與實務(如何把大挑戰柝解成小步驟)
          .item 以語文學習為例
          .item 以自由數學的學習地圖為例

      .ui.segment
        h2.ui.header 十、瞭解並建立學習知能(四)
        .ui.bulleted.list
          .item 學習動力初探
          .item 麻痺經驗與重建
          .item 興趣試探與深化
          .item 挫折忍受與資源尋求

      .ui.segment
        h2.ui.header 十一、自我接納與潛能探索(一)
        .ui.bulleted.list
          .item 周-哈里窗(實際繪製操作)
          .item 理想小孩圖像與檢視
          .item 社會角色、理想父母與自我定位
          .item 個人書寫
          .item 小組分享與討論

      .ui.segment
        h2.ui.header 十二~十五、同理能力與社群建立
        p 以同理回饋即興劇場進行
        p 參考
          a(href="https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?tab=t.0#heading=h.32ourccsnq6m", target="_blank", rel="noopener norefferer") Playback精華

      .ui.segment
        h2.ui.header 十六、回顧與展望
        p 印地安羽毛形式的交流分享
  </template>

  <script>
  export default {
    name: 'Doc_Parents_View',
    data () {
      return {
      }
    }
  }
  </script>

  <style scoped>
  .ui.card {
    padding: 1em;
  }

  img.card-img {
    max-width: 33vmin;
  }

  p, .ui.list > .item {
    font-size: 18px;
    text-align: left;
    max-width: 620px;
  }

  .ui.segments {
    margin-top: 2em;
  }

  .ui.segment {
    margin-bottom: 1em;
  }

  .ui.header {
    margin-top: 1em;
  }

  .ui.list {
    margin: 1em;
  }

  @media (max-width: 768px) {
    .ui.stackable.buttons {
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .ui.stackable.buttons .button {
      width: 100%;
      margin: 0;
    }

    .ui.stackable.buttons .button:first-child {
      border-radius: 5px 5px 0 0;
    }

    .ui.stackable.buttons .button:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
  </style>
