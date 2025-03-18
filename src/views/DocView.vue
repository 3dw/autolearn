<template lang="pug">
  .courses.ui.container
    h1.ui.header 自主學習準備課程
      .sub.header 深入瞭解自主學習的重要性，並為自己設定學習目標

    br
    .ui.stackable.buttons
      a.ui.purple.button(:href="'https://docs.google.com/document/d/' + YourDocumentID + '/edit?usp=sharing'", target="_blank", rel="noopener norefferer")
        i.file.pdf.icon
        | Google文件
      a.ui.blue.button(:href="'https://docs.google.com/document/d/1yt6b54TkNff9gBsJXCO_Ci1h5bhV2iJVs2AskqwzI3w/edit?tab=t.z7k9ilju7ny1#heading=h.t0vcj017thli'", target="_blank", rel="noopener norefferer")
        i.file.pdf.icon
        | 給青少年
      a.ui.green.button(:href="'https://docs.google.com/document/d/1yt6b54TkNff9gBsJXCO_Ci1h5bhV2iJVs2AskqwzI3w/edit?tab=t.w6wro55ogpm3#heading=h.gvqz8axmwjry'", target="_blank", rel="noopener norefferer")
        i.file.pdf.icon
        | 給家長
      a.ui.red.button(:href="'https://docs.google.com/document/d/1yt6b54TkNff9gBsJXCO_Ci1h5bhV2iJVs2AskqwzI3w/edit?tab=t.rg72koz5mdry#heading=h.2an2je618isr'", target="_blank", rel="noopener norefferer")
        i.file.pdf.icon
        | 給教師

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
