// intent : type_red , ==>> TP : red 
{
  "line": {
    "contents": {
      "direction": "ltr",
      "body": {
        "action": {
          "type": "message",
          "text": "ร้านค้า ตัวอย่าง OTOP.",
          "label": "action"
        },
        "layout": "vertical",
        "borderWidth": "normal",
        "justifyContent": "center",
        "contents": [
          {
            "action": {
              "type": "message",
              "label": "action",
              "text": "e-mail:ratiwat@psru.ac.th"
            },
            "type": "text",
            "text": "ไก่แดง"
          },
          {
            "type": "text",
            "text": "ฟาร์มไร่ราชันย์"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "button",
                "action": {
                  "label": "ข้อมูลไก่แดง",
                  "text": "red",
                  "type": "message"
                },
                "color": "#B51B75",
                "style": "secondary"
              }
            ]
          },
          {
            "layout": "vertical",
            "type": "box",
            "contents": [
              {
                "action": {
                  "uri": "https://sites.google.com/botchicknative.net/site-native-chicken/%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%99%E0%B8%98%E0%B9%84%E0%B8%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B9%81%E0%B8%94%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B9%81%E0%B8%94%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B3",
                  "type": "uri",
                  "label": "ไก่ทองแดงหางดำ"
                },
                "type": "button",
                "style": "primary"
              },
              {
                "type": "box",
                "contents": [
                  {
                    "color": "#5BBCFF",
                    "style": "secondary",
                    "action": {
                      "uri": "https://sites.google.com/botchicknative.net/site-native-chicken/%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%99%E0%B8%98%E0%B9%84%E0%B8%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B9%81%E0%B8%94%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B9%81%E0%B8%94%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B3/%E0%B9%84%E0%B8%81%E0%B8%99%E0%B8%81%E0%B8%81%E0%B8%A3%E0%B8%94%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%B3",
                      "type": "uri",
                      "label": "ไก่นกกรดหางดำ"
                    },
                    "type": "button"
                  }
                ],
                "layout": "vertical"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "button",
                    "color": "#B51B75",
                    "action": {
                      "type": "message",
                      "label": "สายพันธ์ไก่พื้นเมือง",
                      "text": "two"
                    },
                    "style": "secondary"
                  }
                ]
              },
              {
                "type": "box",
                "contents": [
                  {
                    "color": "#F3CA52",
                    "type": "button",
                    "action": {
                      "label": "ไก่นกแดงหางแดง",
                      "uri": "https://sites.google.com/botchicknative.net/site-native-chicken/%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%99%E0%B8%98%E0%B9%84%E0%B8%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B9%81%E0%B8%94%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%AA%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%94%E0%B8%87/%E0%B9%84%E0%B8%81%E0%B8%99%E0%B8%81%E0%B9%81%E0%B8%94%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%94%E0%B8%87",
                      "type": "uri"
                    },
                    "style": "secondary"
                  }
                ],
                "layout": "vertical"
              }
            ]
          }
        ],
        "alignItems": "center",
        "cornerRadius": "md",
        "type": "box"
      },
      "header": {
        "type": "box",
        "action": {
          "type": "message",
          "text": "inv1",
          "label": "action"
        },
        "contents": [
          {
            "type": "text",
            "weight": "regular",
            "text": "Botไก่พื้นเมือง by Ratiwat",
            "style": "normal"
          }
        ],
        "layout": "vertical",
        "backgroundColor": "#F781F3",
        "position": "relative"
      },
      "hero": {
        "action": {
          "type": "message",
          "text": "two",
          "label": "ทดสอบ"
        },
        "background": {
          "startColor": "#000000",
          "type": "linearGradient",
          "angle": "0deg",
          "endColor": "#ffffff"
        },
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "url": "https://lh5.googleusercontent.com/d/1N54_DmLQx8Dt7Gm70bI9-PAgx1-FFg7x=s260",
            "align": "center",
            "type": "image",
            "aspectMode": "cover"
          }
        ]
      },
      "type": "bubble"
    },
    "altText": "ฟาร์มไก่พื้นเมือง ฟาร์มราชันย์",
    "type": "flex"
  }
}