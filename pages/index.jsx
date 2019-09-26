import React from 'react';
import Head from 'next/head';
import { Scripts } from '../components/scripts';

const Home = () => (
  <div>
    <Head>
      <title>Template-Test</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div className="table">
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button className="low" />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button className="critical" />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td blackboard bRight">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td blackboard bRight">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td blackboard bRight">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div className="table">
      <div className="tr">
        <div className="td">T</div>
        <div className="td">T</div>
        <div className="td">T</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td workspace">
          <button />
        </div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td workspace">
          <button />
        </div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
      </div>
      <div className="tr">
        <div className="td workspace">
          <button />
        </div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td workspace">
          <button />
        </div>
      </div>
      <div className="tr">
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
        <div className="td">&nbsp;</div>
        <div className="td workspace">
          <button />
        </div>
        <div className="td">&nbsp;</div>
      </div>
    </div>
    <style jsx>
      {`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
        .workspace {

      }
        .table {

      }
        .tr {

      }
        .td {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 2px;
      }
        .td > button {
        width: 36px;
        height: 36px;
        background-color: lime;
        border: 1px solid black;
        border-radius: 4px;
      }
        button.low {
        background - color: yellow;
      }
        button.critical {
        background - color: red;
      }
        .blackboard.bRight {
        border - right: 2px solid green;
      }
      `}
    </style>
    <Scripts />
  </div>
);

export default Home;
