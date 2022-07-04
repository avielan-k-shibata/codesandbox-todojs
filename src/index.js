import "./styles.css";

document.getElementById("app").innerHTML = `

`;

const onClickAdd = () => {
  //テキストボックスの値を取得して初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li, div生成
  const li = document.createElement("li");
  li.className = "list-row";
  const div = document.createElement("div");
  const p = document.createElement("p");

  p.innerText = inputText;

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    //削除ボタンの親タグを削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
    // console.log(deleteTarget);
  });
  deleteButton.innerText = "削除";
  //liの下に各要素を格納
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
