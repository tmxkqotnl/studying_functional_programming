var users = [
    { id: 101, name: "ID" },
    { id: 102, name: "BJ" },
    { id: 103, name: "PJ" },
    { id: 104, name: "HA" },
    { id: 105, name: "JE" },
    { id: 106, name: "JI" },
  ];

  var posts = [
    { id: 201, body: "내용1", user_id: 101 },
    { id: 202, body: "내용2", user_id: 102 },
    { id: 203, body: "내용3", user_id: 103 },
    { id: 204, body: "내용4", user_id: 102 },
    { id: 205, body: "내용5", user_id: 101 },
  ];

  var comments = [
    { id: 301, body: "댓글1", user_id: 105, post_id: 201 },
    { id: 302, body: "댓글2", user_id: 104, post_id: 201 },
    { id: 303, body: "댓글3", user_id: 104, post_id: 202 },
    { id: 304, body: "댓글4", user_id: 105, post_id: 203 },
    { id: 305, body: "댓글5", user_id: 106, post_id: 203 },
    { id: 306, body: "댓글6", user_id: 106, post_id: 204 },
    { id: 307, body: "댓글7", user_id: 102, post_id: 205 },
    { id: 308, body: "댓글8", user_id: 103, post_id: 204 },
    { id: 309, body: "댓글9", user_id: 103, post_id: 202 },
    { id: 310, body: "댓글10", user_id: 105, post_id: 201 },
  ];

  var products = [
    {
      is_selected: true, // <--- 장바구니에서 체크 박스 선택
      name: "반팔티",
      price: 10000, // <--- 기본 가격
      sizes: [ // <---- 장바구니에 담은 동일 상품의 사이즈 별 수량과 가격
        { name: "L", quantity: 4, price: 0 },
        { name: "XL", quantity: 2, price: 0 },
        { name: "2XL", quantity: 3, price: 2000 }, // <-- 옵션의 추가 가격
      ]
    },
    {
      is_selected: true,
      name: "후드티",
      price: 21000,
      sizes: [
        { name: "L", quantity: 2, price: -1000 },
        { name: "2XL", quantity: 4, price: 2000 },
      ]
    },
    {
      is_selected: false,
      name: "맨투맨",
      price: 16000,
      sizes: [
        { name: "L", quantity: 10, price: 0 }
      ]
    }
  ];