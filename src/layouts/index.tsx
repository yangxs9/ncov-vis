import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>新型肺炎疫情地区趋势</h1>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.footer}>
          <div>数据来源自 <a href="https://ncov.dxy.cn/ncovh5/view/pneumonia">丁香园</a> & <a href="https://github.com/BlankerL/DXY-2019-nCoV-Crawler">BlankerL</a> </div>
          Copyright © <a href="https://github.com/yangxs9/ncov-vis">yangxs</a>
        </div>
    </div>
  );
};

export default BasicLayout;
