import React from "react";
import { Image, Card, Button } from "yiqilaiui";
import OperaPlus from "teasim-icon/lib/OperaPlus";
import OperaMinus from "teasim-icon/lib/OperaMinus";

export default (props) => (
  <div className="ds-block ba-auto mb-wide">
    <div className="ds-fable a-avatar">
      <div className="a-avatar-brand">
        <Image
          className="ds-block dw-100"
          defaultSource="https://avatars3.githubusercontent.com/u/5780482?s=460&v=4"
          src="https://avatars3.githubusercontent.com/u/5780482?s=460&v=4"
        />
      </div>
      <div className="a-avatar-board">
        <div className="pa-medium">
          <h3 className="my-none pb-medium">YE WENBIAO</h3>
          <hr className="mb-medium" />
          <ul className="list-none">
            <li className="mb-small"><small>yewenbill@outlook.com</small></li>
            <li className="mb-small"><small>Singapore ⇄ China</small></li>
            <li className="mb-small"><small>+65 90235611</small></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);