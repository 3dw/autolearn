<template>
<div class="ui container">
  <div class="ui segment">
    <div class="ui two column stackable grid">
      <div class="column">
        <h1 class="ui center aligned header">教師簡介</h1>
        <img src="@/assets/about_me.png" alt="教師照片" class="ui round image">
        <p>教師：李雅卿</p>
        <p>簡介：</p>
        <p>國立政治大學法學碩士。</p>
        <p>種籽實小創校人。</p>
        <p>曾任：台北市(國高中六年一貫)自主學習實驗計畫主持人、懼/拒學青少年自主培力學園主持人、自主培力親師動力營帶領人。</p>
        <p>著作：《種籽手記》、《天天驚喜》、《成長戰爭》、《乖孩子的傷，最重》、《自主學習六講》、《青少年人權手冊》、《自主學習手冊(合著)》等</p>
      </div>
      <div class="column">
        <h1 class="ui center aligned header">緣起</h1>
        <p>17年前決定退休，告別教育界回歸家庭事奉雙親後，不再與外界聯絡。日前有機會和幾位還在第一線努力的教育夥伴們見面，得知目前國家108課綱雖將「自發、互動、共好」列為基本原則，但是要從傳統教育型態轉型到自主學習型態，似乎比想像中困難。</p>
        <p>許多學校或家庭把「在家自學」當成學生的最後安置可能。但是這些「被自學」的學生，卻沒有人來告訴他們如何培養自主學習的能力？其結果是一種殘忍的放棄。</p>
        <p>想到當年我主持「台北市（國高中六年一貫）自主學習實驗計畫」的時候，國一剛入學的學生都必修「學習理論與學習方法」，準備進入第三階段「自主學程」的高一學生，也有「自主學習準備課」協助他們培養如何擬定學習計劃，如何有效執行與最終考核的賦能課程。整個學程還有導師的陪同。</p>
        <p>孩子們不是在架空的環境中就能有效自主學習的，這也是為什麼我們當年的自主學習實驗計畫會強調親、師、生必須共同努力的原因。</p>
        <p>「我們也很努力啊！只是我們的努力常常事倍而功半，受到諸多力量的干擾和影響。」現場第一線工作者如是說。</p>
        <p>於是我想把相關的實作經驗，配合學年制整理成一學期的課程，試試看能不能在這個轉型期中，發揮一點正向功能。</p>
        <p class="right aligned">
          <div class="ui buttons flex-rwd">
            <router-link to="/doc_teens" class="ui green large button">
              <i class="book icon"></i>
              <span>青少年篇</span>
            </router-link>
            <router-link to="/doc_parents" class="ui purple large button">
              <i class="book icon"></i>
              <span>家長篇</span>
            </router-link>
            <router-link to="/doc_educators" class="ui blue large button">
              <i class="book icon"></i>
              <span>教師篇</span>
            </router-link>
          </div>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<style>
p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 1rem;
}

img.ui.round.image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 1em auto;
}
/* 這裡可以加入自定義的樣式 */
</style>
