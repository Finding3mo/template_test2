import React from "react";

type Props = {};

const Description = (props: Props) => {
  return (
    <div className="description">
      <h2>説明</h2>
      <p>
        Reactチュートリアル (
        <a href="https://ja.reactjs.org/tutorial/tutorial.html">
          https://ja.reactjs.org/tutorial/tutorial.html
        </a>
        )
        のクラスコンポーネントを関数コンポーネントで書き直し、見た目を整えました。
      </p>
      <p>
        フロントエンドは TypeScript + React<br></br>バックエンドは PHP + Laravel
        で作っています。
      </p>
      <p>
        <a href="https://github.com/Finding3mo/experiment">
          ソースコード (GitHub)
        </a>
      </p>
    </div>
  );
};

export default Description;
