<template lang="pug">
  .courses.ui.container
    h1.ui.header 自主學習準備課程
      .sub.header 深入瞭解自主學習的重要性，並為自己設定學習目標

    br
    a.ui.purple.button(:href="'https://docs.google.com/document/d/' + YourDocumentID + '/edit?usp=sharing'", target="_blank", rel="noopener norefferer")
      i.file.pdf.icon
      | Google文件檢視
    iframe(width="100%",
      height="600px",
      frameborder="0",
      allowfullscreen,
      :src="'https://docs.google.com/document/d/' + YourDocumentID + '/preview'")

  </template>

  <script>

  export default {
    name: 'Faq',
    data () {
      return {
        YourDocumentID: '1yt6b54TkNff9gBsJXCO_Ci1h5bhV2iJVs2AskqwzI3w'
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

  p {
    font-size: 18px;
    text-align: left;
    max-width: 620px;
    margin: .6em auto;
    color: rgb(64, 3, 206);
  }
  </style>
